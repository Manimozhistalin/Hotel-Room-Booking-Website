import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { ROOMS } from '../utils/constants';
import { useAuth } from '../context/AuthContext';

export default function BookingPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const { user } = useAuth();
  const room = ROOMS.find(r => r.id === roomId);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!room) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <BookingForm room={room} />
    </div>
  );
}