import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Deal } from '../types/deal';
import { cityToCountry } from '../utils/countryFlags';
import { Badge } from './ui/Badge';

interface DealCardProps extends Deal {}

export function DealCard(props: DealCardProps) {
  return (
    <Link to={`/deal/${props.id}`} className="block group">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition duration-300 hover:shadow-lg hover:border-primary-100">
        <div className="relative h-48">
          <img 
            src={props.imageUrl} 
            alt={`${props.to} destination`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute top-4 left-4">
            <Badge variant={props.stops === 'direct' ? 'success' : 'warning'}>
              {props.stops}
            </Badge>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0 text-primary-500" />
              <span className="text-sm font-medium">
                {props.from} {cityToCountry[props.from]} → {props.to} {cityToCountry[props.to]}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1.5 text-primary-500" />
                <span>{props.date}</span>
              </div>
              <div className="text-2xl font-display font-bold text-primary-600">
                €{props.price}
              </div>
            </div>
            <div className="pt-2">
              <span className="text-primary-600 flex items-center text-sm font-medium group-hover:translate-x-0.5 transition-transform duration-300">
                View Deal <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}