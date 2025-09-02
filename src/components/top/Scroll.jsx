import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a specific height
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll position to the top of the page
  const scrolles = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrolles}
          className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Scroll;
