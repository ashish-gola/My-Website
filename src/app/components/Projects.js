'use client';
import React, { useState } from 'react';
import { Github, ExternalLink, Star, Calendar, Code, Smartphone, Globe, Database, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  // State to manage the visibility of each project's tech stack
  const [expandedTech, setExpandedTech] = useState({});
  // State to manage how many "regular" projects are currently displayed
  const [showMoreCount, setShowMoreCount] = useState(6); // Initial number of regular projects to show

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Express.js', 'Redux', 'Tailwind CSS'],
      category: 'Full Stack',
      featured: true,
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      githubLink: 'https://github.com/username/ecommerce-platform',
      liveLink: 'https://ecommerce-demo.vercel.app',
      stars: 234,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI integration, voice messages, and multi-language support.',
      tech: ['Next.js', 'TypeScript', 'OpenAI API', 'WebSocket', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
      category: 'Frontend',
      featured: true,
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      githubLink: 'https://github.com/username/ai-chat-app',
      liveLink: 'https://ai-chat-demo.netlify.app',
      stars: 189,
      lastUpdated: '2024-01-20'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, role-based access, and real-time notifications.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Socket.io', 'Docker', 'Swagger', 'Joi'],
      category: 'Backend',
      featured: false,
      image: 'bg-gradient-to-br from-green-500 to-teal-500',
      githubLink: 'https://github.com/username/task-api',
      liveLink: 'https://task-api-docs.herokuapp.com',
      stars: 67,
      lastUpdated: '2024-01-10'
    },
    {
      id: 4,
      title: 'Mobile Fitness Tracker',
      description: 'React Native app for fitness tracking with workout plans, progress analytics, and social features.',
      tech: ['React Native', 'Expo', 'Firebase', 'Redux', 'Chart.js', 'NativeBase', 'TypeScript'],
      category: 'Mobile',
      featured: false,
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
      githubLink: 'https://github.com/username/fitness-tracker',
      liveLink: 'https://play.google.com/store/apps/details?id=com.fitness',
      stars: 143,
      lastUpdated: '2024-01-08'
    },
    {
      id: 5,
      title: '3D Portfolio Website',
      description: 'Interactive portfolio website with Three.js animations, smooth scrolling, and responsive design.',
      tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React-Three-Fiber'],
      category: 'Frontend',
      featured: true,
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      githubLink: 'https://github.com/username/3d-portfolio',
      liveLink: 'https://portfolio-3d.vercel.app',
      stars: 312,
      lastUpdated: '2024-01-25'
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Scalable microservices setup with Docker, Kubernetes, and API Gateway for enterprise applications.',
      tech: ['Docker', 'Kubernetes', 'Go', 'gRPC', 'Redis', 'Kafka', 'Prometheus', 'Grafana'],
      category: 'Backend',
      featured: false,
      image: 'bg-gradient-to-br from-gray-600 to-gray-800',
      githubLink: 'https://github.com/username/microservices-demo',
      liveLink: 'https://microservices-docs.com',
      stars: 98,
      lastUpdated: '2024-01-12'
    },
    {
        id: 7,
        title: 'Blockchain Voting System',
        description: 'Decentralized voting application using blockchain technology for secure and transparent elections.',
        tech: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Truffle'],
        category: 'Backend',
        featured: false,
        image: 'bg-gradient-to-br from-teal-500 to-blue-500',
        githubLink: 'https://github.com/username/blockchain-voting',
        liveLink: 'https://blockchain-vote-demo.xyz',
        stars: 110,
        lastUpdated: '2023-12-01'
    },
    {
        id: 8,
        title: 'AI Image Generator',
        description: 'Web application that generates images from text prompts using a pre-trained AI model.',
        tech: ['Python', 'Flask', 'TensorFlow', 'React', 'Hugging Face API'],
        category: 'Full Stack',
        featured: false,
        image: 'bg-gradient-to-br from-red-400 to-orange-400',
        githubLink: 'https://github.com/username/ai-image-gen',
        liveLink: 'https://ai-image-gen-demo.app',
        stars: 205,
        lastUpdated: '2023-11-25'
    },
    {
        id: 9,
        title: 'Serverless Data Pipeline',
        description: 'Automated data processing pipeline using AWS Lambda, S3, and DynamoDB for real-time analytics.',
        tech: ['AWS Lambda', 'S3', 'DynamoDB', 'Python', 'Serverless Framework'],
        category: 'Backend',
        featured: false,
        image: 'bg-gradient-to-br from-yellow-500 to-lime-500',
        githubLink: 'https://github.com/username/serverless-pipeline',
        liveLink: 'https://aws-pipeline-docs.com',
        stars: 75,
        lastUpdated: '2023-10-18'
    },
    {
        id: 10,
        title: 'Interactive Data Visualization',
        description: 'Web-based tool for visualizing complex datasets with interactive charts and graphs.',
        tech: ['D3.js', 'React', 'SVG', 'Webpack', 'Figma'],
        category: 'Frontend',
        featured: false,
        image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
        githubLink: 'https://github.com/username/data-viz-tool',
        liveLink: 'https://data-viz-demo.netlify.app',
        stars: 160,
        lastUpdated: '2023-09-30'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);
  // Separate regular projects from featured ones, and then filter by category
  const nonFeaturedFilteredProjects = (activeFilter === 'All'
    ? projects.filter(project => !project.featured)
    : filteredProjects.filter(project => !project.featured)
  );

  // Projects to display based on showMoreCount
  const projectsToDisplay = nonFeaturedFilteredProjects.slice(0, showMoreCount);
  // Check if there are more projects to load
  const hasMoreProjects = showMoreCount < nonFeaturedFilteredProjects.length;

  const getCategoryIcon = (category) => {
    const icons = {
      'Frontend': <Globe className="w-4 h-4" />,
      'Backend': <Database className="w-4 h-4" />,
      'Full Stack': <Code className="w-4 h-4" />,
      'Mobile': <Smartphone className="w-4 h-4" />
    };
    return icons[category] || <Code className="w-4 h-4" />;
  };

  // Function to toggle the expanded state for a given project ID
  const toggleTechStack = (id) => {
    setExpandedTech((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the boolean value for the specific ID
    }));
  };

  // Function to load more projects
  const handleLoadMore = () => {
    setShowMoreCount(prevCount => prevCount + 6); // Load 6 more projects
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work spanning full-stack development, mobile apps, and innovative web solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setShowMoreCount(6); // Reset showMoreCount when filter changes
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects (Always shown if filter is 'All') */}
        {activeFilter === 'All' && featuredProjects.length > 0 && (
          <>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-800 dark:text-white">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                Featured Projects
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                  >
                    {/* Project Image/Gradient */}
                    <div className={`h-48 ${project.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-gray-800 dark:text-white">
                          {getCategoryIcon(project.category)}
                          <span className="text-sm font-medium">{project.category}</span>
                        </div>
                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-gray-800 dark:text-white">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">{project.stars}</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack - Clickable for expansion */}
                      <div className="mb-4">
                        <button
                          onClick={() => toggleTechStack(project.id)}
                          className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                        >
                          Tech Stack
                          {expandedTech[project.id] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        {expandedTech[project.id] && (
                          <div className="flex flex-wrap gap-2 mt-2 animate-fadeIn">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        {!expandedTech[project.id] && project.tech.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tech.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <button
                                onClick={() => toggleTechStack(project.id)} // Make this clickable
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer hover:underline"
                              >
                                +{project.tech.length - 4} more
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Last Updated */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        Updated {new Date(project.lastUpdated).toLocaleDateString()}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.githubLink}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-1 justify-center text-gray-800 dark:text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          <span className="font-medium">Code</span>
                        </a>
                        <a
                          href={project.liveLink}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex-1 justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {nonFeaturedFilteredProjects.length > 0 && ( // Only show "Other Projects" heading if there are non-featured projects
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Other Projects</h3>
              </div>
            )}
          </>
        )}

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image/Gradient */}
              <div className={`h-32 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-gray-800 dark:text-white">
                  {getCategoryIcon(project.category)}
                  <span className="text-xs font-medium">{project.category}</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-gray-800 dark:text-white">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs">{project.stars}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-500 transition-colors text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack - Clickable for expansion */}
                <div className="mb-3">
                  <button
                    onClick={() => toggleTechStack(project.id)}
                    className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                  >
                    Tech Stack
                    {expandedTech[project.id] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedTech[project.id] && (
                    <div className="flex flex-wrap gap-1 mt-2 animate-fadeIn">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {!expandedTech[project.id] && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <button
                          onClick={() => toggleTechStack(project.id)} // Make this clickable
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:underline"
                        >
                          +{project.tech.length - 3}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-1 justify-center text-sm text-gray-800 dark:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all flex-1 justify-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Load More Projects
              <ChevronDown className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category or check back later for new projects.
            </p>
          </div>
        )}
      </div>
      {/* Tailwind CSS keyframes for text animations (can be in global CSS or tailwind.config.js) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;
