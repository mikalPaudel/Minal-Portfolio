// app/projects/page.tsx

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Flyer 1', imageUrl: '/flyers/flyer1.jpg' },
    { id: 2, title: 'Flyer 2', imageUrl: '/flyers/flyer2.jpg' },
    { id: 3, title: 'Flyer 3', imageUrl: '/flyers/flyer3.jpg' },
    { id: 4, title: 'Flyer 4', imageUrl: '/flyers/flyer4.jpg' },
    { id: 5, title: 'Flyer 5', imageUrl: '/flyers/flyer5.jpg' },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Top Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(({ id, title, imageUrl }) => (
          <div key={id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Container to maintain max height and flexible width */}
            <div className="relative w-full h-80 bg-gray-100 flex items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold">{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
