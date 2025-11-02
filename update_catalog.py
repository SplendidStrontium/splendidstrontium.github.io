#!/usr/bin/env python3
"""
Update the story index CSV with fresh metadata from posts while preserving
manually-entered characters and summary data.
"""

import os
import re
import csv
from pathlib import Path

def extract_front_matter(content):
    """Extract YAML front matter from markdown content."""
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return {}
    
    front_matter = {}
    yaml_content = match.group(1)
    
    for line in yaml_content.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            
            # Handle list values [tag1, tag2, tag3]
            if value.startswith('[') and value.endswith(']'):
                value = value[1:-1]
                value = [v.strip().strip('"').strip("'") for v in value.split(',')]
                value = ', '.join(value)
            else:
                value = value.strip('"').strip("'")
            
            front_matter[key] = value
    
    return front_matter

def read_existing_csv(csv_path):
    """Read existing CSV and return dict mapping file_path to manual data."""
    manual_data = {}
    
    if not os.path.exists(csv_path):
        print("No existing CSV found - will create new one")
        return manual_data
    
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            file_path = row['file_path']
            # Store only the manually-entered fields
            manual_data[file_path] = {
                'characters': row.get('characters', ''),
                'summary': row.get('summary', '')
            }
    
    print(f"✓ Loaded manual data for {len(manual_data)} existing posts")
    return manual_data

def catalog_posts(posts_dir, existing_manual_data):
    """Scan posts and merge with existing manual data."""
    posts = []
    posts_path = Path(posts_dir)
    
    # Find all markdown files
    for md_file in list(posts_path.rglob('*.md')) + list(posts_path.rglob('*.markdown')):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            front_matter = extract_front_matter(content)
            
            if front_matter:
                rel_path = str(md_file.relative_to(posts_path))
                
                # Get fresh metadata from front matter
                post_data = {
                    'file_path': rel_path,
                    'date': front_matter.get('date', ''),
                    'title': front_matter.get('title', ''),
                    'category': front_matter.get('category', front_matter.get('categories', '')),
                    'tags': front_matter.get('tags', ''),
                    'description': front_matter.get('description', front_matter.get('excerpt', '')),
                    'lastmod': front_matter.get('lastmod', ''),
                }
                
                # Preserve manual data if it exists, otherwise empty
                if rel_path in existing_manual_data:
                    post_data['characters'] = existing_manual_data[rel_path]['characters']
                    post_data['summary'] = existing_manual_data[rel_path]['summary']
                else:
                    post_data['characters'] = ''
                    post_data['summary'] = ''
                
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
    
    print(f"✓ Updated CSV with {len(posts)} posts")

def main():
    posts_dir = os.path.expanduser('~/projects/splendidstrontium.github.io/_posts')
    csv_file = os.path.expanduser('~/projects/splendidstrontium.github.io/story_index.csv')
    
    print("Reading existing CSV for manual data...")
    existing_manual_data = read_existing_csv(csv_file)
    
    print("\nScanning posts directory for fresh metadata...")
    posts = catalog_posts(posts_dir, existing_manual_data)
    
    print("\nWriting updated CSV...")
    write_csv(posts, csv_file)
    
    # Show summary
    new_posts = len([p for p in posts if p['file_path'] not in existing_manual_data])
    preserved = len([p for p in posts if p['file_path'] in existing_manual_data and 
                     (p['characters'] or p['summary'])])
    
    print(f"\nSummary:")
    print(f"  Total posts: {len(posts)}")
    print(f"  New posts added: {new_posts}")
    print(f"  Posts with preserved manual data: {preserved}")
    print(f"\nDone! Your manual characters/summary data has been preserved.")

if __name__ == '__main__':
    main()