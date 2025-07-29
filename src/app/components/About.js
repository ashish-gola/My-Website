'use client';
import React, { useState } from 'react';

const About = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <section id="about" className="p-8 md:p-12 lg:p-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg">About Me</h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section: Profile and Introduction */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          {!imageError ? (
            <img
              src="/profile.jpg"
              alt="Your Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-400 dark:border-indigo-600 shadow-md mb-6"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-40 h-40 rounded-full border-4 border-indigo-400 dark:border-indigo-600 shadow-md mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">YN</span>
            </div>
          )}
          <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-3">Hello, I'm [Your Name]</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate **[Your Primary Role, e.g., Full-Stack Developer, Software Engineer]** with a knack for building robust and scalable web applications. My journey in tech is driven by a curiosity for new technologies and a commitment to crafting efficient and user-friendly solutions. I specialize in **[Mention 2-3 key areas, e.g., front-end development, API design, cloud services]** and love tackling complex problems that demand creative thinking.
          </p>
        </div>

        {/* Right Section: Technical Skills and Platforms */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6 border-b-2 border-green-300 pb-3">
            <i className="fas fa-code mr-3"></i>Technical Toolkit & Platforms
          </h3>

          <div className="mb-8">
            <h4 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200">Skills</h4>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Three.js', 'Tailwind CSS', 'AWS', 'Docker', 'Git']
                .map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200">Coding Platforms & Profiles</h4>
            <ul className="space-y-4">
              {/* GitHub */}
              <li>
                <a
                  href="https://github.com/your-github-username" // **Update your GitHub username**
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <i className="fab fa-github text-2xl mr-3"></i>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">My open-source contributions and projects.</p>
                  </div>
                </a>
              </li>
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile/" // **Update your LinkedIn profile URL**
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <i className="fab fa-linkedin text-2xl mr-3"></i>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me professionally.</p>
                  </div>
                </a>
              </li>
              {/* LeetCode (Example) */}
              <li>
                <a
                  href="https://leetcode.com/your-leetcode-username/" // **Update your LeetCode username or remove if not applicable**
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <i className="fas fa-laptop-code text-2xl mr-3"></i>
                  <div>
                    <p className="font-semibold">LeetCode</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">My problem-solving journey and coding challenges.</p>
                  </div>
                </a>
              </li>
              {/* Add more platforms like CodePen, Stack Overflow, etc., as needed */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;