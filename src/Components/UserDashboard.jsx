import { useState } from "react";

const bookingsData = [
  { id: 1, hotel: "Garden Haven", date: "2025-03-15", status: "Current" },
  { id: 2, hotel: "Skyline Suite", date: "2025-02-25", status: "Past" },
  { id: 3, hotel: "Mountain Retreat", date: "2025-04-01", status: "Current" },
  { id: 4, hotel: "Sunset Suite", date: "2025-01-10", status: "Past" }
];

export default function UserDashboard({ setShowDashboard }) {
  const [activeTab, setActiveTab] = useState("Current");

  const filteredBookings = bookingsData.filter((booking) => booking.status === activeTab);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="max-w-3xl w-full mx-4 p-6 bg-gray-900 text-white rounded-lg shadow-md relative">
        
        {/* Close Button */}
        <button 
          onClick={() => setShowDashboard(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✖
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">Your Bookings</h1>

        {/* Tabs */}
        <div className="flex space-x-4 justify-center mb-4">
          {["Current", "Past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab ? "bg-white text-gray-900" : "bg-gray-700 text-white"
              }`}
            >
              {tab} Bookings
            </button>
          ))}
        </div>

        {/* Bookings List */}
        {filteredBookings.length > 0 ? (
          <ul className="space-y-4">
            {filteredBookings.map((booking) => (
              <li key={booking.id} className="p-4 bg-gray-800 rounded-md flex justify-between">
                <span>{booking.hotel}</span>
                <span className="text-gray-400">{booking.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No {activeTab.toLowerCase()} bookings found.</p>
        )}
      </div>
    </div>
  );
}

