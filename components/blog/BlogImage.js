import Image from 'next/image';

/**
 * BlogImage — wraps next/image for use inside MDX and blog posts.
 *
 * Props:
 *  src        {string}   Image URL or local path
 *  alt        {string}   Alt text (required for accessibility)
 *  caption    {string?}  Optional caption shown below the image
 *  priority   {boolean?} Set true for above-the-fold images
 */
export default function BlogImage({ src, alt, caption, priority = false }) {
  if (!src) return null;

  return (
    <figure className="my-8 w-full">
      <div className="relative w-full overflow-hidden rounded-lg border border-border bg-card">
        {/* Use a 16:9 aspect box by default */}
        <div className="relative aspect-video w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 68ch"
          />
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted font-body italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
