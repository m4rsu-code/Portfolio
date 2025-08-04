import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import AchievementModal from './assets/components/Modal/AchievementModal';
import './assets/CSS/animation.css';
import { achievements, projects, figmaProjects } from './assets/components/data';
import ScrollToTopButton from './assets/components/ScrollToTopButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <div className='min-h-screen bg-[#1A252F]'>
      <Navbar />
      <ScrollToTopButton />
      <div className='w-full px-60 py-10'>
        {/* Introduction Section */}
        <div className="flex flex-col items-center justify-center mt-30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-35 px-8 py-16">
            {/* Image with Glowing Effect */}
            <div className="relative">
              <div className="rounded-full border-[2px] border-[#00FFCC] overflow-hidden w-[500px] h-[500px] animate-glow">
                <img
                  src="/Images/me.png"
                  alt="Martian L. Rebote"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left font-jetbrains-mono">
              <div className='w-full md:w-[750px]'>
                <p className="text-[#FFEA00] text-[18px]">Hi, my name is</p>
                <h1 className="text-[#00FFCC] text-[45px] font-bold mt-2">Martian L. Rebote</h1>
                <p className="text-base text-[30px] font-bold text-[#57CDB9] mt-4">
                  I turn ideas into clean, functional web experiences.
                </p>
                <p className="mt-4 text-[#4CD2BC] leading-relaxed text-[18px]">
                  I’m a frontend developer with a focus on building fast, accessible, and responsive websites that deliver great user experiences.
                </p>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <a href="/Martian_Rebote_CV.pdf" className="border border-[#00FFCC] px-5 py-2 rounded-md text-[#00FFCC] hover:bg-[#00FFCC] hover:text-black transition-colors">
                  Download CV
                </a>
                <a href="#projects" className="border border-[#FF38E5] px-5 py-2 rounded-md text-[#FF38E5] hover:bg-[#FF38E5] hover:text-black transition-colors">
                  Check out my work!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div id="about" className="flex flex-col mt-30">
          <div className='flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-16'>
            <div className='w-full md:w-[800px] text-left font-jetbrains-mono'>
              <h2 className='text-[#31FFDD] text-[30px] font-bold mb-7'>About Me</h2>
              <div className='w-full md:w-[900px] text-justify px-5'>
                <p className='text-[#4CD2BC] text-[18px] mt-4'>
                  Hi, I’m Martian L. Rebote, a junior frontend developer. I enjoy building and designing websites and mobile apps. I’m not only focused on programming, but I also like working on design, whether it’s for the web or mobile.
                </p>
                <p className='text-[#4CD2BC] text-[18px] mt-4'>
                  I’m flexible and open to learning. I can work as a full-stack developer if needed. During my internship, I became a full-stack developer and learned a lot, which helped me grow and understand more about the programming industry.
                </p>
                <p className='text-[#4CD2BC] text-[18px] mt-4'>
                  Some of the technologies I’ve used recently include:
                </p>

                <div className='flex flex-col sm:flex-row gap-10 mt-4'>
                  <ul className='text-[#4CD2BC] text-[18px] mt-2 list-disc pl-5'>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul className='text-[#4CD2BC] text-[18px] mt-2 list-disc pl-5'>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Laravel</li>
                  </ul>
                </div>
              </div>              
            </div>

            <div className="relative image-container w-[380px] h-[450px] group cursor-pointer">
              <div className="absolute left-5 w-full h-full border-3 border-[#00FFCC] rounded-[10px] uneven-box z-0 transition-transform duration-300 ease-in-out"></div>
              <div className="relative z-10 rounded-[10px] overflow-hidden w-full h-full transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]">
                <img
                  src="/Images/me2.jpg"
                  alt="Martian L. Rebote"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
          <h2 className="text-[#31FFDD] text-[30px] font-bold mb-12">Notable Achievements</h2>

          {/* Cards Grid - Limited to first 2 achievements */}
          <div>
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left card (code-like box with image) */}
              <div className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-96">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div 
                  className="border border-[#4CD2BC] rounded-md flex-grow overflow-hidden group cursor-pointer"
                  onClick={() => openModal(achievements[0])}
                >
                  <img
                    src={achievements[0].image}
                    alt="Achievement Image"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Right card (trophy + achievement with text) */}
              <div className="flex flex-col h-64">
                <p className="text-[#31FFDD] text-sm mb-2">Featured Achievement</p>
                <h3 className="text-[#31FFDD] text-lg font-bold flex items-center gap-2">
                  🏆 {achievements[0].title}
                </h3>
                <div className="border border-[#4CD2BC] rounded-md flex-grow mt-4 p-4 text-[#4CD2BC] text-sm overflow-auto">
                  {achievements[0].description}
                </div>
                <p className="text-[#4CD2BC] text-sm mt-2">Date: {achievements[0].date}</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-10 mt-10">
              {/* Left card (trophy + achievement with text) */}
              <div className="flex flex-col h-64">
                <p className="text-[#31FFDD] text-sm mb-2">Featured Achievement</p>
                <h3 className="text-[#31FFDD] text-lg font-bold flex items-center gap-2">
                  🏆 {achievements[1].title}
                </h3>
                <div className="border border-[#4CD2BC] rounded-md flex-grow mt-4 p-4 text-[#4CD2BC] text-sm overflow-auto">
                  {achievements[1].description}
                </div>
                <p className="text-[#4CD2BC] text-sm mt-2">Date: {achievements[1].date}</p>
              </div>

              {/* Right card (code-like box with image) */}
              <div className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-96">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div 
                  className="border border-[#4CD2BC] rounded-md flex-grow overflow-hidden group cursor-pointer"
                  onClick={() => openModal(achievements[1])}
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

          {/* Show more link */}
          <div className="text-center mt-10">
            <Link
                to="/achievements"
                state={{ achievements }}
                className="text-[#31FFDD] text-sm hover:underline"
              >
                Show more achievements →
              </Link>
          </div>
        </div>

        {/* Project Section */}
        <div id='projects' className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
          <h2 className="text-[#31FFDD] text-[30px] text-center font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-48 relative group shadow-xs shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="justify-end ml-auto">
                    <img src="/Images/open-folder.png" alt="Folder Icon" className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-left rounded-md flex-grow p-4">
                  <h3 className="text-[#00FFCC] text-[18px] font-bold mb-2">{project.title}</h3>
                  <p className="text-[#4CD2BC] text-[10px]">{project.description}</p>
                </div>
                <div className="flex justify-end gap-2">
                  {project.githubLink ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View Portfolio Website">
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

          {projects.length > 6 && (
            <div className="text-center mt-10">
              <Link
                to="/projects"
                state={{ projects }}
                className="text-[#00FFCC] text-sm hover:underline"
              >
                Show more projects →
              </Link>
            </div>
          )}
        </div>

        {/* Figma Projects Section */}
        <div className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
          <h2 className="text-[#31FFDD] text-[30px] text-center font-bold mb-12">Figma Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {figmaProjects.slice(0, 3).map((project) => (
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

                {/* Image with Border and No Overlap */}
                <div className="flex-grow flex items-center justify-center p-2">
                  <div className="border border-[#4CD2BC] rounded-md w-full h-[350px] overflow-hidden ">
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
          {figmaProjects.length > 3 && (
            <div className="text-center mt-10">
              <Link
                to="/figma-projects"
                state={{ figmaProjects }}
                className="text-[#00FFCC] text-sm hover:underline"
              >
                Show more Figma projects →
              </Link>
            </div>
          )}
        </div>

        {/* Contact section */}
        <div className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
          <div className="flex  items-center justify-center w-full">
            
            {/* Left side — the outlined box */}
            <div className="border border-[#4CD2BC] md:w-[800px] md:h-[250px] rounded-md">
            </div>

            {/* Right side — text, button, and icons */}
            <div className="w-full text-center ">
              <h2 className="text-[#00FFCC] text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-[#4CD2BC] text-sm  mb-8 px-20">
                I’m open to new opportunities and always happy to connect. Feel free to reach out — I’ll do my best to respond promptly!
              </p>
              <button className="border border-[#FF38E5] px-5 py-2 rounded-md text-[#FF38E5] hover:bg-[#FF38E5] hover:text-[#131A26] transition duration-300 mb-8 cursor-pointer">
                Say Hello
              </button>

              {/* Social icons */}
              <div className="flex items-center justify-center md:justify-center gap-4">
                <a href="#" className="hover:text-[#00FFCC]">
                  <img src="/Images/facebook.png" alt="" className='w-6 h-6 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]'/>
                </a>
                <a href="#" className="hover:text-[#00FFCC]">
                  <img src="/Images/instagram.png" alt="" className='w-6 h-6 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]'/>
                </a>
                <a href="#" className="hover:text-[#00FFCC]">
                  <img src="/Images/twitter.png" alt="" className='w-6 h-6 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]'/>
                </a>
                <a href="#" className="hover:text-[#00FFCC]">
                  <img src="/Images/linkedin.png" alt="" className='w-6 h-6 hover:invert hover:brightness-0 hover:sepia hover:saturate-[100%]'/>
                </a>
              </div>
            </div>
          </div>
        </div>  
        {/* Modal */}
        {isModalOpen && selectedAchievement && (
          <AchievementModal
            image={selectedAchievement.image}
            title={selectedAchievement.title}
            description={selectedAchievement.description}
            date={selectedAchievement.date}
            onClose={closeModal}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="text-[#4CD2BC] text-sm flex items-center p-4 justify-between px-6 relative font-jetbrains-mono">
        <span className="flex items-center">
          <span className="border-t-2 border-[#4CD2BC] w-20 mr-2"></span>
          <span className="flex items-center gap-1">
            Designed & built by Martian L. Rebote
            <img src="Images/code.png" alt="Code icon" className="w-5 h-5" />
          </span>
        </span>
        <a
          href="mailto:rebotemartian75@gmail.com"
          className="text-[#4CD2BC] hover:underline flex items-center font-jetbrains-mono"
        >
          rebotemartian75@gmail.com
          <span className="border-t-2 border-[#4CD2BC] w-20 ml-2"></span>
        </a>
      </footer>
    </div>
  );
}

export default App;