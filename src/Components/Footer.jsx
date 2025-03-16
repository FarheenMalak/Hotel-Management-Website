import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <IoIosArrowUp size={20} />
        </button>
      )}

      <footer className="bg-gray-900 text-gray-300 mt-0">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-3 text-white">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer text-gray-400">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 px-10 py-6 text-xs flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <span>🌍 English (United States)</span>
            <input type="checkbox" className="toggle" />
            <span>Your Privacy Choices</span>
          </div>
          <div className="flex text-left gap-5 justify-items-start flex-col md:flex-row space-x-4">
            {["Privacy Policy", "Terms & Conditions", "Contact Us", "Career"].map((item, idx) => (
              <span key={idx} className="cursor-pointer hover:underline text-gray-400">
                {item}
              </span>
            ))}
          </div>
          <span>© 2025 Grand Luxury Hotel || Developed by Farheen Malak</span>
        </div>
      </footer>
    </>
  );
};

// Footer Data (Hotel Website)
const footerData = [
  {
    title: "Guest Services",
    links: ["Room Service", "Spa & Wellness", "Concierge", "Airport Transfers", "Laundry Service"],
  },
  {
    title: "Reservations",
    links: ["Book a Room", "Dining Reservations", "Event Planning", "Special Offers"],
  },
  {
    title: "Explore",
    links: ["Our Hotels", "Gallery", "Local Attractions", "Testimonials"],
  },
  {
    title: "Contact",
    links: ["Customer Support", "FAQs", "Get in Touch", "Find Us"],
  },
];

export default Footer;
