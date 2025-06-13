import React, { useState } from 'react';
import News from './News';
const Form = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="flex h-screen">
  
      <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2">

            <li>
              <a
                href="#dashboard"
                onClick={() => setActiveItem('Dashboard')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'Dashboard'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#sports"
                onClick={() => setActiveItem('sports')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'sports'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Sports
              </a>
            </li>
            <li>
              <a
                href="#Health"
                onClick={() => setActiveItem('Health')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'Health'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Health
              </a>
            </li>
            <li>
              <a
                href="#Entertainment"
                onClick={() => setActiveItem('Entertainment')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'Entertainment'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Entertainment
              </a>
            </li>
            <li>
              <a
                href="#Science"
                onClick={() => setActiveItem('Science')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'Science'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Science
              </a>
            </li>
            <li>
              <a
                href="#Technology"
                onClick={() => setActiveItem('Technology')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'Technology'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="#Business"
                onClick={() => setActiveItem('Business')}
                className={`w-full block px-6 py-3 transition-colors duration-200 ${
                  activeItem === 'Business'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Business
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-gray">
        {activeItem === 'Dashboard' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Dashboard content goes here</p>
          </div>
        )}

        {activeItem === 'sports' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">sports</h1>
            <News category="sports"/>
           
          </div>
        )}

        {activeItem === 'Health' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Health</h1>
            <News category="health"/>
            
          </div>
        )}

        {activeItem === 'Entertainment' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Entertainment</h1>
            <News category="entertainment"/>
          </div>
        )}

        {activeItem === 'Science' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Science</h1>
            <News category="Science"/>

          </div>
        )}

        {activeItem === 'Technology' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Technology</h1>
            <News category="technology"/>
            
          </div>
        )}

        {activeItem === 'Business' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Business</h1>
           
            <News category="business"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;