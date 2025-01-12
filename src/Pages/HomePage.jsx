import React from "react";
import HeroSection from "../Components/Hero";
import ServiceSection from "../Components/Services";
import PortfolioGallery from "../Components/Portfolio";
import HowWeDeliverSection from "../Components/HowDeliver";
import AboutUs from "../Components/About";
import ContactUs from "../Components/ContactForm";
import Testimonial from "../Components/Testimonial";
import CoreServics from "../Components/CoreServics";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <CoreServics/>
      <ServiceSection />
      <PortfolioGallery />
      <HowWeDeliverSection />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </div>
  );
}

export default HomePage;
