'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const defaultIcon = '/assets/icons/reacts.png'; // fallback icon from public folder

const aboutData = {
  profile: {
    bio: "Fueled by a passion for creating impactful and user-friendly solutions, I strive to deliver high-quality results that combine design, functionality, and innovation. With experience in frontend development, AI-driven tools, and modern web technologies, I am committed to continuous learning and growth. Explore my journey below",
    imageUrl: "/assets/profile/full photo profile.jpg",
  },
  careerBio:
    "As a Frontend Developer, I build responsive and user-friendly applications using React, Next.js, and Tailwind CSS. I have worked on innovative solutions including AI-powered accessibility tools and voice-driven assistants, while continuously learning and adopting emerging technologies like AI and cloud computing",
  skills: {
    frontend: [
      { name: 'React.js', image: '/assets/icons/reacts.png' },
      { name: 'Next.js', image: '/assets/icons/next.png' },
      { name: 'JavaScript', image: '/assets/icons/js.png' },
      { name: 'TypeScript', image: '/assets/icons/ts.png' },
      { name: 'HTML5', image: '/assets/icons/html.png' },
      { name: 'CSS3', image: '/assets/icons/css3.png' },
      { name: 'Tailwind CSS', image: '/assets/icons/tailwind css.png' },
      { name: 'Bootstrap', image: '/assets/icons/bootstrap.png' }
    ],
    backend: [
      { name: 'Node.js', image: '/assets/icons/nodejs.png' },
      { name: 'Express.js', image: '/assets/icons/ex.png' },
      { name: 'MongoDB', image: '/assets/icons/mongodb.png' },
      { name: 'MySQL', image: '/assets/icons/mysql.png' },
      { name: 'Firebase', image: '/assets/icons/firebase.png' },
      { name: 'REST API', image: '/assets/icons/restapi.png' },
      { name: 'GraphQL', image: '/assets/icons/graphql.png' }
    ],
    programming: [
      { name: 'Python', image: '/assets/icons/python.png' },
      { name: 'Java', image: '/assets/icons/java.png' },
      { name: 'C++', image: '/assets/icons/cpp.png' },
      { name: 'C', image: '/assets/icons/c.png' },
      { name: 'Data Structures', image: '/assets/icons/dsa.png' },
    ],
    tools: [
      { name: 'Git', image: '/assets/icons/git.png' },
      { name: 'GitHub', image: '/assets/icons/github.png' },
      { name: 'VSCode', image: '/assets/icons/vscode.png' },
      { name: 'Docker', image: '/assets/icons/docker.png' },
      { name: 'Postman', image: '/assets/icons/postman.png' },
      { name: 'Figma', image: '/assets/icons/figma.png' },
      { name: 'Vercel', image: '/assets/icons/vercel.png' },
    ]
  },
};

const SkillIcon = ({ skill }) => {
  const [imageSrc, setImageSrc] = useState(skill.image || defaultIcon);

  return (
    <div className="group relative flex flex-col items-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/30 hover:-translate-y-2">
      <div className="w-16 h-16 relative mb-3">
        <Image
          src={imageSrc}
          alt={skill.name}
          fill
          className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageSrc(defaultIcon)}
        />
      </div>
      <h4 className="font-semibold text-sm text-center text-white group-hover:text-gray-100 transition-colors mb-2">{skill.name}</h4>
    </div>
  );
};

const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
    {skills.map((skill) => <SkillIcon key={skill.name} skill={skill} />)}
  </div>
);

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');
  const [profileImageSrc, setProfileImageSrc] = useState(aboutData.profile.imageUrl);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className={`p-8 md:p-16 lg:p-24 bg-black text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mb-20">
          <div className="relative w-[70%] max-w-sm mx-auto">
            {!imageError ? (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative rounded-lg aspect-square border border-gray-700 group-hover:border-gray-600 transition-all duration-300 overflow-hidden">
                  <Image
                    src={profileImageSrc}
                    alt="Profile"
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-lg aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700">
                <span className="text-gray-500">Image not found</span>
              </div>
            )}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Hi there!</h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">{aboutData.profile.bio}</p>
            
            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href="/assets/resume/autoCV (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-sky-500 text-sky-500 rounded-full font-semibold text-lg shadow-xl hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <span className="relative z-10">View Resume</span>
              </a>
              <a
                href="/assets/resume/autoCV (1).pdf"
                download="Ashish_Gola_Resume.pdf"
                className="px-8 py-4 border-2 border-sky-500 text-sky-500 rounded-full font-semibold text-lg shadow-xl hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My Career So Far</h2>
            <p className="text-base text-gray-300 leading-relaxed mb-8">{aboutData.careerBio}</p>
            {/* Coding Platforms */}
            <div className="mt-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-white">Coding Platforms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <a href="https://leetcode.com/u/_ashish_gola/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 sm:p-5 rounded-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                  <Image src="/assets/icons/leetcode.png" alt="LeetCode" width={24} height={24} className="sm:w-[30px] sm:h-[30px]" />
                  <span className="text-white text-sm sm:text-lg font-medium">LeetCode</span>
                </a>
                <a href="https://www.geeksforgeeks.org/user/golaash1veq/?_gl=1*n7qoko*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw18bEBhCBARIsAKuAFEa4owfh_F1Rfdw17i3P1CjA_QL0JVdfZk7eFv8g7Gy4w8azmDMfS90aAmpUEALw_wcB&gbraid=0AAAAAC9yBkAkYAk2EiA3G403_GIx-urrU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 sm:p-5 rounded-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                  <Image src="/assets/icons/gfg.png" alt="GeeksforGeeks" width={24} height={24} className="sm:w-[30px] sm:h-[30px]" />
                  <span className="text-white text-sm sm:text-lg font-medium">GeeksforGeeks</span>
                </a>
                <a href="https://www.codechef.com/users/sharp_field_12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 sm:p-5 rounded-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                  <Image src="/assets/icons/codechef.png" alt="codechef" width={24} height={24} className="sm:w-[30px] sm:h-[30px]" />
                  <span className="text-white text-sm sm:text-lg font-medium">CodeChef</span>
                </a>
                <a href="https://www.hackerrank.com/profile/ashishgola12jns1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 sm:p-5 rounded-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                  <Image src="/assets/icons/hackerrank.png" alt="hackerrank" width={24} height={24} className="sm:w-[30px] sm:h-[30px]" />
                  <span className="text-white text-sm sm:text-lg font-medium">HackerRank</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(aboutData.skills).map((category) => (
                <button 
                  key={category} 
                  onClick={() => setActiveSkillCategory(category)} 
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border ${
                    activeSkillCategory === category 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg transform scale-105' 
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative p-8 rounded-xl border bg-gray-900 border-gray-700 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white capitalize">{activeSkillCategory} Technologies</h3>
              </div>
              <SkillGrid skills={aboutData.skills[activeSkillCategory]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
