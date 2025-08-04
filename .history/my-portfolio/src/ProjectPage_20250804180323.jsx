import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ScrollToTopButton from './assets/components/ScrollToTopButton';


const ProjectPage = () => {
  const location = useLocation();
  const projects = location.state?.projects || [];

  return (
    <div className="min-h-screen bg-[#1A252F] font-jetbrains-mono">
        <Navbar />
        <ScrollToTopButton />

        <div className="w-full px-60 py-10">
            <div className="text-left mt-20">
            <Link to="/" className="text-[#00FFCC] text-sm hover:underline">
                ← Back to Home
            </Link>
            </div>
            <h2 className="text-[#31FFDD] text-[30px] text-center font-bold mb-12 mt-4">
            More Projects
            </h2>

            {projects.length === 0 ? (
            <p className="text-white text-center text-lg">No projects to display.</p>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                <div
                    key={project.id}
                    className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-48 relative group shadow-xs shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
                >
                    <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="justify-end ml-auto">
                        <img src="/Images/open-folder.png" alt="" className="w-5 h-5" />
                    </div>
                    </div>
                    <div className="text-left rounded-md flex-grow p-4">
                    <h3 className="text-[#00FFCC] text-[18px] font-bold mb-2">
                        {project.title}
                    </h3>
                    <p className="text-[#4CD2BC] text-[10px]">{project.description}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                    {project.githubLink ? (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/github.png"
                            alt="GitHub Icon"
                            className="w-4 h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                        />
                        </a>
                    ) : (
                        <img
                        src="/Images/github.png"
                        alt="GitHub Icon"
                        className="w-4 h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                        />
                    )}
                    {project.title === 'Portfolio' && project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/link.png"
                            alt="Link Icon"
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
    </div>
  );
};

export default ProjectPage;