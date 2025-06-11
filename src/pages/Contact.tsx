const Contact: React.FC = () => {
  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6 text-gray-700">
        Feel free to reach out if you'd like to collaborate or just say hello 👋
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-md"
        />
        <textarea
          rows={4}
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-sm text-gray-500">
        Or email me directly at:{" "}
        <a
          href="mailto:danielaco3091@gmail.com"
          className="text-blue-600 underline"
        >
          danielaco3091@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
