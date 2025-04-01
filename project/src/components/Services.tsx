import React from 'react';
import { Calculator, FileCheck, Users, Building2 } from 'lucide-react';

const services = [
  {
    title: 'Tax Consultancy',
    description: 'Comprehensive tax services including general taxes, VAT, payroll tax, and real estate tax.',
    icon: Calculator,
  },
  {
    title: 'Accounting Services',
    description: 'Professional accounting, auditing, and financial statement preparation.',
    icon: FileCheck,
  },
  {
    title: 'Business Setup',
    description: 'Company formation, feasibility studies, and intellectual property registration.',
    icon: Building2,
  },
  {
    title: 'Social Insurance',
    description: 'Social and health insurance services for your employees.',
    icon: Users,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive solutions for all your tax and accounting needs
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
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