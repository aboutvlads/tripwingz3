import React from 'react';
import { DealCard } from './DealCard';
import { deals } from '../data/deals';
import { Container } from './ui/Container';

export function DealsSection() {
  return (
    <section className="py-16 gradient-bg">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-900">Latest Flight Deals 🔥</h2>
          <p className="text-primary-600 font-medium">Updated daily</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {deals.slice(0, 5).map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {deals.slice(5, 10).map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </Container>
    </section>
  );
}