import { useState, type ChangeEvent } from "react";

function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    content: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      ...formData,
    };

    // Save to localStorage (acts like JSON file)
    const existing = JSON.parse(localStorage.getItem("blogs") || "[]");
    existing.push(newPost);
    localStorage.setItem("blogs", JSON.stringify(existing));

    alert("✅ Blog added successfully!");
    setFormData({ title: "", category: "", date: "", content: "" });
  };

  return (
    <div className="min-h-screen bg-background text-text px-6 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-primary mb-8">Add New Blog</h2>
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        />
        <input
          type="text"
          name="date"
          placeholder="Date (e.g. Sep 2026)"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          rows={5}
          value={formData.content}
          onChange={handleChange}
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        ></textarea>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-primary text-text py-3 rounded font-semibold hover:bg-secondary transition-colors"
        >
          Save Blog
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
