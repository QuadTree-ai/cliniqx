import React from 'react';
import privacyPolicyData from './privacyPolicy.json'; // Import JSON data

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-center mb-4">{privacyPolicyData.title}</h1>
      <p className="text-center text-sm mb-10">Last updated: {privacyPolicyData.lastUpdated}</p>
      {privacyPolicyData.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPage;
