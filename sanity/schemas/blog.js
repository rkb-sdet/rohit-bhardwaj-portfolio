export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },

    // ✅ Slug field for SEO-friendly URLs
    { 
      name: "slug", 
      type: "slug", 
      title: "Slug", 
      options: { source: "title", maxLength: 96 } 
    },

    { name: "category", type: "string", title: "Category" },
    { name: "date", type: "datetime", title: "Date" },

    // ✅ Image field
    { name: "mainImage", type: "image", title: "Main Image" },

    // ✅ Rich text field
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }]
    }
  ]
};
