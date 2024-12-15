import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl font-bold text-blue-600">LuxStay</Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#rooms" className="hover:text-blue-600 transition-colors">Rooms</a>
          <a href="#amenities" className="hover:text-blue-600 transition-colors">Amenities</a>
          <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}