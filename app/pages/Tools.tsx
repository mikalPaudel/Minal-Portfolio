// components/ToolsZigzagHorizontal.tsx

const tools = [
  { name: 'Illustrator', icon: '/icons/illustrator.svg' },
  { name: 'Photoshop', icon: '/icons/photoshop.svg' },
  { name: 'After Effects', icon: '/icons/after-effects.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
];

export default function Tools() {
  return (
    <section id="tools" className="flex flex-col items-center justify-center min-h-screen bg-white relative">
        <h1 className="text-5xl font-bold mb-12 text-center">My Skills</h1>
    <div className="flex justify-center space-x-16 max-w-5xl mx-auto py-20">
      {tools.map((tool, index) => {
        // Alternate vertical alignment: even index => top, odd index => bottom
        const alignmentClass = index % 2 === 0 ? 'self-start' : 'self-end';
        // Optional vertical margin offset for stronger zigzag effect
        const marginClass = index % 2 === 0 ? 'mt-0' : 'mb-8';

        return (
          <div
            key={tool.name}
            className={`${alignmentClass} ${marginClass} flex flex-col items-center space-y-2`}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-lg font-semibold">{tool.name}</span>
          </div>
        );
      })}
    </div>
    </section>
  );
}
