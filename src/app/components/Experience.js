'use client';
import React, { useState } from 'react';

const Experience = () => {
  // State to manage the visibility of each work experience item's description
  const [expandedWork, setExpandedWork] = useState({});

  // State to manage the visibility of each certificate/award item's description
  const [expandedCert, setExpandedCert] = useState({});

  // Function to toggle the expanded state for a given item ID in work experience
  const toggleWorkExperience = (id) => {
    setExpandedWork((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the boolean value for the specific ID
    }));
  };

  // Function to toggle the expanded state for a given item ID in certificates
  const toggleCertificate = (id) => {
    setExpandedCert((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the boolean value for the specific ID
    }));
  };

  return (
    <section id="experience" className="p-8 md:p-12 lg:p-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg">Experience & Certificates</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Work Experience Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 border-b-2 border-indigo-300 pb-3">
            <i className="fas fa-briefcase mr-3"></i>Work Experience
          </h3>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-4 border-indigo-400 dark:border-indigo-600">
              <div className="absolute -left-2 top-0 bg-indigo-500 dark:bg-indigo-700 rounded-full w-4 h-4 ring-4 ring-indigo-200 dark:ring-indigo-800"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Jan 2022 - Present</p>
              <h4
                className="font-semibold text-xl mb-1 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-200"
                onClick={() => toggleWorkExperience('work1')}
              >
                Senior Software Engineer - Tech Innovations Inc.
                <i
                  className={`ml-2 fas ${expandedWork['work1'] ? 'fa-chevron-up' : 'fa-chevron-down'} text-base`}
                ></i>
              </h4>
              {expandedWork['work1'] && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2 animate-fadeIn">
                  <li>Led development of scalable web applications using React and Node.js.</li>
                  <li>Mentored junior developers and conducted code reviews.</li>
                  <li>Optimized application performance, reducing load times by 20%.</li>
                </ul>
              )}
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-4 border-indigo-400 dark:border-indigo-600">
              <div className="absolute -left-2 top-0 bg-indigo-500 dark:bg-indigo-700 rounded-full w-4 h-4 ring-4 ring-indigo-200 dark:ring-indigo-800"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Mar 2019 - Dec 2021</p>
              <h4
                className="font-semibold text-xl mb-1 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-200"
                onClick={() => toggleWorkExperience('work2')}
              >
                Junior Developer - Web Solutions Co.
                <i
                  className={`ml-2 fas ${expandedWork['work2'] ? 'fa-chevron-up' : 'fa-chevron-down'} text-base`}
                ></i>
              </h4>
              {expandedWork['work2'] && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2 animate-fadeIn">
                  <li>Developed front-end features and integrated APIs.</li>
                  <li>Collaborated with design team to implement UI/UX designs.</li>
                  <li>Gained experience in agile development methodologies.</li>
                </ul>
              )}
            </div>

            {/* Add more work experience items as needed */}
          </div>
        </div>

        {/* Certificates & Awards Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6 border-b-2 border-green-300 pb-3">
            <i className="fas fa-award mr-3"></i>Certificates & Awards
          </h3>
          <div className="space-y-6">
            {/* Certificate Item 1 */}
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg shadow-sm">
              <div
                className="flex items-start cursor-pointer hover:text-green-600 dark:hover:text-green-300 transition-colors duration-200"
                onClick={() => toggleCertificate('cert1')}
              >
                <i className="fas fa-certificate text-green-600 dark:text-green-300 text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-lg">
                    AWS Certified Solutions Architect - Associate
                    <i
                      className={`ml-2 fas ${expandedCert['cert1'] ? 'fa-chevron-up' : 'fa-chevron-down'} text-base`}
                    ></i>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Amazon Web Services - Issued: June 2023</p>
                </div>
              </div>
              {expandedCert['cert1'] && (
                <div className="mt-2 pl-10 text-gray-700 dark:text-gray-300 animate-fadeIn">
                  <p>Demonstrated proficiency in designing distributed systems on AWS.</p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm mt-1 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                  </a>
                </div>
              )}
            </div>

            {/* Certificate Item 2 */}
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg shadow-sm">
              <div
                className="flex items-start cursor-pointer hover:text-green-600 dark:hover:text-green-300 transition-colors duration-200"
                onClick={() => toggleCertificate('cert2')}
              >
                <i className="fas fa-certificate text-green-600 dark:text-green-300 text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-lg">
                    Full-Stack Web Development Bootcamp
                    <i
                      className={`ml-2 fas ${expandedCert['cert2'] ? 'fa-chevron-up' : 'fa-chevron-down'} text-base`}
                    ></i>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Coursera - Completed: November 2021</p>
                </div>
              </div>
              {expandedCert['cert2'] && (
                <div className="mt-2 pl-10 text-gray-700 dark:text-gray-300 animate-fadeIn">
                  <p>Comprehensive training in MERN stack development, including projects.</p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm mt-1 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>

            {/* Award Item 1 */}
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg shadow-sm">
              <div
                className="flex items-start cursor-pointer hover:text-green-600 dark:hover:text-green-300 transition-colors duration-200"
                onClick={() => toggleCertificate('award1')}
              >
                <i className="fas fa-trophy text-yellow-500 text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-lg">
                    Employee of the Year 2023
                    <i
                      className={`ml-2 fas ${expandedCert['award1'] ? 'fa-chevron-up' : 'fa-chevron-down'} text-base`}
                    ></i>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Tech Innovations Inc. - Awarded: Jan 2024</p>
                </div>
              </div>
              {expandedCert['award1'] && (
                <div className="mt-2 pl-10 text-gray-700 dark:text-gray-300 animate-fadeIn">
                  <p>Recognized for outstanding contributions to project success and team collaboration.</p>
                </div>
              )}
            </div>

            {/* Add more certificates or awards as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;