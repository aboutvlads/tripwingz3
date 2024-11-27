import React from 'react';
import { Plane } from 'lucide-react';
import { Container } from './ui/Container';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-2xl font-display font-bold text-gray-900">Tripwingz</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#deals" className="text-gray-600 hover:text-primary-600 font-medium transition">Deals</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition">How it Works</a>
            <a href="#destinations" className="text-gray-600 hover:text-primary-600 font-medium transition">Destinations</a>
          </div>
        </nav>
      </Container>
    </header>
  );
}