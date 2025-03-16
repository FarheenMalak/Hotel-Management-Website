import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import HotelFiltering from "./Components/HotelFiltering";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import ImageSlider from "./Components/HotelBookingSection"; 
import AdminPanel from "./Components/AdminPanel";
import Footer from "./Components/Footer";

function App() {
    const [showDashboard, setShowDashboard] = useState(false);
    const [showAdminPanel, setShowAdminPanel] = useState(false);

    return (
        <Router>
            <Navbar setShowDashboard={setShowDashboard} setShowAdminPanel={setShowAdminPanel} />
            
            {showDashboard && <UserDashboard setShowDashboard={setShowDashboard} />}
            {showAdminPanel && <AdminPanel setShowAdminPanel={setShowAdminPanel} />}
            
            {/* Landing Page Components */}
            <div className={(showDashboard || showAdminPanel) ? "blur-sm" : ""}>
                <HeroSection />
                <ImageSlider />
                <HotelFiltering />
            </div>
            <Footer />
        </Router>
    );
}

export default App;

