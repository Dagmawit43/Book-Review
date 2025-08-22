export default function Contact() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">📩 Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded-md"
        ></textarea>
        <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
}
