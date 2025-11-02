# Story Catalog Scripts

These scripts help maintain `story_index.csv`, a structured index of all posts on the site.

## Scripts

### `catalog_posts.py`
**Purpose:** Initial catalog creation  
**Use when:** Creating the CSV from scratch

Creates a new `story_index.csv` in the repo root with all post metadata extracted from front matter. Includes empty `characters` and `summary` columns for manual entry.

**⚠️ Warning:** This overwrites the entire CSV, including any manual data you've added.

```bash
python3 _scripts/catalog_posts.py
```

### `update_catalog.py`
**Purpose:** Regular updates  
**Use when:** You've changed post metadata (tags, categories, titles, etc.) or added new posts

Updates all metadata from post front matter while **preserving** manually-entered `characters` and `summary` data.

**✅ Safe to run repeatedly** - your manual work is protected.

```bash
python3 _scripts/update_catalog.py
```

## Workflow

1. **Initial setup:** Run `catalog_posts.py` once to create the CSV
2. **Add manual data:** Open `story_index.csv` and fill in characters/summaries as needed
3. **Regular maintenance:** Run `update_catalog.py` whenever you change metadata or add posts

## CSV Columns

- **file_path** - Relative path from `_posts/` (auto-updated)
- **date** - Post date (auto-updated)
- **title** - Post title (auto-updated)
- **category** - Post category/categories (auto-updated)
- **tags** - Post tags (auto-updated)
- **description** - From `description:` or `excerpt:` in front matter (auto-updated)
- **lastmod** - Last modified date (auto-updated)
- **characters** - ✏️ Manually entered, preserved on updates
- **summary** - ✏️ Manually entered, preserved on updates

## Technical Details

- Both scripts use absolute paths, so they work from any directory
- The CSV is sorted by date (newest first)
- Handles both `.md` and `.markdown` files
- Recursively scans all subdirectories in `_posts/`