import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Room, BookingDetails } from '../types';

interface BookingFormProps {
  room: Room;
}

export default function BookingForm({ room }: BookingFormProps) {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    checkIn: new Date(),
    checkOut: new Date(),
    guests: 1,
    roomId: room.id
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    console.log('Booking submitted:', bookingDetails);
    navigate('/booking-confirmation');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Book {room.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
          <input
            type="date"
            min={format(new Date(), 'yyyy-MM-dd')}
            value={format(bookingDetails.checkIn, 'yyyy-MM-dd')}
            onChange={(e) => setBookingDetails({
              ...bookingDetails,
              checkIn: new Date(e.target.value)
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
          <input
            type="date"
            min={format(bookingDetails.checkIn, 'yyyy-MM-dd')}
            value={format(bookingDetails.checkOut, 'yyyy-MM-dd')}
            onChange={(e) => setBookingDetails({
              ...bookingDetails,
              checkOut: new Date(e.target.value)
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
          <select
            value={bookingDetails.guests}
            onChange={(e) => setBookingDetails({
              ...bookingDetails,
              guests: parseInt(e.target.value)
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[...Array(room.capacity)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} Guest{i !== 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}