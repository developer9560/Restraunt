import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import USP from "@/components/USP";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";
import { useEffect } from "react";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <FeaturedDishes />
      <USP />
      <Testimonials />
      <OpeningHours />
    </div>
  );
};

export default Home;
