export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Room {
  id: string;
  image: string;
  title: string;
  price: number;
  capacity: number;
  size: number;
}

export interface BookingDetails {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  roomId: string;
}