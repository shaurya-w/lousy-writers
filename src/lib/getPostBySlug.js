import matter from 'gray-matter';
export const getPostBySlug = async (slug) => {
  try {
    const file = await import(`../posts/${slug}.md`);
    const raw = await fetch(file.default).then((res) => res.text());
    const { content, data } = matter(raw); //matter seperates the og data from the frontmatter

    return {
      content,
      metadata: data,
      slug,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
};