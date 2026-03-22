import { getPostsByCategory } from './posts';
import BlogCard from '../components/blog/BlogCard';

/**
 * buildCategoryPage — returns a React component for a given category.
 *
 * Usage in a category page file:
 *
 *   import { buildCategoryPage } from '../../lib/buildCategoryPage';
 *   export default buildCategoryPage('tech', 'Technology', 'Software, tools, and other digital nonsense.');
 *
 * This keeps each /academics, /tech, /side-quests page to a single import + export.
 */
export function buildCategoryPage(category, label) {
  return function CategoryPage() {
    const posts = getPostsByCategory(category);

    return (
      <div>
        {/*  Hero */}
        <section className="mb-12 animate-fade-up">
          <h1 className="font-display text-4xl font-bold text-foreground leading-tight mb-6">
            {label}
          </h1>
        </section>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-muted font-body">Nothing here yet. Stay tuned.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={post.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
}
