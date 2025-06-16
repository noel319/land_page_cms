import React from 'react';
import { useContent } from '../hooks/useContent';
import { FaCoffee, FaGlassWhiskey, FaAppleAlt, FaLeaf, FaAppleAlt as FaBowlFood, FaHamburger, FaBreadSlice } from 'react-icons/fa';
import { BiBowlHot } from 'react-icons/bi';

const iconMap = {
  coffee: <FaCoffee className="w-8 h-8 mx-auto mb-3 text-primary" />,
  juice: <FaGlassWhiskey className="w-8 h-8 mx-auto mb-3 text-primary" />,
  smoothie: <FaAppleAlt className="w-8 h-8 mx-auto mb-3 text-primary" />,
  acai: <FaLeaf className="w-8 h-8 mx-auto mb-3 text-primary" />,
  salad: <FaBowlFood className="w-8 h-8 mx-auto mb-3 text-primary" />,
  bowl: <BiBowlHot className="w-8 h-8 mx-auto mb-3 text-primary" />,
  panini: <FaHamburger className="w-8 h-8 mx-auto mb-3 text-primary" />,
  sandwich: <FaBreadSlice className="w-8 h-8 mx-auto mb-3 text-primary" />,
};

export default function Menu() {
  const { content, loading, error } = useContent('/content/menu.json');

  // Fallback data if CMS content fails to load
  const fallbackCategories = [
    { id: 'coffee', name: 'Coffee', icon: 'coffee', description: 'Freshly brewed & specialty drinks', order: 1 },
    { id: 'juice', name: 'Cold Press Juice', icon: 'juice', description: 'Fresh, cold-pressed juices', order: 2 },
    { id: 'smoothie', name: 'Smoothie', icon: 'smoothie', description: 'Creamy & refreshing blends', order: 3 },
    { id: 'acai', name: 'Acai', icon: 'acai', description: 'Nutrient-rich bowls', order: 4 },
    { id: 'salads', name: 'Salads', icon: 'salad', description: 'Fresh & healthy options', order: 5 },
    { id: 'bowls', name: 'Healthy Bowls', icon: 'bowl', description: 'Wholesome & satisfying', order: 6 },
    { id: 'paninis', name: 'Paninis', icon: 'panini', description: 'Grilled to perfection', order: 7 },
    { id: 'sandwiches', name: 'Breakfast Sandwiches', icon: 'sandwich', description: 'Morning favorites all day', order: 8 },
  ];

  if (loading) {
    return (
      <div className="py-16 bg-gray-50 flex items-center justify-center min-h-[400px]">
        <div className="text-gray-600">Loading menu...</div>
      </div>
    );
  }

  if (error) {
    console.warn('Menu loading error:', error);
  }

  // Use CMS content if available, otherwise use fallback
  const categories = content?.categories || fallbackCategories;
  
  // Sort by order field
  const sortedCategories = [...categories].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Offerings
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sortedCategories.map((category) => (
            <div 
              key={category.id || category.name} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer hover:bg-white/90"
            >
              <div className="flex flex-col items-center">
                {iconMap[category.icon] || iconMap.coffee}
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