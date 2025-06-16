import React from 'react';
import { FaCoffee, FaGlassWhiskey, FaAppleAlt, FaLeaf, FaAppleAlt as FaBowlFood, FaHamburger, FaBreadSlice } from 'react-icons/fa';
import { GiSandwich } from 'react-icons/gi';
import { BiBowlHot } from 'react-icons/bi';

const categories = [
  { 
    name: 'Coffee', 
    icon: <FaCoffee className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Freshly brewed & specialty drinks'
  },
  { 
    name: 'Cold Press Juice', 
    icon: <FaGlassWhiskey className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Fresh, cold-pressed juices'
  },
  { 
    name: 'Smoothie', 
    icon: <FaAppleAlt className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Creamy & refreshing blends'
  },
  { 
    name: 'Acai', 
    icon: <FaLeaf className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Nutrient-rich bowls'
  },
  { 
    name: 'Salads', 
    icon: <FaBowlFood className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Fresh & healthy options'
  },
  { 
    name: 'Healthy Bowls', 
    icon: <BiBowlHot className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Wholesome & satisfying'
  },
  { 
    name: 'Paninis', 
    icon: <FaHamburger className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Grilled to perfection'
  },
  { 
    name: 'Breakfast Sandwiches', 
    icon: <FaBreadSlice className="w-8 h-8 mx-auto mb-3 text-primary" />,
    description: 'Morning favorites all day'
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Offerings
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer hover:bg-white/90"
            >
              <div className="flex flex-col items-center">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
