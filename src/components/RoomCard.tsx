import React, { useState } from 'react';
import { Bed, Users, Wifi, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RoomCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  capacity: number;
  size: number;
  features: string[];
}

export default function RoomCard({ id, image, title, price, capacity, size, features }: RoomCardProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showDetails, setShowDetails] = useState(false);

  const handleBookNow = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/book/${id}`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          ${price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>Up to {capacity}</span>
            </div>
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{size}m²</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            {showDetails ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide details
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Show details
              </>
            )}
          </button>
          
          {showDetails && (
            <div className="mt-4 space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Wifi className="w-4 h-4 mr-1" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center">
            <Coffee className="w-4 h-4 mr-1" />
            <span>Breakfast</span>
          </div>
        </div>
        
        <button
          onClick={handleBookNow}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}