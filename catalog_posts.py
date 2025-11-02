#!/usr/bin/env python3
"""
Catalog all Jekyll posts by extracting front matter metadata.
Creates a CSV index that can be extended with Characters and Summary columns.
"""

import os
import re
import csv
from pathlib import Path
from datetime import datetime

def extract_front_matter(content):
    """Extract YAML front matter from markdown content."""
    # Match front matter between --- delimiters
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return {}
    
    front_matter = {}
    yaml_content = match.group(1)
    
    # Parse simple YAML fields (handles strings, lists, and dates)
    for line in yaml_content.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            
            # Handle list values [tag1, tag2, tag3]
            if value.startswith('[') and value.endswith(']'):
                value = value[1:-1]  # Remove brackets
                value = [v.strip().strip('"').strip("'") for v in value.split(',')]
                value = ', '.join(value)  # Convert back to comma-separated string
            else:
                # Remove quotes if present
                value = value.strip('"').strip("'")
            
            front_matter[key] = value
    
    return front_matter

def catalog_posts(posts_dir):
    """Walk through posts directory and extract metadata from all markdown files."""
    posts = []
    posts_path = Path(posts_dir)
    
    # Find all markdown files recursively
    for md_file in posts_path.rglob('*.md'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            front_matter = extract_front_matter(content)
            
            if front_matter:  # Only include files with front matter
                # Get relative path from _posts directory
                rel_path = md_file.relative_to(posts_path)
                
                post_data = {
                    'file_path': str(rel_path),
                    'date': front_matter.get('date', ''),
                    'title': front_matter.get('title', ''),
                    'category': front_matter.get('category', front_matter.get('categories', '')),
                    'tags': front_matter.get('tags', ''),
                    'description': front_matter.get('description', front_matter.get('excerpt', '')),
                    'lastmod': front_matter.get('lastmod', ''),
                    'characters': '',  # Empty column for user to fill in
                    'summary': ''      # Empty column for user to fill in
                }
                posts.append(post_data)
        
        except Exception as e:
            print(f"Error processing {md_file}: {e}")
    
    # Also check for .markdown files
    for md_file in posts_path.rglob('*.markdown'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            front_matter = extract_front_matter(content)
            
            if front_matter:
                rel_path = md_file.relative_to(posts_path)
                
                post_data = {
                    'file_path': str(rel_path),
                    'date': front_matter.get('date', ''),
                    'title': front_matter.get('title', ''),
                    'category': front_matter.get('category', front_matter.get('categories', '')),
                    'tags': front_matter.get('tags', ''),
                    'description': front_matter.get('description', front_matter.get('excerpt', '')),
                    'lastmod': front_matter.get('lastmod', ''),
                    'characters': '',
                    'summary': ''
                }
                posts.append(post_data)
        
        except Exception as e:
            print(f"Error processing {md_file}: {e}")
    
    return posts

def write_csv(posts, output_file):
    """Write posts data to CSV file."""
    if not posts:
        print("No posts found!")
        return
    
    fieldnames = ['file_path', 'date', 'title', 'category', 'tags', 
                  'description', 'lastmod', 'characters', 'summary']
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        
        # Sort by date (most recent first)
        posts_sorted = sorted(posts, key=lambda x: x['date'], reverse=True)
        writer.writerows(posts_sorted)
    
    print(f"✓ Cataloged {len(posts)} posts to {output_file}")

def main():
    # Adjust this path to your _posts directory
    posts_dir = os.path.expanduser('~/projects/splendidstrontium.github.io/_posts')
    output_file = os.path.expanduser('~/projects/splendidstrontium.github.io/story_index.csv')
    
    print("Scanning posts directory...")
    posts = catalog_posts(posts_dir)
    
    print("Writing to CSV...")
    write_csv(posts, output_file)
    
    print("\nDone! You can now open story_index.csv and add Characters/Summary as needed.")
    print("The file is sorted by date (newest first).")

if __name__ == '__main__':
    main()