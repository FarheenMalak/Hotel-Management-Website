import { useState } from "react";
import { Dialog } from "@headlessui/react";

const rooms = [
  { id: 1, name: "Garden Haven", location: "California", price: 229, type: "Garden Cabins", amenities: ["WiFi", "AC"], img: "room1.jpg" },
  { id: 2, name: "Sunset Suite", location: "Florida", price: 319, type: "Suites", amenities: ["WiFi", "Pool"], img: "room2.jpg" },
  { id: 3, name: "Mountain Retreat", location: "Colorado", price: 289, type: "Resorts", amenities: ["WiFi", "Balcony"], img: "room3.jpg" },
  { id: 4, name: "Skyline Suite", location: "New York", price: 349, type: "Suites", amenities: ["WiFi", "AC", "Balcony"], img: "room4.avif" },
  { id: 5, name: "Orchid Room", location: "Texas", price: 199, type: "Garden Cabins", amenities: ["WiFi", "Pool"], img: "room5.webp" },
  { id: 6, name: "Willow Haven", location: "Oregon", price: 259, type: "Resorts", amenities: ["WiFi", "AC", "Balcony"], img: "room6.jpg" }
];

export default function HotelFiltering() {
  const [filters, setFilters] = useState({ price: "", type: "", amenities: [] });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        amenities: checked ? [...prev.amenities, value] : prev.amenities.filter((am) => am !== value),
      }));
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setSuccessMessage("Booking Successful! We will contact you soon.");
    setTimeout(() => {
      setIsBooking(false);
      setSuccessMessage("");
      setBookingDetails({ name: "", email: "" });
    }, 2000);
  };

  const filteredRooms = rooms.filter((room) => {
    return (
      (!filters.price || room.price <= filters.price) &&
      (!filters.type || room.type === filters.type) &&
      (filters.amenities.length === 0 || filters.amenities.every((am) => room.amenities.includes(am)))
    );
  });

  return (
    <div className="p-4 sm:p-6 h-auto bg-[#3A3A3A] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <input
            type="number"
            name="price"
            placeholder="Max Price"
            value={filters.price}
            onChange={handleFilterChange}
            className="mb-4 p-2 border rounded w-full bg-gray-700 text-white"
          />
          <select name="type" value={filters.type} onChange={handleFilterChange} className="mb-4 p-2 border rounded w-full bg-gray-700 text-white">
            <option value="">All Types</option>
            <option value="Garden Cabins">Garden Cabins</option>
            <option value="Suites">Suites</option>
            <option value="Resorts">Resorts</option>
          </select>
          <h3 className="font-semibold">Amenities</h3>
          <div className="flex flex-col space-y-2">
            {["WiFi", "AC", "Pool", "Balcony"].map((am) => (
              <label key={am} className="flex items-center space-x-2">
                <input type="checkbox" value={am} onChange={handleFilterChange} className="w-4 h-4" />
                <span>{am}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg">
          {filteredRooms.map((room) => (
            <div key={room.id} className="border rounded-lg shadow-md overflow-hidden bg-gray-900">
              <img src={room.img} alt={room.name} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-103" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-white">{room.name}</h3>
                <p className="text-gray-400">${room.price} / night</p>
              </div>
            <div className="p-3">
            <button onClick={() => setSelectedRoom(room)} className=" bg-transparent w-full rounded text-white border border-white transition-transform duration-300 hover:scale-102">Details</button>
            <button onClick={() => setIsBooking(true)} className="bg-white w-full rounded text-[#3A3A3A] border mt-2 border-white transition-transform duration-300 hover:scale-102">Book Now</button>
            </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <Dialog open={true} onClose={() => setSelectedRoom(null)} className="fixed z-80 inset-0 flex items-center justify-center backdrop-blur-md">
          <div className="bg-gray-800 p-6 rounded shadow-lg text-white max-w-md sm:max-w-2xl relative">
            <button onClick={() => setSelectedRoom(null)} className="absolute top-4 right-4 text-2xl">✖</button>
            <img src={selectedRoom.img} alt={selectedRoom.name} className="w-full h-60 object-cover rounded" />
            <h2 className="text-xl sm:text-3xl font-bold mt-4">{selectedRoom.name}</h2>
            <p className="text-lg">Location: {selectedRoom.location}</p>
            <p className="text-lg">Price: ${selectedRoom.price} per night</p>
            <p className="text-lg">Amenities: {selectedRoom.amenities.join(", ")}</p>
          </div>
        </Dialog>
      )}
      {isBooking && (
  <Dialog open={true} onClose={() => setIsBooking(false)} className="fixed z-80 inset-0 flex items-center justify-center backdrop-blur-md">
    <div className="bg-gray-800 p-6 rounded shadow-lg text-white max-w-md relative">
      <button onClick={() => setIsBooking(false)} className="absolute top-2 right-2 text-2xl">✖</button>
      <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
      <form onSubmit={handleBooking} className="space-y-4">
        <input type="text" placeholder="Your Name" value={bookingDetails.name} onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })} className="w-full p-2 border rounded bg-gray-700 text-white" required />
        <input type="email" placeholder="Your Email" value={bookingDetails.email} onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })} className="w-full p-2 border rounded bg-gray-700 text-white" required />
        <button type="submit" className="w-full bg-white text-[#3A3A3A] p-2 rounded">Confirm Booking</button>
      </form>
      {successMessage && <p className="text-green-400 mt-2">{successMessage}</p>}
    </div>
  </Dialog>
)}

    </div>
  );
}
