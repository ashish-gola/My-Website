'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// --- Component Data ---
// ** EDIT ALL YOUR INFORMATION IN THIS OBJECT **
const aboutData = {
  profile: {
    bio: "Fueled by a passion for creating impactful and user-friendly solutions, I strive to deliver high-quality results that combine design, functionality, and innovation. With experience in frontend development, AI-driven tools, and modern web technologies, I am committed to continuous learning and growth. Explore my journey below",
    imageUrl: "/full photo profile.jpg", // Ensure this image exists in your public folder
  },
  careerBio:
    "As a Frontend Developer, I build responsive and user-friendly applications using React, Next.js, and Tailwind CSS. I have worked on innovative solutions including AI-powered accessibility tools and voice-driven assistants, while continuously learning and adopting emerging technologies like AI and cloud computing",
  
  // --- Grouped Skills ---
  skills: {
    frontend: [
      'Next.js', 'React.js', 'JavaScript', 'TypeScript', 
      'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'
    ],
    backend: [
      'Node.js', 'Express.js', 'REST API', 'MongoDB', 
      'MySQL', 'SQL', 'Firebase'
    ],
    programming: [
      'C', 'C++', 'Java', 'Python', 'Data Str.', 'Algorithms'
    ],
    tools: [
      'Git', 'GitHub', 'Docker', 'Postman', 'VSCode', 
      'Figma', 'Vercel', 'Linux', 
    ]
  },
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`p-8 md:p-16 lg:p-24 bg-gray-900 text-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Top Introduction Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative w-70% max-w-sm mx-auto">
            {!imageError ? (
              <Image
                src={aboutData.profile.imageUrl}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-auto aspect-square"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="rounded-lg aspect-square bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Image not found</span>
              </div>
            )}
          </div>
          {/* Text Column */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Hi there!
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {aboutData.profile.bio}
            </p>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="my-20 md:my-28 border-b border-gray-800"></div>

        {/* --- Career and Skills Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Career Text Column */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              My Career So Far
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              {aboutData.careerBio}
            </p>
          </div>

          {/* Skills Column */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Skills
            </h2>
            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                  {aboutData.skills.frontend.map(skill => (
                    <span
                      key={skill}
                      className="text-sm font-medium tracking-wider uppercase text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                  {aboutData.skills.backend.map(skill => (
                    <span
                      key={skill}
                      className="text-sm font-medium tracking-wider uppercase text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Programming */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Programming</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                  {aboutData.skills.programming.map(skill => (
                    <span
                      key={skill}
                      className="text-sm font-medium tracking-wider uppercase text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Tools */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Tools </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                  {aboutData.skills.tools.map(skill => (
                    <span
                      key={skill}
                      className="text-sm font-medium tracking-wider uppercase text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
