function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-background text-text px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-8">Get in Touch</h2>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded bg-background text-text border border-gray-600 focus:border-primary focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-text py-3 rounded font-semibold hover:bg-secondary transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8">
        <a href="https://github.com/yourusername" className="text-secondary hover:text-accent">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="text-secondary hover:text-accent">LinkedIn</a>
        <a href="mailto:your@email.com" className="text-secondary hover:text-accent">Email</a>
      </div>
    </section>
  );
}

export default Contact;
