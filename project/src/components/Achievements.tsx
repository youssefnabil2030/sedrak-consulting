import React from 'react';

export default function Achievements() {
  return (
    <div id="achievements" className="bg-primary-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Achievements</h2>
          <p className="mt-4 max-w-2xl text-xl text-primary-100 lg:mx-auto">
            Recognition and success stories that showcase our expertise
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="/finance-minister-award.jpg" 
                alt="Finance Minister Award Ceremony" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">Ministry of Finance Recognition</h3>
              <p className="mt-4 text-gray-600">
                Honored by the Egyptian Minister of Finance Ahmed Kajouk and Deputy Minister Sherif El-Kilany at the "Roadmap to Support the Egyptian Economy" conference.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="/world-urban-forum.jpg" 
                alt="World Urban Forum Presentation" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">UN World Urban Forum</h3>
              <p className="mt-4 text-gray-600">
                Participated in the World Urban Forum in collaboration with the United Nations, providing tax consultancy aimed at supporting sustainability in cities and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}