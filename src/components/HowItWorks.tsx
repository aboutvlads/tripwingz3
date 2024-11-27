import React from 'react';
import { Bell, Plane, Smartphone } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Bell className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Subscribe</h3>
            <p className="mt-2 text-gray-600">Sign up for free flight deal notifications from your favorite cities</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Plane className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Get Notified</h3>
            <p className="mt-2 text-gray-600">We'll alert you when we find crazy cheap flights from your city</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Smartphone className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Book Directly</h3>
            <p className="mt-2 text-gray-600">Book directly with airlines - no middleman, no extra fees</p>
          </div>
        </div>
      </div>
    </section>
  );
}