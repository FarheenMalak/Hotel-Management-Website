import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Navbar({ setShowDashboard, setShowAdminPanel }) {
    const [toggle, setToggle] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <div className={`hidden fixed top-0 left-0 w-full z-50 md:flex justify-between p-4 items-center transition-all duration-300 ${scrolling ? 'bg-[#3A3A3A] shadow-md' : 'bg-transparent'}`}>
                <div className='text-3xl text-white'>Hotelook</div>
                <ul className='flex text-white justify-evenly gap-7 items-center'>
                    <li><Link to="/" className="cursor-pointer hover:border-b-2 hover:border-white">Home</Link></li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white" onClick={() => setShowDashboard(true)}>Dashboard</li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white" onClick={() => setShowAdminPanel(true)}>Admin Panel</li>
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className={`text-white fixed top-0 left-0 w-full z-50 flex justify-between p-4 md:hidden items-center gap-5 transition-all duration-300 ${scrolling ? 'bg-[#3A3A3A] shadow-md' : 'bg-transparent'}`}>
                <div onClick={() => setToggle(!toggle)} className='text-2xl cursor-pointer'>
                    {toggle ? <RxCross1 /> : <FaBars />}
                </div>
                <div className='text-3xl'>Hotelook</div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 bg-[#3A3A3A] text-white shadow-lg p-5 transform ${toggle ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-90`}>
                <ul className='flex flex-col gap-5 text-lg mt-20'>
                    <li className="cursor-pointer hover:border-b-4 hover:border-white" onClick={() => { setToggle(false); setShowDashboard(true); }}>Dashboard</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-white" onClick={() => { setToggle(false); setShowAdminPanel(true); }}>Admin Panel</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
