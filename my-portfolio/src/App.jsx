import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import './assets/CSS/animation.css'; // Import global styles

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id='home' className='min-h-screen bg-[#1A252F]'>
        <Navbar />
        {/* Main */}
        <div className='w-full px-60 py-10'>
          {/* Introduction Section */}
          {/* Container 1 */}
          <container className="flex flex-col items-center justify-center mt-30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-35 px-8 py-16">
              {/* Image with Glowing Effect */}
              <div className="relative">
                <div className="rounded-full border-[2px] border-[#00FFCC] overflow-hidden w-[500px] h-[500px] animate-glow">
                  <img
                    src="/Images/me.png" // Updated path for public folder
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
          {/* Container 2 */}
          <container id="about" className="flex flex-col  mt-30">
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
                {/* Border Box Behind */}
                <div className="absolute left-5 w-full h-full border-3 border-[#00FFCC] rounded-[10px] uneven-box z-0 transition-transform duration-300 ease-in-out"></div>

                {/* Actual Image on Top */}
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
          {/* Container 3 */}
          <container id="achievements" className="flex flex-col mt-30 px-8 py-16 font-jetbrains-mono">
            <h2 className="text-[#31FFDD] text-[30px] font-bold mb-12">Notable Achievements</h2>

            {/* Cards Grid */}
            <div>
              {/* First Row */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left card (code-like box with image) */}
                <div className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-96">
                  {/* Browser-like top bar */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  {/* Content box with image */}
                  <div className="border border-[#31FFDD] rounded-md flex-grow overflow-hidden">
                    <img
                      src="/Images/me2.jpg" // Replace with actual image path
                      alt="Achievement Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right card (trophy + achievement with text) */}
                <div className="flex flex-col h-64">
                  <p className="text-[#31FFDD] text-sm mb-2">Featured Achievement</p>
                  <h3 className="text-[#31FFDD] text-lg font-bold flex items-center gap-2">
                    🏆 Digital Solution Showcase
                  </h3>
                  {/* Text box */}
                  <div className="border border-[#31FFDD] rounded-md flex-grow mt-4 p-4 text-[#4CD2BC] text-sm overflow-auto">
                    Recognized for developing an innovative digital solution that streamlined project workflows and enhanced user experience across multiple platforms.
                  </div>
                  <p className="text-[#31FFDD] text-sm mt-2">Date: [Insert Date]</p>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid md:grid-cols-2 gap-10 mt-10">
                {/* Left card (trophy + achievement with text) */}
                <div className="flex flex-col h-64">
                  <p className="text-[#31FFDD] text-sm mb-2">Featured Achievement</p>
                  <h3 className="text-[#31FFDD] text-lg font-bold flex items-center gap-2">
                    🏆 Dean’s Lister
                  </h3>
                  {/* Text box */}
                  <div className="border border-[#31FFDD] rounded-md flex-grow mt-4 p-4 text-[#4CD2BC] text-sm overflow-auto">
                    Achieved Dean’s List status for outstanding academic performance, maintaining a GPA above 3.5 for multiple semesters.
                  </div>
                  <p className="text-[#4CD2BC] text-sm mt-2">Date: [Insert Date]</p>
                </div>

                {/* Right card (code-like box with image) */}
                <div className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-96">
                  {/* Browser-like top bar */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  {/* Content box with image */}
                  <div className="border border-[#31FFDD] rounded-md flex-grow overflow-hidden">
                    <img
                      src="path/to/your/image2.jpg" // Replace with actual image path
                      alt="Achievement Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Show more link */}
            <div className="text-center mt-10">
              <a href="#" className="text-[#31FFDD] text-sm hover:underline">
                Show more achievements →
              </a>
            </div>
          </container>
        </div>
      </div>
    </>
  );
}

export default App;