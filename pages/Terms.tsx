import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Welcome to Vitality Health. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Medical Disclaimer</h2>
        <p className="mb-4">
          The contents of the Vitality Health Platform, such as text, graphics, images, and other material contained on the Platform ("Content") are for informational purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p>
          [... Additional standard legal text placeholder ...]
        </p>
      </div>
    </div>
  );
};

export default Terms;