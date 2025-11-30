import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose text-gray-600">
         <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Your privacy is important to us. It is Vitality Health's policy to respect your privacy regarding any information we may collect from you across our website.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">HIPAA Compliance</h2>
        <p className="mb-4">
          We are committed to protecting the privacy of your health information. We implement technical and administrative safeguards to ensure compliance with HIPAA regulations.
        </p>
        <p>
          [... Additional standard legal text placeholder ...]
        </p>
      </div>
    </div>
  );
};

export default Privacy;