import Hero from "./(Hero)/page";
import Features from "./(Features)/page";
import Services from "./(Services)/page";
import Testimonials from "./Testimonial";
import Navbar from "./(Navbar)/page";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-cyan-900">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
