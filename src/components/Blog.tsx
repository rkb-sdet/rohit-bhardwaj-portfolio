function Blog() {
  const posts = [
    { id: 1, title: "React Basics", category: "Frontend", date: "Aug 2026", content: "Introduction to React components and hooks." },
    { id: 2, title: "TailwindCSS Tips", category: "Styling", date: "Aug 2026", content: "How to use utility classes effectively." },
    { id: 3, title: "TypeScript Essentials", category: "Programming", date: "Aug 2026", content: "Strong typing for scalable apps." },
  ];

  return (
    <section id="blog" className="min-h-screen bg-background text-text px-6 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">My Blog</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-secondary mb-2">{post.title}</h3>
            <p className="text-sm text-accent mb-2">{post.category} • {post.date}</p>
            <p className="text-text mb-4">{post.content}</p>
            <a href={`/blog/${post.id}`} className="bg-primary text-text px-4 py-2 rounded hover:bg-secondary transition-colors">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
