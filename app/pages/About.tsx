// app/about/page.tsx (or as a section in your one-page site)
// flex flex-col items-center justify-center min-h-screen bg-white relative
export default function AboutSection() {
  return (
    <section id="about" className="w-full mx-auto pt-24 pb-16 px-8 bg-white">
      {/* Top Row: Title, Text, and Circular Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-16">
        <div className="md:w-2/3">
          <h2 className="text-5xl font-light mb-6">
            About <span className="font-bold">Me</span>
          </h2>
          <p className="text-gray-600 mb-2">
            Hello! I’m Minal, a passionate and detail-driven designer.
          </p>
          <p className="text-gray-600 mb-2">
            I love turning ideas into powerful visuals. From advertisement to motion graphics, I put my heart into every design. It’s not just about making things look good—it’s about telling a story and making an impact.
          </p>
          <p className="text-gray-600">
            I take pride in my work and enjoy every step of the process. If you choose me as your designer, I promise a creative journey filled with dedication, fun, and results that’ll truly excite you!
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img
            src="..\public\assets\profile2.png"
            alt="Minal"
            className="w-60 h-60 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Row: Image and Why Me */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/profile2.jpg"
            alt="Minal"
            className="w-64 h-80 object-cover rounded-3xl shadow-md"
          />
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Why Me?</h3>
          <p className="text-gray-600">
            I’m not just a designer—I’m a creative partner who listens, collaborates, and delivers. With a strong eye for detail and a passion for storytelling through visuals, I create designs that are both meaningful and visually impactful. My work blends aesthetic clarity with thoughtful strategy, whether I’m crafting a brand identity, designing social media content, or building motion graphics that speak louder than words.
            <br /><br />
            What sets me apart is my commitment to the process—I bring energy, empathy, and enthusiasm to every project. I value open communication, timely delivery, and designs that not only look good but serve a real purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
