"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Star,
  Calendar,
  Code,
  Smartphone,
  Globe,
  Database,
  ChevronDown,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedTech, setExpandedTech] = useState({});
  const [showMoreCount, setShowMoreCount] = useState(3); // <-- only 3 initially

  const projects = [
  {
    id: 1,
    title: "Text-to-Image Generator",
    description:
      "Full Stack AI SaaS application with user authentication, credit system, and online payment gateway. Generates images using the ClipDrop API.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ClipDrop API",
      "JWT",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    featured: true,
    image: "/assets/projects/text-imag.png",
    githubLink: "https://github.com/ashish-gola/Text-to-img",
    liveLink: "https://text-to-img-7ol1.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Powered Blog App",
    description:
      "Full stack blogging platform with AI-driven blog content generation, secure authentication, and role-based access. Includes admin dashboard for posting, managing blogs, and moderating comments.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    featured: true,
    image: (
      <Image
        src="/assets/projects/ai-blog.png"
        width={400}
        height={160}
        alt="AI Blog"
      />
    ),
    githubLink: "https://github.com/ashish-gola/AI-Powered-Blog-App",
    liveLink: "https://ai-powered-blog-app-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "AI Trip Planner",
    description:
      "AI-powered trip planning app with interactive maps and real-time location data. Features secure authentication, optimized performance, and seamless deployment.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Convex",
      "Arcjet",
      "Clerk Auth",
      "Mapbox",
      "Google Places API",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    featured: true,
    image: (
      <Image
        src="/assets/projects/Ai-Trip-Planner.png"
        width={400}
        height={160}
        alt="AI Trip Planner"
      />
    ),
    githubLink: "https://github.com/ashish-gola/AI-Trip-Planner",
    liveLink: "https://ai-trip-planner-beige-nine.vercel.app/",
    },
    // {
    //   id: 4,
    //   title: "Accessibility Analyzer",
    //   description:
    //     "A web app to audit sites for accessibility issues, providing reports and suggestions based on WCAG standards.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Puppeteer",
    //     "Axe-core",
    //   ],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/Accessibility Analyzer.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 5,
    //   title: "Local Service Finder & Booking System",
    //   description:
    //     "A marketplace connecting users with local professionals, featuring profiles, reviews, and an integrated booking system.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Stripe",
    //     "Google Maps API",
    //   ],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/Local Service Finder & Booking System.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 6,
    //   title: "Multilingual News Aggregator",
    //   description:
    //     "Aggregates news from global sources and provides on-demand translation, breaking down language barriers.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "NewsAPI",
    //     "Translate API",
    //   ],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/Multilingual News Aggregator.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 7,
    //   title: "Smart Waste Management System",
    //   description:
    //     "IoT system to optimize waste collection routes by monitoring real-time bin levels, reducing costs and emissions.",
    //   tech: ["React", "Node.js", "Express.js", "MongoDB", "Leaflet", "MQTT"],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/Smart Waste Management System.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 8,
    //   title: "Smart Grocery List + Expiry Tracker",
    //   description:
    //     "Manages grocery lists and pantry inventory, with notifications for expiring items to help reduce food waste.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Push Notifications",
    //     "Redux",
    //   ],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/Smart Grocery List + Expiry Tracker.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 9,
    //   title: "Voice-Based Emotion Recognition System",
    //   description:
    //     "Detects emotions from voice input using deep learning models and provides real-time emotional analytics.",
    //   tech: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    //   category: "AI/ML",
    //   featured: false,
    //   image: '/assets/projects/Voice-Based Emotion Recognition System.png',
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 10,
    //   title: "Smart Study Planner",
    //   description:
    //     "Helps students plan and organize their study schedule efficiently with reminders and performance tracking.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Redux",
    //     "Push Notifications",
    //   ],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/Smart Study Planner.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 11,
    //   title: "Fake News Detection System",
    //   description:
    //     "Identifies and flags fake news articles using NLP and machine learning techniques to ensure reliable information sharing.",
    //   tech: ["Python", "Django", "React", "NLP", "Scikit-learn"],
    //   category: "AI/ML",
    //   featured: false,
    //   image: "/assets/projects/Fake News Detection System.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 1,
    //   title: "AI-Powered Blog Platform with SEO Insights",
    //   description:
    //     "A CMS that provides AI-driven content suggestions and real-time SEO feedback to help writers improve search engine rankings.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "OpenAI API",
    //     "JWT",
    //     "Tailwind CSS",
    //   ],
    //   category: "Full Stack",
    //   featured: false,
    //   image: "/assets/projects/AI-Powered Blog Platform with SEO Insights.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 2,
    //   title: "Personal Finance Dashboard",
    //   description:
    //     "A dashboard to track income, expenses, and budgets with data visualization and secure bank linking via the Plaid API.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Plaid API",
    //     "Chart.js",
    //     "JWT",
    //   ],
    //   category: "Full Stack",
    //   featured: true,
    //   image: "/assets/projects/Personal Finance Dashboard.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
    // {
    //   id: 3,
    //   title: "Voice Controlled Cooking Assistant",
    //   description:
    //     "A hands-free cooking assistant with voice-guided recipe instructions and timers, built using the Web Speech API.",
    //   tech: [
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Web Speech API",
    //     "Socket.io",
    //   ],
    //   category: "Full Stack",
    //   featured: true,
    //   image: "/assets/projects/Voice Controlled Cooking Assistant.png",
    //   githubLink: "https://github.com",
    //   liveLink: "https://github.com",
    // },
  ];

  const categories = ["All", "Full Stack", "AI/ML"];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredOtherProjects =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  const projectsToDisplay = filteredOtherProjects.slice(0, showMoreCount);
  const hasMoreProjects = showMoreCount < filteredOtherProjects.length;
  const allProjectsInFilter = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  const getCategoryIcon = (category) => {
    const icons = {
      "Full Stack": <Globe className="w-4 h-4" />,
      "AI/ML": <Smartphone className="w-4 h-4" />,
    };
    return icons[category] || <Code className="w-4 h-4" />;
  };

  const toggleTechStack = (id) => {
    setExpandedTech((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLoadMore = () => {
    setShowMoreCount((prevCount) => prevCount + 3); // <-- loads 3 more each time
  };

  const ProjectCard = ({ project, isFeatured = false }) => {
  const isImageFile = typeof project.image === "string" && project.image.startsWith("/");

    return (
      <div className="rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group bg-gray-800">
        <div
          className={`$ {
            isImageFile ? "bg-gray-700" : ""
          } relative overflow-hidden h-40`}
        >
          {isImageFile ? (
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={160}
              className="w-full h-full object-cover"
              priority={isFeatured}
            />
          ) :
            (typeof project.image === "object" && project.image)
          }
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="bg-gray-900/90 px-3 py-1 rounded-full flex items-center gap-1.5 text-white text-sm font-medium">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </div>
          </div>
          {isFeatured && (
            <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-bold mb-3 text-lg text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
            {project.description}
          </p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tech
                .slice(0, expandedTech[project.id] ? project.tech.length : 3)
                .map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              {project.tech.length > 3 && (
                <button
                  onClick={() => toggleTechStack(project.id)}
                  className="px-3 py-1 bg-sky-900/50 rounded-full text-xs font-medium text-sky-400 hover:underline"
                >
                  {expandedTech[project.id]
                    ? "Show Less"
                    : `+${project.tech.length - 3} more`}
                </button>
              )}
            </div>
          </div>
          <div className="flex gap-4 pt-2 border-t border-gray-700">
            <a
              href={project.githubLink}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors flex-1 justify-center text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">Code</span>
            </a>
            <a
              href={project.liveLink}
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 flex-1 justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-medium">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h2>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setShowMoreCount(3);
              }}
              className={`px-6 py-3 rounded-full font-medium shadow-md focus:outline-none transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                activeFilter === category
                  ? "bg-sky-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category !== "All" && getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {activeFilter === "All" && featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
              <Star className="w-6 h-6 text-yellow-400" /> Featured Projects
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFeatured={true}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          {filteredOtherProjects.length > 0 && (
            <h3 className="text-2xl font-bold mb-8 text-white">
              {activeFilter === "All"
                ? "Other Projects"
                : `Projects in ${activeFilter}`}
            </h3>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsToDisplay.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          {hasMoreProjects ? (
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 rounded-full font-bold text-lg bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-transform hover:scale-105"
            >
              Load More Projects{" "}
              <ChevronDown className="inline-block ml-2 w-5 h-5" />
            </button>
          ) : (
            allProjectsInFilter.length === 0 && (
              <div className="py-12">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  No projects found
                </h3>
                <p className="text-gray-400">
                  Try selecting a different category or check back later.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
