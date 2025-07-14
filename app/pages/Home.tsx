// app/page.tsx

export default function HomePage() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-white relative">

      {/* Main Content */}
      <div className="flex w-full max-w-5xl mt-40 items-center justify-between px-6">
        {/* Testimonial Left */}
        <div className="w-1/4 text-left">
          <div className="text-4xl text-gray-400 mb-4">“</div>
          <p className="text-gray-700 font-medium">
            Minal&apos;s Exceptional Skill<br />
            ensure our firm&apos;s success.<br />
            Highly Recommended
          </p>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center w-1/2">
          <div className="mb-4">
            <span className="inline-block border-2 border-black rounded-full px-4 py-1 text-sm font-semibold relative">
              Hello!
              <span className="absolute -top-2 -right-3 text-xl">👋</span>
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black text-center leading-tight">
            I&apos;m <span className="text-gray-400">Minal</span>,<br />
            Graphic Designer
          </h1>
          {/* Profile Image */}
          <div className="mt-8 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-300 rounded-full -z-10" />
            <img
              src="/profile.jpg"
              alt="Minal"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Experience Right */}
        <div className="w-1/4 flex flex-col items-end">
          <div className="flex items-center mb-2">
            <span className="text-2xl text-black mr-2">★★★★☆</span>
          </div>
          <div>
            <div className="text-2xl font-bold text-black">3 Years</div>
            <div className="text-gray-500 text-sm">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
