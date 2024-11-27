import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Plane, Check, AlertCircle, Luggage, Calendar } from 'lucide-react';
import { deals } from '../data/deals';
import { cityToCountry } from '../utils/countryFlags';

export function DealPage() {
  const { id } = useParams();
  const deal = deals.find(d => d.id === id);

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Deal not found</h2>
          <Link to="/" className="mt-4 text-indigo-600 hover:text-indigo-500 flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to deals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all deals
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img src={deal.imageUrl} alt={`${deal.to} destination`} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                deal.stops === 'direct' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-yellow-500 text-white'
              }`}>
                {deal.stops}
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {deal.from} {cityToCountry[deal.from]} to {deal.to} {cityToCountry[deal.to]}
                </h1>
                <div className="flex items-center mt-2 text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{deal.travelDates}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-indigo-600">€{deal.price}</p>
                <p className="text-gray-500">per person</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Plane className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="text-gray-900 font-medium">{deal.airline}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">{deal.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{deal.departureTime}</p>
                  <p className="text-gray-600">{deal.from} {cityToCountry[deal.from]}</p>
                </div>
                <div className="flex-1 mx-4 border-t-2 border-gray-300 border-dashed relative">
                  <Plane className="h-4 w-4 text-gray-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{deal.arrivalTime}</p>
                  <p className="text-gray-600">{deal.to} {cityToCountry[deal.to]}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this deal</h2>
              <p className="text-gray-600">{deal.description}</p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {deal.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Luggage className="h-5 w-5 text-gray-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Baggage Allowance</h3>
                </div>
                <p className="text-gray-600">{deal.baggage}</p>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Information</h3>
                    <p className="text-gray-600">
                      All information on this page is correct at the time of publication. Prices and availability may change.
                      To ensure you never miss our deals again, sign up for DEAL ALERTS:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• Download our App on <a href="#" className="text-indigo-600 hover:text-indigo-500">Google Play</a> or <a href="#" className="text-indigo-600 hover:text-indigo-500">App Store</a></li>
                      <li>• Opt for <a href="#" className="text-indigo-600 hover:text-indigo-500">email notifications</a></li>
                      <li>• Join our <a href="#" className="text-indigo-600 hover:text-indigo-500">Telegram alerts</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                Deal found by {deal.foundBy} • Valid until {new Date(deal.validUntil).toLocaleDateString()}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={deal.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white text-center py-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Book this flight for €{deal.price}
              </a>
              <p className="text-sm text-gray-500 text-center mt-2">
                You'll be redirected to {deal.airline}'s website to complete your booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}