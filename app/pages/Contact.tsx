// app/contact/page.tsx (or as a section in your one-page site)

export default function ContactSection() {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center min-h-screen bg-white pt-16 pb-8">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
        Have an <span className="text-blue-900">Awesome Project</span><br />
        Idea? <span className="font-light text-gray-400">Let’s Discuss</span>
      </h2>

      {/* Form and Send Button */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 w-full max-w-3xl">
        {/* Form Fields */}
        <form className="flex flex-col space-y-6 w-full md:w-2/3">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-full px-8 py-4 bg-white border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="rounded-full px-8 py-4 bg-white border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="rounded-full px-8 py-4 bg-white border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
          />
        </form>
        {/* Send Button */}
        <button
          type="submit"
          className="ml-0 md:ml-12 mt-8 md:mt-0 w-40 h-40 flex items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500 transition text-white text-2xl font-semibold shadow-lg"
        >
          Send
        </button>
      </div>

      {/* Decorative Marquee */}
      <div className="w-full overflow-x-hidden mt-16">
        <div className="whitespace-nowrap animate-marquee text-gray-700 text-lg font-medium flex items-center">
          {Array(10)
            .fill("✹ Let’s Create Something")
            .map((text, idx) => (
              <span key={idx} className="mx-2">{text}</span>
            ))}
        </div>
      </div>
      {/* Add this to your globals.css for marquee animation */}
      {/* 
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
      */}
    </section>
  );
}
