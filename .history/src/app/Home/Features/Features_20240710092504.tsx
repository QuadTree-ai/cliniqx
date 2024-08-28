import React from 'react';
import CliniQXCard from './cliniqxcard';

const Features = () => {
  return (
    <section id="features" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Introducing</h2>
        <p className="text-lg text-gray-600 mb-8">
          This card will help people to tap and share the data with doctors and pay from healthcare insurance.
        </p>
        <CliniQXCard />
      </div>
    </section>
  );
};

export default Features;
