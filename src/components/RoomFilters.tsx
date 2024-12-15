import React from 'react';

interface RoomFiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  capacity: number;
  setCapacity: (capacity: number) => void;
}

export default function RoomFilters({ priceRange, setPriceRange, capacity, setCapacity }: RoomFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter Rooms</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (${priceRange[0]} - ${priceRange[1]})
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Capacity
          </label>
          <select
            value={capacity}
            onChange={(e) => setCapacity(parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}