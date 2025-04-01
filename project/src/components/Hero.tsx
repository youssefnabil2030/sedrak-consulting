import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <img 
                  src="/sedrak-logo.jpg" 
                  alt="Sedrak Consulting Logo" 
                  className="h-20 mb-6"
                />
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Sadrak Consulting
                </h1>
                <h2 className="mt-4 text-2xl text-gray-500">
                  Professional Tax & Accounting Consultancy
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Leading the way in tax and accounting consultancy, providing comprehensive solutions for businesses since 2010.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Tax consulting workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}