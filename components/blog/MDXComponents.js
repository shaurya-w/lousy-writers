import BlogImage from './BlogImage';
import CodeBlock from './CodeBlock';

/**
 * Custom MDX component map.
 * Pass this to <MDXRemote components={MDXComponents} /> or
 * to the Next.js MDX provider.
 *
 * Override rules:
 *  img  → BlogImage (uses next/image)
 *  pre  → CodeBlock (syntax-highlighted code block)
 */
const MDXComponents = {
  img: (props) => (
    <BlogImage
      src={props.src}
      alt={props.alt ?? ''}
      caption={props.title}
    />
  ),

  pre: (props) => <CodeBlock {...props} />,

  // Styled inline anchor — uses accent color from theme
  a: ({ href, children, ...rest }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-accent underline underline-offset-4 hover:opacity-75 transition-opacity"
      {...rest}
    >
      {children}
    </a>
  ),
};

export default MDXComponents;
