import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import RoomFilters from '../components/RoomFilters';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import { ROOMS, AMENITIES } from '../utils/constants';

export default function HomePage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [capacity, setCapacity] = useState(1);

  const filteredRooms = useMemo(() => {
    return ROOMS.filter(room => 
      room.price >= priceRange[0] &&
      room.price <= priceRange[1] &&
      room.capacity >= capacity
    );
  }, [priceRange, capacity]);

  return (
    <>
      <Hero />
      
      <section id="rooms" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
          
          <RoomFilters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            capacity={capacity}
            setCapacity={setCapacity}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hotel Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <Contact />
    </>
  );
}