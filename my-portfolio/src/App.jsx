import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import AchievementModal from './assets/components/Modal/AchievementModal';
import ContactModal from './assets/components/Modal/ContactModal';
import Loader from './assets/components/Loader';
import './assets/CSS/animation.css';
import { achievements, projects, figmaProjects, skills, socialMedia, cvLink } from './assets/components/data';
import ScrollToTopButton from './assets/components/ScrollToTopButton';

function App() {
  const location = useLocation();
  const [isAchievementModalOpen, setIsAchievementModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const openAchievementModal = (achievement) => {
    setSelectedAchievement(achievement);
    setIsAchievementModalOpen(true);
  };

  const closeAchievementModal = () => {
    setIsAchievementModalOpen(false);
    setSelectedAchievement(null);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1A252F]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTopButton />
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 py-6 sm:py-8 md:py-10">
            {/* Introduction Section */}
            <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-20 lg:mt-26">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-22 px-4 sm:px-6 py-8 sm:py-12 md:py-16 w-full max-w-[1350px]">
                <div className="relative">
                  <div className="rounded-full border-2 border-[#00FFCC] overflow-hidden w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] animate-glow">
                    <img
                      src="/Images/me.png"
                      alt="Martian L. Rebote"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left font-jetbrains-mono">
                  <div className="w-full max-w-[980px]">
                    <p className="text-[#FFEA00] text-sm sm:text-base md:text-lg lg:text-[18px]">Hi, my name is</p>
                    <h1 className="text-[#00FFCC] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold mt-2">Martian L. Rebote</h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[30px] font-bold text-[#57CDB9] mt-2 sm:mt-4">
                      I turn ideas into clean, functional web experiences.
                    </p>
                    <p className="mt-2 sm:mt-4 text-[#4CD2BC] leading-relaxed text-sm sm:text-base md:text-lg lg:text-[18px]">
                      I’m a frontend developer with a focus on building fast, accessible, and responsive websites that deliver great user experiences.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 flex flex-row items-start justify-center md:justify-start gap-2 sm:gap-4">
                    <a
                      href={cvLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#00FFCC] px-4 sm:px-5 py-2 rounded-md text-[#00FFCC] text-sm sm:text-base hover:bg-[#00FFCC] hover:text-black transition-colors"
                    >
                      Download CV
                    </a>
                    <a href="#projects" className="border border-[#FF38E5] px-4 sm:px-5 py-2 rounded-md text-[#FF38E5] text-sm sm:text-base hover:bg-[#FF38E5] hover:text-black transition-colors">
                      Check out my work!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me Section */}
            <div id="about" className="flex flex-col mt-8 sm:mt-12 md:mt-20 lg:mt-30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 py-8 sm:py-12 md:py-16 w-full">
                <div className="w-full max-w-[980px] lg:max-w-[1080px] text-left font-jetbrains-mono">
                  <h2 className="text-[#31FFDD] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold mb-4 sm:mb-7">About Me</h2>
                  <div className="w-full max-w-[980px] lg:max-w-[1080px] text-justify px-2 sm:px-5">
                    <p className="text-[#4CD2BC] text-sm sm:text-base md:text-lg lg:text-[18px] mt-2 sm:mt-4">
                      Hi, I’m Martian L. Rebote, a junior frontend developer with a passion for building and designing websites and mobile apps. While my primary focus is on frontend development, I also enjoy working on UI/UX design for both web and mobile platforms.
                    </p>
                    <p className="text-[#4CD2BC] text-sm sm:text-base md:text-lg lg:text-[18px] mt-2 sm:mt-4">
                      I’m flexible, eager to learn, and open to new challenges. During my internship, I took on full-stack development responsibilities, which helped me grow significantly and deepen my understanding of the tech industry.
                    </p>
                    <p className="text-[#4CD2BC] text-sm sm:text-base md:text-lg lg:text-[18px] mt-2 sm:mt-4">
                      Here are some of the technologies I’ve recently worked with and my proficiency in each:
                    </p>
                    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                      {[[0, 3], [3, 6], [6, 9], [9, 10]].map(([start, end], colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-2 sm:gap-4">
                          {skills.slice(start, end).map((skill, index) => (
                            <div key={`${skill.name}-${index}`} className="flex flex-col">
                              <div className="flex justify-between items-center">
                                <span className="text-[#4CD2BC] text-xs sm:text-sm md:text-[15px]">{skill.name}</span>
                                <span className="text-[#4CD2BC] text-[10px] sm:text-xs md:text-[12px]">{skill.proficiency}%</span>
                              </div>
                              <div className="w-full bg-[#1B2A3A] rounded-full h-1.5 sm:h-2 mt-1">
                                <div
                                  className="bg-[#00FFCC] h-1 sm:h-1.5 rounded-full transition-all duration-500"
                                  style={{ width: `${skill.proficiency}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block blob-image-wrapper w-[200px] h-[250px] sm:w-[280px] sm:h-[350px] md:w-[320px] md:h-[400px] lg:w-[340px] lg:h-[400px] relative mt-4 md:mt-0">
                  <div className="w-full absolute inset-0 z-0">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full shadow-blob">
                      <path
                        fill="rgba(0, 255, 204, 0.5)"
                        d="M44.8,-54.3C56.3,-43.8,62.5,-28,62.9,-12.9C63.3,2.1,58,16.3,52.3,33.9C46.5,51.6,40.4,72.7,27.1,80C13.8,87.2,-6.5,80.5,-25.5,72.5C-44.5,64.6,-62.2,55.3,-70,40.9C-77.7,26.4,-75.5,6.8,-71.5,-12C-67.4,-30.7,-61.5,-48.4,-49.2,-58.8C-37,-69.2,-18.5,-72.2,-0.9,-71.1C16.7,-70.1,33.4,-64.9,44.8,-54.3Z"
                        transform="translate(100 100)"
                        className="shadow-path"
                      />
                    </svg>
                  </div>
                  <div className="w-full relative z-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <defs>
                        <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
                          <path
                            fill="#FF0066"
                            d="M44.8,-54.3C56.3,-43.8,62.5,-28,62.9,-12.9C63.3,2.1,58,16.3,52.3,33.9C46.5,51.6,40.4,72.7,27.1,80C13.8,87.2,-6.5,80.5,-25.5,72.5C-44.5,64.6,-62.2,55.3,-70,40.9C-77.7,26.4,-75.5,6.8,-71.5,-12C-67.4,-30.7,-61.5,-48.4,-49.2,-58.8C-37,-69.2,-18.5,-72.2,-0.9,-71.1C16.7,-70.1,33.4,-64.9,44.8,-54.3Z"
                            transform="translate(100 100)"
                          />
                        </clipPath>
                      </defs>
                      <image
                        href="/Images/me2.jpg"
                        width="170"
                        height="190"
                        clipPath="url(#blobClip)"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div id="achievements" className="flex flex-col mt-8 sm:mt-12 md:mt-20 lg:mt-30 px-4 sm:px-6 py-8 sm:py-12 md:py-16 font-jetbrains-mono">
              <h2 className="text-[#31FFDD] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold mb-6 sm:mb-8 md:mb-12">Notable Achievements</h2>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  <div className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-[300px] sm:h-[400px] md:h-[450px] lg:h-96">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div 
                      className="border border-[#4CD2BC] rounded-md flex-grow overflow-hidden group cursor-pointer"
                      onClick={() => openAchievementModal(achievements[0])}
                    >
                      <img
                        src={achievements[0].image}
                        alt="Achievement Image"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-[200px] sm:h-[250px] md:h-[300px] lg:h-64">
                    <p className="text-[#31FFDD] text-xs sm:text-sm mb-2">Featured Achievement</p>
                    <h3 className="text-[#31FFDD] text-base sm:text-lg md:text-xl lg:text-lg font-bold flex items-center gap-2">
                      🏆 {achievements[0].title}
                    </h3>
                    <div className="border border-[#4CD2BC] rounded-md flex-grow mt-2 sm:mt-4 p-3 sm:p-4 text-[#4CD2BC] text-xs sm:text-sm overflow-auto">
                      {achievements[0].description}
                    </div>
                    <p className="text-[#4CD2BC] text-xs sm:text-sm mt-2">Date: {achievements[0].date}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <div className="flex flex-col h-[200px] sm:h-[250px] md:h-[300px] lg:h-64">
                    <p className="text-[#31FFDD] text-xs sm:text-sm mb-2">Featured Achievement</p>
                    <h3 className="text-[#31FFDD] text-base sm:text-lg md:text-xl lg:text-lg font-bold flex items-center gap-2">
                      🏆 {achievements[1].title}
                    </h3>
                    <div className="border border-[#4CD2BC] rounded-md flex-grow mt-2 sm:mt-4 p-3 sm:p-4 text-[#4CD2BC] text-xs sm:text-sm overflow-auto">
                      {achievements[1].description}
                    </div>
                    <p className="text-[#4CD2BC] text-xs sm:text-sm mt-2">Date: {achievements[1].date}</p>
                  </div>
                  <div className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-[300px] sm:h-[400px] md:h-[450px] lg:h-96">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div 
                      className="border border-[#4CD2BC] rounded-md flex-grow overflow-hidden group cursor-pointer"
                      onClick={() => openAchievementModal(achievements[1])}
                    >
                      <img
                        src={achievements[1].image}
                        alt="Achievement Image"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 sm:mt-8 md:mt-10">
                <Link
                  to="/achievements"
                  state={{ achievements }}
                  className="text-[#31FFDD] text-xs sm:text-sm hover:underline"
                >
                  Show more achievements →
                </Link>
              </div>
            </div>

            {/* Project Section */}
            <div id="projects" className="flex flex-col mt-8 sm:mt-12 md:mt-20 lg:mt-30 px-4 sm:px-6 py-8 sm:py-12 md:py-16 font-jetbrains-mono">
              <h2 className="text-[#31FFDD] text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-center font-bold mb-6 sm:mb-8 md:mb-12">Featured Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.slice(0, 6).map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-48 sm:h-56 md:h-64 relative group shadow-sm shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  >
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="justify-end ml-auto">
                        <img src="/Images/open-folder.png" alt="Folder Icon" className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                    </div>
                    <div className="text-left rounded-md flex-grow p-3 sm:p-4">
                      <h3 className="text-[#00FFCC] text-base sm:text-lg md:text-[18px] font-bold mb-2">{project.title}</h3>
                      <p className="text-[#4CD2BC] text-[9px] sm:text-[10px] md:text-xs">{project.description}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      {project.githubLink ? (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                          <img
                            src="/Images/github.png"
                            alt="GitHub Icon"
                            className="w-3 sm:w-4 h-3 sm:h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                          />
                        </a>
                      ) : (
                        <img
                          src="/Images/github.png"
                          alt="GitHub Icon"
                          className="w-3 sm:w-4 h-3 sm:h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                        />
                      )}
                      {project.title === 'Portfolio' && (
                        <a
                          href={window.location.origin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Portfolio Website"
                        >
                          <img
                            src="/Images/link.png"
                            alt="Link Icon"
                            className="w-3 sm:w-4 h-3 sm:h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {projects.length > 6 && (
                <div className="text-center mt-6 sm:mt-8 md:mt-10">
                  <Link
                    to="/projects"
                    state={{ projects }}
                    className="text-[#00FFCC] text-xs sm:text-sm hover:underline"
                  >
                    Show more projects →
                  </Link>
                </div>
              )}
            </div>

            {/* Figma Projects Section */}
            <div className="flex flex-col mt-8 sm:mt-12 md:mt-20 lg:mt-30 px-4 sm:px-6 py-8 sm:py-12 md:py-16 font-jetbrains-mono">
              <h2 className="text-[#31FFDD] text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-center font-bold mb-6 sm:mb-8 md:mb-12">Figma Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {figmaProjects.slice(0, 3).map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative group shadow-sm shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  >
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="justify-end ml-auto">
                        <img src="/Images/open-folder.png" alt="Folder Icon" className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-2">
                      <h3 className="text-[#00FFCC] text-base sm:text-lg md:text-[18px] font-bold">{project.title}</h3>
                    </div>
                    <div className="flex-grow flex items-center justify-center p-2">
                      <div className="border border-[#4CD2BC] rounded-md w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
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
                            className="w-3 sm:w-4 h-3 sm:h-4 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {figmaProjects.length > 3 && (
                <div className="text-center mt-6 sm:mt-8 md:mt-10">
                  <Link
                    to="/figma-projects"
                    state={{ figmaProjects }}
                    className="text-[#00FFCC] text-xs sm:text-sm hover:underline"
                  >
                    Show more Figma projects →
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Section */}
            <div id="contact" className="flex flex-col mt-8 sm:mt-12 md:mt-20 lg:mt-30 px-4 sm:px-6 py-8 sm:py-12 md:py-16 font-jetbrains-mono">
              <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
                <div className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[980px] h-auto rounded-md text-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[110px] text-shadow-cyan-50 font-extrabold text-[#FF38E5] cursor-pointer">m4rsu</h1>
                  <div className="flex items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00FFCC]"
                        aria-label={`Visit ${social.name} profile`}
                      >
                        <img
                          src={social.icon}
                          alt={`${social.name} Icon`}
                          className="w-5 sm:w-6 h-5 sm:h-6 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="w-full text-center mt-4 sm:mt-5">
                  <h2 className="text-[#00FFCC] text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
                  <p className="text-[#4CD2BC] text-xs sm:text-sm px-4 sm:px-10 md:px-20">
                    I’m open to new opportunities and always happy to connect. Feel free to reach out — I’ll do my best to respond promptly!
                  </p>
                  <button
                    onClick={openContactModal}
                    className="border border-[#00FFCC] text-[#00FFCC] px-4 sm:px-6 py-2 rounded hover:bg-[#00FFCC] hover:text-[#131A26] transition duration-300 mt-4 sm:mt-6 mb-6 sm:mb-8 cursor-pointer"
                  >
                    Say Hello
                  </button>
                </div>
              </div>
            </div>

            {/* Modals */}
            {isAchievementModalOpen && selectedAchievement && (
              <AchievementModal
                image={selectedAchievement.image}
                title={selectedAchievement.title}
                description={selectedAchievement.description}
                date={selectedAchievement.date}
                onClose={closeAchievementModal}
              />
            )}
            <ContactModal
              isOpen={isContactModalOpen}
              onClose={closeContactModal}
              recipientEmail="rebotemartian75@gmail.com"
            />
          </div>

          {/* Footer */}
          <footer className="text-[#4CD2BC] text-xs sm:text-sm flex flex-col sm:flex-row items-center p-4 justify-between px-4 sm:px-6 relative font-jetbrains-mono">
            <span className="flex items-center mb-2 sm:mb-0">
              <span className="border-t-2 border-[#4CD2BC] w-12 sm:w-20 mr-2"></span>
              <span className="flex items-center gap-1">
                Designed & built by Martian L. Rebote
                <img src="Images/code.png" alt="Code icon" className="w-4 sm:w-5 h-4 sm:h-5" />
              </span>
            </span>
            <a
              href="mailto:rebotemartian75@gmail.com"
              className="text-[#4CD2BC] hover:underline flex items-center font-jetbrains-mono"
            >
              rebotemartian75@gmail.com
              <span className="border-t-2 border-[#4CD2BC] w-12 sm:w-20 ml-2"></span>
            </a>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;