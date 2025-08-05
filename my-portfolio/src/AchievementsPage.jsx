import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import AchievementModal from './assets/components/Modal/AchievementModal';
import ScrollToTopButton from './assets/components/ScrollToTopButton';
import Loader from './assets/components/Loader'; // Import the updated Loader

const AchievementsPage = () => {
  const location = useLocation();
  const achievements = location.state?.achievements || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

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
        <Loader /> // Display loader while content is loading
      ) : (
        <>
          <Navbar />
          <ScrollToTopButton />
          <div className="w-full px-90 py-10">
            <div className="text-left mt-20">
              <Link to="/" className="text-[#31FFDD] text-sm hover:underline">
                ← Back to Home
              </Link>
            </div>
            <div className="w-full flex items-center mb-8">
              <h2 className="text-[#31FFDD] text-[30px] font-bold text-center w-full mt-2">
                All Achievements
              </h2>
            </div>

            {achievements.length === 0 ? (
              <p className="text-white text-center text-lg">No achievements to display.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-[#1B2A3A] rounded-lg p-4 flex flex-col h-auto">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div
                      className="border border-[#4CD2BC] rounded-md flex-grow overflow-hidden group cursor-pointer"
                      onClick={() => openModal(achievement)}
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-[#31FFDD] text-sm mb-2">Featured Achievement</p>
                      <h3 className="text-[#31FFDD] text-lg font-bold flex items-center gap-2">
                        🏆 {achievement.title}
                      </h3>
                      <div className="border border-[#4CD2BC] rounded-md mt-4 p-4 text-[#4CD2BC] text-sm overflow-auto">
                        {achievement.description}
                      </div>
                      <p className="text-[#4CD2BC] text-sm mt-2">Date: {achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
        </>
      )}
    </div>
  );
};

export default AchievementsPage;