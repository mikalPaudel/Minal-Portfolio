'use client'

import React, { useEffect, useState } from 'react';

const sections = [
    { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'home', label: 'Minal' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // 60% of section visible triggers active
    });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-full shadow-lg px-6 py-2 flex space-x-8">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`
              relative px-4 py-2 rounded-lg transition-all duration-200 ease-in-out
              hover:text-black-600 hover:text-lg
              ${activeSection === id ? 'bg-gray-200 text-black rounded-full' : 'text-gray-700'}
            `}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
