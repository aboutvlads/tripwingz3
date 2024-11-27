export interface Deal {
  id: string;
  from: string;
  to: string;
  price: number;
  date: string;
  imageUrl: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  bookingUrl: string;
  description: string;
  highlights: string[];
  stops: 'direct' | '1 stop';
  foundBy: string;
  validUntil: string;
  baggage: string;
  travelDates: string;
}