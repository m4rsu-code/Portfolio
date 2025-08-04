import React from 'react';
import '../CSS/Navbar.css'; // Import the CSS for styling

function Navbar() {
  return (
    <nav className="w-full px-10 py-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md font-jetbrains-mono">
      {/* Logo on the left */}
      <a href="/" className='text-3xl font-bold text-[#FF38E5] cursor-pointer'>m4rsu</a>
      {/* Navigation links on the right */}
      <div className='flex gap-10 text-base'>
        <a href='#about' className='text-[#31FFDD] text-[15px] font-light nav-link'>About</a>
        <a href='#achievements' className='text-[#31FFDD] text-[15px] font-light nav-link'>Achievements</a>
        <a href='#projects' className='text-[#31FFDD] text-[15px] font-light nav-link'>Projects</a>
        <a href='#contact' className='text-[#31FFDD] text-[15px] font-light nav-link'>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;