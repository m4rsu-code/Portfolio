import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import AchievementModal from './assets/components/Modal/AchievementModal';
import ScrollToTopButton from './assets/components/ScrollToTopButton';
import Loader from './assets/components/Loader';

const AchievementsPage = () => {
  const location = useLocation();
  const achievements = location.state?.achievements || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);

  // Simulate content loading and trigger card animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Stagger card animations
      achievements.forEach((_, index) => {
        setTimeout(() => {
          setLoadedCards((prev) => [...prev, index]);
        }, index * 150); // 150ms delay per card
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [achievements]);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-[#1A252F] font-jetbrains-mono">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTopButton />
          <div className="w-full px-10 py-6 md:px-96 md:py-10 pt-20 md:pt-10">
            <div className="text-left mt-6 md:mt-20 z-10 relative">
              <Link
                to="/"
                className="text-[#31FFDD] text-sm md:text-sm hover:underline inline-block py-3 px-4 transition-colors duration-200 rounded-md"
              >
                ← Back to Home
              </Link>
            </div>
            <div className="w-full flex items-center mb-6 md:mb-8">
              <h2 className="text-[#31FFDD] text-2xl md:text-[30px] font-bold text-center w-full mt-2">
                All Achievements
              </h2>
            </div>

            {achievements.length === 0 ? (
              <p className="text-white text-center text-base md:text-lg">No achievements to display.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className={`bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-auto transition-all duration-300 ease-in-out ${
                      loadedCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } md:shadow-none md:hover:translate-y-0 shadow-md hover:-translate-y-1 rounded-xl`}
                  >
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div
                      className="border border-[#4CD2BC] rounded-md md:rounded-md flex-grow overflow-hidden group cursor-pointer"
                      onClick={() => openModal(achievement)}
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg md:rounded-md"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-[#31FFDD] text-xs md:text-sm mb-2">Featured Achievement</p>
                      <h3 className="text-[#31FFDD] text-base md:text-lg font-bold flex items-center gap-2">
                        🏆 {achievement.title}
                      </h3>
                      <div className="border border-[#4CD2BC] rounded-md md:rounded-md mt-4 p-4 text-[#4CD2BC] text-xs md:text-sm overflow-auto">
                        {achievement.description}
                      </div>
                      <p className="text-[#4CD2BC] text-xs md:text-sm mt-2">Date: {achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
        </>
      )}
    </div>
  );
};

export default AchievementsPage;