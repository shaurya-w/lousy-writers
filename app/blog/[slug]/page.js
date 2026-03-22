import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug, formatDate } from '../../../lib/posts';
import BlogImage from '../../../components/blog/BlogImage';
import MDXComponents from '../../../components/blog/MDXComponents';

// Next.js 13+ App Router: pre-generate all slug paths at build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title:       post.title,
    description: post.subtitle,
    openGraph: {
      title:       post.title,
      description: post.subtitle,
      images:      post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  //console.log('Post data for slug:', params.slug, post);
  if (!post) notFound();

  // Dynamically import the MDX file — this is the Next.js App Router pattern.
  // The MDX file exports its content as the default component.
  let MDXContent;
  try {
    const mod = await import(`../../../content/blog/${params.slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl">
      {/* Header */}
      <header className="mb-10 animate-fade-up">
        {/* {post.category && (
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            {post.category.replace('-', ' ')}
          </p>
        )} */}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="font-body text-lg text-secondary leading-relaxed mb-6">
            {post.subtitle}
          </p>
        )}
        <div className="flex items-center gap-4 text-xs font-mono text-muted border-t border-border pt-4">
          <span>{formatDate(post.date)}</span>
          <span className="w-px h-3 bg-border" />
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="mb-10 animate-fade-up animate-fade-up-delay-1">
          <BlogImage src={post.coverImage} alt={post.title} priority />
        </div>
      )}

      {/* MDX Content  */}
      <div className="animate-fade-up animate-fade-up-delay-2">
        <div className="prose prose-neutral max-w-none">
          <MDXContent components={MDXComponents} />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border flex items-center justify-between text-xs font-mono text-muted">
        <span>Thanks for reading.</span>
        <span>{post.readingTime}</span>
      </footer>
    </article>
    
  );
}

// export default async function BlogPostPage() {
//   let MDXContent;

//   try {
//     const mod = await import(`../../../content/blog/test.mdx`);
//     MDXContent = mod.default;
//   } catch (e) {
//     console.log(e);
//     return <div>Import failed</div>;
//   }

//   return (
//     <div className="prose">
//       <MDXContent />
//     </div>
//   );
// }
