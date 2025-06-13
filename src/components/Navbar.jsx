import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPercent(Math.round((winScroll / height) * 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-32">
    
      <div 
        className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500" 
        style={{ width: `${scrollPercent}%` }}
      ></div>

      <nav className="flex justify-around py-4 bg-black/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
     
        <div className="flex items-center">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
              <img
                className="h-10 object-cover" src='' alt="" />
                
              
            </h3>
          </a>
        </div>

        {/* Links Section */}
        <div className="items-center hidden space-x-8 lg:flex">
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Home
          </a>
          <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
            Themes
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Developers
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Pricing
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Blog
          </a>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            About Us
          </a>
          
        </div>
      </nav>

    </div>
  );
};

export default Navbar;