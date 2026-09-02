import frontMatter from "front-matter";

const markdownFiles = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  technology: string;
  tags: string[];
  date: string;
  summary: string;
  readingTime: string;
  featured: boolean;
  coverImage?: string;
  content: string;
};

export const blogCategories = [
  "Core Java",
  "Selenium",
  "Cypress",
  "Playwright",
  "JavaScript",
  "React",
  "API Testing",
  "Manual Testing",
  "Automation Testing",
  "Data Analysis",
] as const;

const stringValue = (value: unknown, fallback = "") => String(value ?? fallback);
const arrayValue = (value: unknown) => Array.isArray(value) ? value.map(String) : [];

export const blogPosts: BlogPost[] = Object.values(markdownFiles)
  .map((file) => {
    const parsed = frontMatter<Record<string, unknown>>(file);
    return {
      slug: String(parsed.attributes.slug),
      title: String(parsed.attributes.title),
      category: String(parsed.attributes.category),
      technology: stringValue(parsed.attributes.technology, stringValue(parsed.attributes.category)),
      tags: arrayValue(parsed.attributes.tags),
      date: stringValue(parsed.attributes.date),
      summary: stringValue(parsed.attributes.summary),
      readingTime: stringValue(parsed.attributes.readingTime),
      featured: parsed.attributes.featured === true || parsed.attributes.featured === "true",
      coverImage: stringValue(parsed.attributes.coverImage) || undefined,
      content: parsed.body.trim(),
    };
  })
  .sort((first, second) => second.date.localeCompare(first.date));

export function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getCategoryFromSlug(slug: string) {
  return blogCategories.find((category) => getCategorySlug(category) === slug);
}

export function getTechnologySlug(technology: string) {
  return technology.toLowerCase().replace(/\s+/g, "-");
}

export function getTechnologyFromSlug(slug: string) {
  return Array.from(new Set(blogPosts.map((post) => post.technology)))
    .find((technology) => getTechnologySlug(technology) === slug);
}

export function getReadingTime(post: BlogPost) {
  if (post.readingTime) return post.readingTime;
  const minutes = Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200));
  return `${minutes} min read`;
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      const score = (candidate.technology === post.technology ? 4 : 0)
        + (candidate.category === post.category ? 2 : 0)
        + sharedTags;
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
