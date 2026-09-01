import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const fallbackPosts = [
  {
    _id: "fallback-1",
    title: "React Basics",
    slug: { current: "react-basics" },
    category: "Frontend",
    date: "2026-08-01T00:00:00.000Z",
    mainImage: null,
    content: "Introduction to React components and hooks.",
  },
  {
    _id: "fallback-2",
    title: "TailwindCSS Tips",
    slug: { current: "tailwindcss-tips" },
    category: "Styling",
    date: "2026-08-05T00:00:00.000Z",
    mainImage: null,
    content: "How to use utility classes effectively.",
  },
];

const builder = client ? imageUrlBuilder(client) : null;
function urlFor(source: any, width?: number) {
  if (!builder || !source) return "";

  const imageBuilder = builder.image(source);
  return width ? imageBuilder.width(width).url() : imageBuilder.url();
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    if (!client) {
      setBlogs(fallbackPosts);
      return;
    }

    client
      .fetch(`*[_type == "blog"]{_id, title, slug, category, date, mainImage, content} | order(date desc)`)
      .then((posts) => {
        setBlogs(posts.length ? posts : fallbackPosts);
      })
      .catch(() => setBlogs(fallbackPosts));
  }, []);

  return (
    <div className="min-h-screen bg-background text-text px-6 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">My Blog</h2>

      {blogs.length === 0 ? (
        <div className="max-w-2xl mx-auto rounded-lg border border-dashed border-primary p-6 text-center text-secondary">
          No blog posts found. Please publish a post in Sanity Studio.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((post) => {
            const slug = post?.slug?.current ?? post?._id;
            return (
              <Link to={`/blog/${slug}`} key={post._id}>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300 cursor-pointer">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage, 600)}
                      alt={post.title}
                      className="rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-secondary mb-2">{post.title}</h3>
                  <p className="text-sm text-accent mb-2">
                    {post.category} • {post.date ? new Date(post.date).toDateString() : "No date"}
                  </p>
                  <p className="text-text mb-4">
                    {post.content ? "Read more..." : ""}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
