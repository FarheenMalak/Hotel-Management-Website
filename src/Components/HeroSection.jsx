import React from "react";
import { Star, Wifi, Utensils, Bed, Home, MapPin, Heart } from "lucide-react";

const HeroSection = () => {
  const hotels = [
    { name: "Sakura Haven Kyoto", price: "$180", image: "hotel1.jpg", rating: 4.75 },
    { name: "Blue Lagoon Resort", price: "$66", image: "hotel2.jpg", rating: 4.5 },
    { name: "Mountain View Lodge", price: "$205", image: "hotel3.jpg", rating: 4.8 },
    { name: "Tropical Paradise Villa", price: "$120", image: "hotel4.jpg", rating: 4.6 }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-300 to-white flex flex-col items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: "url('hero.jpg')" }}></div>

      {/* Hero Content */}
      <div className="relative min-h-[70vh] flex flex-col justify-center items-center z-10 text-center px-6 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg transition-all duration-300 hover:scale-105">
          Start Your Journey to Your Dream Destination Here.
        </h1>
        <p className="text-white text-base sm:text-lg mt-4 transition-opacity duration-300 hover:opacity-90">
          Discover stunning locations, plan with ease, and experience your perfect getaway.
        </p>
        
        {/* Buttons */}
        <div className="bg-[#3A3A3A] p-1 md:py-2 md:px-4 rounded-full mt-6 flex flex-nowrap gap-4 justify-center">
          <button className="bg-gray-600 rounded-full text-white px-6 py-2 font-semibold shadow-lg hover:bg-[#1E1E1E] transition duration-300 transform hover:scale-105">
            Register
          </button>
          <button className="bg-[#3A3A3A] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#2A2A2A] transition duration-300 transform hover:scale-105">
            Login
          </button>
          <button className="bg-[#3A3A3A] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#4A4A4A] transition duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>

      {/* Hotel Cards Section */}
      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="relative bg-[#2E2E2E] border border-gray-600 rounded-xl shadow-lg w-full max-w-xs text-white overflow-hidden transition-transform duration-300 hover:scale-105">
            
            <div className="h-52 w-full rounded-t-xl overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full p-3 object-cover brightness-90" />
            </div>

            {/* Rating */}
            <div className="absolute top-3 left-3 bg-black bg-opacity-60 px-2 py-1 rounded-lg flex items-center gap-1">
              <Star size={14} className="text-yellow-400" />
              <span className="text-sm font-semibold">{hotel.rating}</span>
            </div>

            {/* Favorite Icon */}
            <div className="absolute top-3 right-3 bg-black bg-opacity-60 p-2 rounded-full cursor-pointer hover:bg-opacity-80 transition duration-300">
              <Heart className="w-5 h-5 text-white opacity-80 hover:opacity-100 transition duration-300" />
            </div>

            {/* Hotel Details */}
            <div className="relative pt-6 px-4 pb-4 bg-gradient-to-t from-black via-transparent">
              <h2 className="font-semibold text-lg transition-colors duration-300 hover:text-yellow-400">{hotel.name}</h2>
              <p className="text-gray-300 text-sm mt-1">A wonderful place to stay.</p>

              {/* Amenities */}
              <div className="flex items-center gap-3 text-sm text-gray-400 mt-2 flex-wrap">
                {[
                  { icon: <Wifi className="w-4 h-4" />, label: "Free Wi-Fi" },
                  { icon: <Utensils className="w-4 h-4" />, label: "Kitchen" },
                  { icon: <Bed className="w-4 h-4" />, label: "4 Beds" },
                  { icon: <Home className="w-4 h-4" />, label: "House" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Central" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md transition-all duration-300 hover:bg-gray-700">
                    {item.icon} {item.label}
                  </div>
                ))}
              </div>

              {/* Price & Actions */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">{hotel.price}<span className="text-gray-400 text-sm">/night</span></span>
                <button className="bg-[#5C5C5C] text-white px-3 py-1 rounded-md text-sm hover:bg-[#4A4A4A] border border-gray-600 transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Extra Padding for Mobile View */}
      <div className="h-16"></div>
    </div>
  );
};

export default HeroSection;