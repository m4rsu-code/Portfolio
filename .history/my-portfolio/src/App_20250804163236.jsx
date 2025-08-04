import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import AchievementModal from './assets/components/Modal/AchievementModal';
import './assets/CSS/animation.css';

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      image: '/Images/cert1.png',
      title: 'Digital Solution Showcase',
      description: 'Recognized for developing an innovative digital solution that streamlined project workflows and enhanced user experience across multiple platforms.',
      date: 'November 20, 2024',
    },
    {
      id: 2,
      image: '/Images/cert2.png',
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      description: 'Earned a student-level credential for completing the CCNA: Switching, Routing, and Wireless Essentials course.',
      date: 'February 12, 2024',
    },
    {
      id: 3,
      image: '/Images/cert3.png',
      title: 'Dean’s Lister',
      description: 'Consistently achieved Dean’s List recognition for outstanding academic performance, maintaining a GPA of 1.750 for the first semester academic year 2023-2024.',
      date: 'November 20, 2024',
    },
    {
      id: 4,
      image: '/Images/cert4.png',
      title: 'Wadhwani Impactful Writing Skills',
      description: 'Completed the Wadhwani Impactful Writing Skills program, enhancing professional communication for workplace effectiveness.',
      date: 'January 31, 2025',
    },
    {
      id: 5,
      image: '/Images/cert5.png',
      title: 'Wadhwani Impactful Writing Skills',
      description: 'Completed the Wadhwani Impactful Writing Skills program, enhancing professional communication for workplace effectiveness.',
      date: 'January 31, 2025',
    },
  ];

  const projects = [
    { id: 1, title: 'Portfolio', description: 'This is my portfolio', link: 'https://your-portfolio.com', githubLink: 'https://github.com/m4rsu-code/Portfolio/tree/main/my-portfolio'},
    { id: 2, title: 'Ttracker', description: 'This is a document tracking system called Ttracker I built during my internship. It handles ordinances, resolutions, and motions, with upload and download features.', githubLink: 'https://github.com/m4rsu-code/Ttracker/tree/main/Tracker' },
    { id: 3, title: 'd.resort', description: 'This is our capstone project — an IoT-based employee management system with a fingerprint scanner for attendance tracking and salary computation. It also includes a booking system managed by employees.', githubLink: 'https://github.com/m4rsu-code/d.resort'},
    { id: 4, title: 'Fithub', description: 'This is a fitness website that i make during my 2nd year in college', githubLink: 'https://github.com/m4rsu-code/FITHUB/tree/main/Fithub'},
    { id: 5, title: 'da-pizza', description: 'This is my project and im still learning how to code that time', githubLink: 'https://github.com/m4rsu-code/da-pizza/tree/main/da-pizza'},
    { id: 6, title: 'AlphaSign', description: 'This is the first mobile app project that i built (this is just a simple app)', githubLink: 'https://github.com/m4rsu-code/AlphaSign'},
    { id: 7, title: 'Hubit-mobile', description: 'Hubit is a simple fitness app we built quickly for our mobile development course, focusing on core features.', githubLink: 'https://github.com/m4rsu-code/HubIT-mobile'},
    { id: 8, title: 'Hubit-web', description: 'This is the web version, designed to complement the app.', githubLink: 'https://github.com/m4rsu-code/HubIT-web/tree/main/Adet_Website-main'},
  ];

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  console.log('Rendering App with achievements:', achievements);

  return (
    <div className='min-h-screen bg-[#1A252F]'>
      <Navbar />
      <div className='w-full px-60 py-10'>
        {/* Introduction Section */}
        <container className="flex flex-col items-center justify-center mt-30">
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
                <a href="#portfolio" className="border border-[#FF38E5] px-5 py-2 rounded-md text-[#FF38E5] hover:bg-[#FF38E5] hover:text-black transition-colors">
                  Check out my work!
                </a>
              </div>
            </div>
          </div>
        </container>

        {/* About Me Section */}
        <container id="about" className="flex flex-col mt-30">
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
        </container>

        {/* Achievements Section */}
        <container id="achievements" className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
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
        </container>

        {/* Project section */}
        <container id='projects' className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
          <h2 className="text-[#31FFDD] text-[30px] text-center font-bold mb-12">Featured Projects</h2>
          {/* cards */}
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
                  {/* GitHub Icon: Clickable if githubLink exists, otherwise just an image */}
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
        </container>

        {/* Figma project section */}
        <container className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
          <h2 className="text-[#31FFDD] text-[30px] text-center font-bold mb-12">FIGMA PROJECTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-96 relative group shadow-xs shadow-[#4CD2BC] cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                {/* Header with window controls and folder icon */}
                <div className="flex gap-2 mb-2">
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

                {/* Image with Border and Hover Effect */}
                <div className="flex-grow flex items-center justify-center">
                  <div className="border border-[#4CD2BC] rounded-md w-full h-full overflow-hidden group/image">
                    <img
                      src={`/Images/${project.title.toLowerCase().replace(/\s/g, '-')}.png`}
                      alt={`${project.title} Image`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover/image:scale-110"
                      onError={(e) => (e.target.src = '/Images/me.png')} // Fallback image
                    />
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="flex justify-end gap-2 mt-2">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
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
        </container>
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
    </div>
  );
}

export default App;