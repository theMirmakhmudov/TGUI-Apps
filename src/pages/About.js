import React from 'react';
import '../index.css'; // Tailwind CSS ni import qilish

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">Welcome to the About Page</h1>
        <p className="text-lg text-black">This is a simple homepage built with React and styled using Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default About;
