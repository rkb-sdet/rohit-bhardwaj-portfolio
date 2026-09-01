import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const fallbackPosts = [
  {
    _id: "fallback-1",
    title: "React Basics",
    slug: { current: "react-basics" },
    category: "Frontend",
    date: "2026-08-01T00:00:00.000Z",
    mainImage: null,
    content: [
      { _type: "block", children: [{ _type: "span", text: "Introduction to React components and hooks." }] },
    ],
  },
  {
    _id: "fallback-2",
    title: "TailwindCSS Tips",
    slug: { current: "tailwindcss-tips" },
    category: "Styling",
    date: "2026-08-05T00:00:00.000Z",
    mainImage: null,
    content: [
      { _type: "block", children: [{ _type: "span", text: "How to use utility classes effectively." }] },
    ],
  },
];

const builder = client ? imageUrlBuilder(client) : null;
function urlFor(source: any, width?: number) {
  if (!builder || !source) return "";

  const imageBuilder = builder.image(source);
  return width ? imageBuilder.width(width).url() : imageBuilder.url();
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;

    const matchFallback = fallbackPosts.find(
      (item) => item.slug?.current === slug || item.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!client) {
      setPost(matchFallback ?? fallbackPosts[0] ?? null);
      return;
    }

    client
      .fetch(
        `*[_type == "blog" && slug.current == $slug]{_id, title, slug, category, date, mainImage, content}`,
        { slug }
      )
      .then((data) => {
        setPost(data[0] ?? matchFallback ?? null);
      })
      .catch(() => setPost(matchFallback ?? null));
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-20 text-secondary">
        Post not found. Please check the URL or publish a blog post in Sanity.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
      <p className="text-sm text-accent mb-6">
        {post.category} • {post.date ? new Date(post.date).toDateString() : "No date"}
      </p>
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage, 800)}
          alt={post.title}
          className="rounded-lg mb-6"
        />
      )}
      <div className="text-text leading-relaxed">
        {Array.isArray(post.content) ? <PortableText value={post.content} /> : <p>{post.content}</p>}
      </div>
    </div>
  );
}
