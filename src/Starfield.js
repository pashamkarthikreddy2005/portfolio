import React, { useEffect } from 'react';

const Starfield = () => {
  useEffect(() => {
    const numStars = 200; // Adjust number of stars
    const stars = [];

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      document.body.appendChild(star);

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 3 + 1; // Random size between 1 and 3

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      stars.push(star);
    };

    for (let i = 0; i < numStars; i++) {
      createStar();
    }

    return () => {
      stars.forEach(star => star.remove()); // Clean up stars on unmount
    };
  }, []);

  return null;
};

export default Starfield;
