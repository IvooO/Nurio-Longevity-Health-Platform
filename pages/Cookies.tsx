import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
      <div className="prose text-gray-600">
         <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          This is the Cookie Policy for Vitality Health, accessible from our main website.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">What Are Cookies</h2>
        <p className="mb-4">
          As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
        </p>
        <p>
          [... Additional standard legal text placeholder ...]
        </p>
      </div>
    </div>
  );
};

export default Cookies;