import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Community = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 3000); // Adjust the time (3000ms = 3 seconds) as needed
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Community"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Maternal Community</h1>
      <p className="text-center text-gray-500 mb-8 max-w-lg mx-auto">
        Bringing a life-line to support maternal health
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="previous community"
        >
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="next community"
        >
          <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              <div className="absolute left-0 right-0 bottom-5 flex flex-col items-center text-center">
                <div className="bg-white w-3/4 px-4 py-3 shadow-md rounded-md">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
