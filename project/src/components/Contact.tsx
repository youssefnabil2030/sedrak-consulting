import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-2">تواصل معنا</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get in touch with our expert team
          </p>
          <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto" dir="rtl">
            تواصل مع فريقنا المتخصص
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Email / البريد الإلكتروني</h3>
              <p className="mt-2 text-base text-gray-500">info@sadrakconsulting.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Phone / الهاتف</h3>
              <p className="mt-2 text-base text-gray-500">+20 12 8179 6542</p>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-primary-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Address / العنوان</h3>
              <p className="mt-2 text-base text-gray-500">86 Roud El-Farag St., Shobra, Cairo, Egypt</p>
              <p className="mt-1 text-base text-gray-500" dir="rtl">٨٦ شارع روض الفرج، شبرا، القاهرة، مصر</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name / الاسم</label>
              <div className="mt-1">
                <input type="text" name="name" id="name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email / البريد الإلكتروني</label>
              <div className="mt-1">
                <input type="email" name="email" id="email" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / الرسالة</label>
              <div className="mt-1">
                <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Send Message / إرسال الرسالة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}