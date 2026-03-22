import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Calculate approximate reading time for a block of text.
 * @param {string} content - Raw MDX/markdown content (without frontmatter)
 * @returns {string} e.g. "4 min read"
 */
function calcReadingTime(content) {
  // Strip MDX/JSX tags and markdown syntax for a cleaner word count
  const plainText = content
    .replace(/<[^>]+>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_~>|]/g, '')
    .trim();

  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const minutes   = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}


export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug    = filename.replace(/\.mdx?$/, '');
    console.log('Processing post file:', filename, 'with slug:', slug);
    const raw     = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
    const { data: frontmatter, content } = matter(raw);

    return {
      slug,
      title:       frontmatter.title       ?? 'Untitled',
      date:        frontmatter.date         ?? '',
      subtitle:    frontmatter.subtitle     ?? '',
      coverImage:  frontmatter.coverImage   ?? null,
      category:    frontmatter.category     ?? 'uncategorized',
      readingTime: calcReadingTime(content),
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Return posts filtered by category slug.
 * Category is stored in frontmatter as `category`.
 * @param {'academics'|'tech'|'side-quests'} category
 */
export function getPostsByCategory(category) {
  return getAllPosts().filter((p) => p.category === category);
}

/**
 * Return a single post's frontmatter + slug by slug.
 * (The MDX content itself is imported dynamically in the page.)
 */
export function getPostBySlug(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(raw);

  return {
    slug,
    title:       frontmatter.title       ?? 'Untitled',
    date:        frontmatter.date         ?? '',
    subtitle:    frontmatter.subtitle     ?? '',
    coverImage:  frontmatter.coverImage   ?? null,
    category:    frontmatter.category     ?? 'uncategorized',
    readingTime: calcReadingTime(content),
  };
}

/**
 * Return all slugs (used in generateStaticParams).
 */
export function getAllSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

/**
 * Format a date string to "Month Day, Year"
 * @param {string} dateStr
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}
