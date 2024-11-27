import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary-500 to-primary-600 overflow-hidden">
      <Container>
        <div className="relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-display font-bold text-white sm:text-5xl md:text-6xl">
              Get crazy cheap flights
              <span className="block text-primary-100">for free</span>
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl">
              No fees! No added costs! Join thousands of Gen Z travelers discovering incredible flight deals from major EU cities.
            </p>
            <div className="mt-8">
              <a 
                href="#deals" 
                className="inline-flex items-center px-8 py-3.5 rounded-full text-primary-600 bg-white font-medium shadow-sm hover:bg-primary-50 transition duration-300"
              >
                View Deals <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 opacity-20">
          <div className="absolute inset-0 rotate-45 transform scale-150 bg-primary-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 opacity-20">
          <div className="absolute inset-0 rotate-45 transform scale-150 bg-primary-400 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}