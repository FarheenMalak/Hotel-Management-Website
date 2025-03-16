import React, { useState } from "react";

const AdminPanel = ({ setShowAdminPanel }) => {
  const [bookings, setBookings] = useState([
    { id: 1, hotel: "Luxury Suite", date: "2025-04-10" },
    { id: 2, hotel: "Eco Cabin", date: "2025-05-15" },
  ]);
  const [newBooking, setNewBooking] = useState({ hotel: "", date: "" });

  const addBooking = () => {
    if (newBooking.hotel && newBooking.date) {
      setBookings([...bookings, { id: Date.now(), ...newBooking }]);
      setNewBooking({ hotel: "", date: "" });
    }
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="max-w-3xl w-full mx-4 p-6 bg-gray-900 text-white rounded-lg shadow-md relative">
        
        {/* Close Button */}
        <button 
          onClick={() => setShowAdminPanel(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel</h2>

        {/* Add Booking Section */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Hotel Name"
            value={newBooking.hotel}
            onChange={(e) => setNewBooking({ ...newBooking, hotel: e.target.value })}
            className="border p-2 w-full bg-gray-800 text-white rounded mb-2"
          />
          <input
            type="date"
            value={newBooking.date}
            onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
            className="border p-2 w-full bg-gray-800 text-white rounded mb-2"
          />
          <button onClick={addBooking} className="bg-white text-gray-900 px-4 py-2 w-full rounded-md font-semibold">
            Add Booking
          </button>
        </div>

        {/* Bookings List */}
        {bookings.length > 0 ? (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li key={booking.id} className="p-4 bg-gray-800 rounded-md flex justify-between">
                <span>{booking.hotel}</span>
                <span className="text-gray-400">{booking.date}</span>
                <button 
                  onClick={() => deleteBooking(booking.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No bookings available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
