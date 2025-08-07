import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ScrollToTopButton from './assets/components/ScrollToTopButton';
import Loader from './assets/components/Loader';

const FigmaProjectsPage = () => {
  const location = useLocation();
  const figmaProjects = location.state?.figmaProjects || [];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A252F] font-jetbrains-mono">
      {isLoading ? (
        <Loader message="Loading Figma Projects..." />
      ) : (
        <>
          <Navbar />
          <ScrollToTopButton />
          <div className="w-full px-10 py-6 md:px-60 md:py-10 pt-20 md:pt-10">
            <div className="text-left mt-6 md:mt-20 z-10 relative">
              <Link
                to="/"
                className="text-[#00FFCC] text-sm md:text-sm hover:underline inline-block py-3 px-4 md:p-0"
              >
                ← Back to Home
              </Link>
            </div>
            <h2 className="text-[#31FFDD] text-2xl md:text-[30px] text-center font-bold mb-6 md:mb-12 mt-4">
              More Figma Projects
            </h2>

            {figmaProjects.length === 0 ? (
              <p className="text-white text-center text-base md:text-lg">No Figma projects to display.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {figmaProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-96 md:h-[500px] relative group shadow-xs shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  >
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="justify-end ml-auto">
                        <img src="/Images/open-folder.png" alt="Folder Icon" className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-2">
                      <h3 className="text-[#00FFCC] text-sm md:text-[18px] font-bold">{project.title}</h3>
                    </div>
                    <div className="flex-grow flex items-center justify-center p-2">
                      <div className="border border-[#4CD2BC] rounded-md w-full h-56 md:h-[350px] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} Image`}
                          className="w-full h-full object-cover"
                          onError={(e) => (e.target.src = '/Images/fallback.png')}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                      {project.figmaLink && (
                        <a
                          href={project.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on Figma`}
                        >
                          <img
                            src="/Images/figma.png"
                            alt="Figma Icon"
                            className="w-4 h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FigmaProjectsPage;