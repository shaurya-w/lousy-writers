import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../lib/posts';
import ReadButton from '../ui/ReadButton';

export default function BlogCard({ slug, title, subtitle, date, coverImage, category, readingTime }) {
  //console.log('were in blogcard with props:', { slug, title, subtitle, date, coverImage, category, readingTime });
  const href = `/blog/${slug}`;
  //console.log('href for blog card:', href);
  //console.log('Post data for blog card:', { slug, title, subtitle, date, coverImage, category, readingTime });

  return (
    <article className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors duration-200">
      {/* Cover image */}
      {coverImage && (
        <Link href={href} tabIndex={-1} aria-hidden="true">
          <div className="relative w-full aspect-video overflow-hidden bg-border">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
        </Link>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 justify-between p-6">
        {/* Category tag */}
        {category && (
          <Link
            href={`/${category}`}
            className="text-xs font-mono uppercase tracking-widest text-accent hover:opacity-75 transition-opacity w-fit"
          >
            {category.replace('-', ' ')}
          </Link>
        )}

        {/* Title */}
        <Link href={href}>
          <h2 className="font-display text-xl font-bold text-foreground leading-snug line-clamp-2 min-h-[3.2rem] group-hover:text-accent transition-colors duration-150">
            {title}
          </h2>
        </Link>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-body text-sm text-secondary leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {subtitle}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-muted">{formatDate(date)}</span>
            <span className="text-xs text-muted">{readingTime}</span>
          </div>
          <ReadButton href={href} />
        </div>
      </div>
    </article>
  );
}
