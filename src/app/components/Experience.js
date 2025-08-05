"use client";
import React, { useState } from "react";

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
    <section
      id="experience"
      className="p-8 md:p-12 lg:p-16 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg">
        Experience & Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Work Experience Section */}
        <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
          <h3 className="text-3xl font-bold text-sky-400 mb-6 border-b-2 border-sky-300 pb-3">
            <i className="fas fa-briefcase mr-3"></i>Work Experience
          </h3>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-4 border-sky-500">
              <div className="absolute -left-2 top-0 bg-sky-600 rounded-full w-4 h-4 ring-4 ring-sky-800"></div>
              <p className="text-sm text-gray-400 mb-1">
                April 2025 - Present
              </p>
              <h4
                className="font-semibold text-xl mb-1 cursor-pointer hover:text-sky-300 transition-colors duration-200"
                onClick={() => toggleWorkExperience("work1")}
              >
                Frontend Developer
                <i
                  className={`ml-2 fas ${
                    expandedWork["work1"] ? "fa-chevron-up" : "fa-chevron-down"
                  } text-base`}
                ></i>
              </h4>
              <p className="text-gray-400">Indibus Software Solution Pvt Ltd</p>
              {expandedWork["work1"] && (
                <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2 animate-fadeIn">
                  <li>Developed and maintained responsive, user-friendly UI components using React and Tailwind CSS.</li>
                  <li>Improved page load performance by optimizing frontend code and assets.</li>
                  <li>Implemented reusable components, reducing development time by 20% for new features.</li>
                </ul>
              )}
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-4 border-sky-500">
              <div className="absolute -left-2 top-0 bg-sky-600 rounded-full w-4 h-4 ring-4 ring-sky-800"></div>
              <p className="text-sm text-gray-400 mb-1">
                May 2023 - August 2023
              </p>
              <h4
                className="font-semibold text-xl mb-1 cursor-pointer hover:text-indigo-300 transition-colors duration-200"
                onClick={() => toggleWorkExperience("work2")}
              >
                Campus Ambassador
                <i
                  className={`ml-2 fas ${
                    expandedWork["work2"] ? "fa-chevron-up" : "fa-chevron-down"
                  } text-base`}
                ></i>
              </h4>
              <p className="text-gray-400">Techfest IIT Bombay</p>
              {expandedWork["work2"] && (
                <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2 animate-fadeIn">
                  <li>Promoted Techfest events and competitions across the campus, driving strong student participation.</li>
                  <li>Developed and managed communication channels to keep students updated about event registrations and deadlines.</li>
                </ul>
              )}
            </div>

            {/* Add more work experience items as needed */}
          </div>
        </div>

        {/* Certificates & Awards Section */}
        <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
          <h3 className="text-3xl font-bold text-sky-400 mb-6 border-b-2 border-sky-300 pb-3">
            <i className="fas fa-award mr-3"></i>Certificates & Awards
          </h3>
          <div className="space-y-6">
            {/* Certificate Item 1 */}
            <div className="p-4 bg-sky-900 rounded-lg shadow-sm">
              <div
                className="flex items-start cursor-pointer hover:text-sky-300 transition-colors duration-200"
                onClick={() => toggleCertificate("cert1")}
              >
                <i className="fas fa-certificate text-sky-300 text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-lg">
                   Postman API Fundamentals Student Expert Certification
                    <i
                      className={`ml-2 fas ${
                        expandedCert["cert1"]
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      } text-base`}
                    ></i>
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Lets Upgrad - Issued May 2025
                  </p>
                </div>
              </div>
              {expandedCert["cert1"] && (
                <div className="mt-2 pl-10 text-gray-300 animate-fadeIn">
                  <p>
                    Certified for foundational skills in API development and testing using Postman, including creating, managing, and documenting APIs effectively.
                  </p>
                  <a
                    href="/assets/icons/postman1.jpg"
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
            <div className="p-4 bg-sky-900 rounded-lg shadow-sm">
              <div
                className="flex items-start cursor-pointer hover:text-sky-300 transition-colors duration-200"
                onClick={() => toggleCertificate("cert2")}
              >
                <i className="fas fa-certificate text-sky-300 text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-lg">
                    Full-Stack Web Development Bootcamp
                    <i
                      className={`ml-2 fas ${
                        expandedCert["cert2"]
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      } text-base`}
                    ></i>
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Coursera - Completed: November 2024
                  </p>
                </div>
              </div>
              {expandedCert["cert2"] && (
                <div className="mt-2 pl-10 text-gray-300 animate-fadeIn">
                  <p>
                    Comprehensive training in MERN stack development, including
                    projects.
                  </p>
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
