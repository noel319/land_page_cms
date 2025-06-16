import React from 'react';
import { useContent } from '../hooks/useContent';
import { FiAward, FiCoffee, FiGift } from 'react-icons/fi';

const iconMap = {
  award: <FiAward />,
  coffee: <FiCoffee />,
  gift: <FiGift />,
};

const LoyaltyCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100">
    <div className="text-primary text-4xl mb-6 flex justify-center">
      {icon}
    </div>
    <h3 className="font-display text-2xl font-bold mb-4 tracking-wider">{title}</h3>
    <p className="text-gray-600 font-normal leading-relaxed tracking-wide">{description}</p>
  </div>
);

const LoyaltySection = () => {
  const { content, loading, error } = useContent('/content/loyalty.json');

  // Fallback data if CMS content fails to load
  const fallbackCards = [
    {
      id: "earn-points",
      title: "Earn Points",
      description: "1 point for every $1 spent. Points never expire and can be redeemed for free drinks and food.",
      icon: "award"
    },
    {
      id: "birthday-drink",
      title: "Free Birthday Drink",
      description: "Celebrate your special day with a drink on us! Plus, enjoy double points all month long.",
      icon: "coffee"
    },
    {
      id: "exclusive-rewards",
      title: "Exclusive Rewards",
      description: "Access to members-only events, early product releases, and special seasonal offers.",
      icon: "gift"
    }
  ];

  if (loading) {
    return (
      <div className="pt-8 pb-16 px-4 bg-gray-50 flex items-center justify-center min-h-[400px]">
        <div className="text-gray-600">Loading loyalty program...</div>
      </div>
    );
  }

  if (error) {
    console.warn('Loyalty loading error:', error);
  }

  // Use CMS content if available, otherwise use fallback
  const loyaltyCards = content?.cards || fallbackCards;

  return (
    <section className="pt-8 pb-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-wider">
            OUR LOYALTY PROGRAM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal tracking-wide">
            Join our rewards program and enjoy exclusive benefits with every purchase
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loyaltyCards.map((card) => (
            <LoyaltyCard 
              key={card.id || card.title}
              icon={iconMap[card.icon] || iconMap.award}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="px-8 py-3.5 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 tracking-wider uppercase"
            style={{ letterSpacing: '0.2em', fontWeight: 600 }}
          >
            Join Now - It's Free
          </button>
          <p className="mt-4 text-gray-500">
            Already a member? <a href="#login" className="text-primary hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;