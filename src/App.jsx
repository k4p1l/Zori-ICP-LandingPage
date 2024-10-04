import React, { useEffect } from "react";
import Navbar from "./Navbar";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import Footer from "./Footer";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Marketplace from "./Pages/Marketplace";
import Avatar from "./Pages/Avatar";
import Spaces from "./Pages/Spaces";
import AvatarCreatorComponent from "./Pages/AvatarCreation";
import AvatarDisplay from "./Pages/AvatarDisplay";
import GetStarted from "./Pages/GetStarted";

function LandingPage() {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing page with multiple sections */}
        <Route path="/" element={<LandingPage />} />

        {/* Other routes for individual pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/create_avatar" element={<AvatarCreatorComponent />} />
        <Route path="/avatar-display" element={<AvatarDisplay />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
