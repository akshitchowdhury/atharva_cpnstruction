import React, { useState } from 'react';
import card1 from '../../assets/homeExtra7.jpg';
import card2 from '../../assets/homeExtra9.jpg';
import card3 from '../../assets/homeExtra10.jpg';
import card4 from '../../assets/homeExtra11.jpg';
import card5 from '../../assets/homeExtra5.jpg';
import card6 from '../../assets/homeExtra4.jpg';

const AboutStory = () => {
  const cards = [
    { image: card1, title: "Innovative Design", description: "Crafting unique spaces that reflect your personality" },
    { image: card2, title: "Quality Craftsmanship", description: "Attention to detail in every aspect of your home" },
    { image: card3, title: "Timeless Elegance", description: "Creating spaces that stand the test of time" },
    { image: card4, title: "Premium Materials", description: "Creating spaces that stand the test of time" },
    { image: card5, title: "Unique Creations", description: "Creating spaces that stand the test of time" },
    { image: card6, title: "Solid Foundation", description: "Creating spaces that stand the test of time" },
  ];

  const [toggleCards, setToggleCards] = useState(false);

  // Limit to the first 3 cards, and display the next 3 when toggleCards is true
  const displayedCards = toggleCards ? cards.slice(0,3) : cards.slice(0);

  return (
    <div className="p-12">
      <h1 className="text-4xl text-red-600 font-light mb-12 max-w-2xl">
        Every Home has a Story that is Told Through its Creativity
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {displayedCards.map((card, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-64 md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h2 className="text-white text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-white">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Toggle Show More / Show Less */}
      <div className='flex flex-row p-6'>
        <h1 className='md:w-[1000px]'></h1>
        <h1 className='text-red-600 flex justify-end cursor-pointer' onClick={() => setToggleCards(!toggleCards)}>
          {toggleCards ? <p>- Show More</p> : <p>- Show Less</p>}
        </h1>
      </div>
    </div>
  );
};

export default AboutStory;
