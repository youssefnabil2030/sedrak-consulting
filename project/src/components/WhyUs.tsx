import React from 'react';
import { Clock, Award, Settings, Shield } from 'lucide-react';

const features = [
  {
    name: '13+ Years Experience',
    description: 'Over a decade of experience in providing tax and accounting consultancy.',
    icon: Clock,
  },
  {
    name: 'Professional Team',
    description: 'Highly qualified team handling all tax and accounting matters professionally.',
    icon: Award,
  },
  {
    name: 'Customized Solutions',
    description: "Flexible solutions tailored to meet each client's specific needs.",
    icon: Settings,
  },
  {
    name: 'Transparency & Privacy',
    description: 'Committed to providing accurate consultations ensuring financial security.',
    icon: Shield,
  },
];

export default function WhyUs() {
  return (
    <div id="why-us" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your trusted partner in achieving financial success and tax compliance
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}