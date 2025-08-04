import { Link, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ScrollToTopButton from './assets/components/ScrollToTopButton';


const FigmaProjectsPage = () => {
  const location = useLocation();
  const figmaProjects = location.state?.figmaProjects || [];

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
          More Figma Projects
        </h2>

        {figmaProjects.length === 0 ? (
          <p className="text-white text-center text-lg">No Figma projects to display.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {figmaProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-[500px] relative group shadow-xs shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                {/* Header with window controls and folder icon */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="justify-end ml-auto">
                    <img src="/Images/open-folder.png" alt="Folder Icon" className="w-5 h-5" />
                  </div>
                </div>

                {/* Project Title */}
                <div className="flex items-start justify-start p-2">
                  <h3 className="text-[#00FFCC] text-[18px] font-bold">{project.title}</h3>
                </div>

                {/* Image with Border */}
                <div className="flex-grow flex items-center justify-center p-2">
                  <div className="border border-[#4CD2BC] rounded-md w-full h-[350px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} Image`}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.src = '/Images/fallback.png')}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Figma Link */}
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
    </div>
  );
};

export default FigmaProjectsPage;