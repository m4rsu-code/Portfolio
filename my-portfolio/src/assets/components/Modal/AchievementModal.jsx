import React, { useEffect, useState } from 'react';

const AchievementModal = ({ image, title, description, date, onClose }) => {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLandscape(img.width > img.height);
    };
  }, [image]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-white/10 z-50 flex items-center justify-center px-4"
      onClick={handleOverlayClick}
    >
      <div
        className={`relative bg-[#1B2A3A] border border-[#4CD2BC]/20 rounded-2xl shadow-xl w-full
          ${isLandscape ? 'max-w-7xl' : 'max-w-5xl'} p-10 font-jetbrains-mono text-white`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 p-2 rounded-full text-[#31FFDD] hover:text-white hover:bg-[#4CD2BC]/10 transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="w-full lg:w-[40%] max-h-[500px] overflow-hidden rounded-xl border-2 border-[#4CD2BC] shadow-md">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-[#31FFDD] text-xs uppercase tracking-widest font-semibold">
                Featured Achievement
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#31FFDD] leading-snug break-words">
                🏆 {title}
              </h2>
            </div>
            <p className="text-[#B4F8E5] text-base leading-relaxed">
              {description}
            </p>
            <p className="text-[#4CD2BC] text-sm font-medium">
              Date: {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
