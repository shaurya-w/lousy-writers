import { getAllPosts } from '../lib/posts';
import BlogCard from '../components/blog/BlogCard';
import Intro from '../components/blog/Intro';

export const metadata = {
  title: 'Lousy Writers',
  description: 'Writing about academics, technology, and side quests.',
};

export default function HomePage() {
    const posts = getAllPosts().sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  const latestPosts = posts.slice(0, 3); 

  return (
    <div>
      <section className="mt-0 animate-fade-up">
        <Intro />
      </section>


      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground">Latest Posts</h2>
        </div>

        {latestPosts.length === 0 ? (
          <p className="text-muted font-body">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
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
      </section>
    </div>
  );
}