import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Restaurant ambiance" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4 text-shadow">
            Savor Every Bite at SAVOR
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#F5F5DC]">
            Delicious food, cozy atmosphere, and unforgettable taste.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/menu" className="px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl">
              View Menu
            </Link>
            <Link href="/contact#reservation" className="px-6 py-3 bg-transparent border-2 border-[#F5F5DC] hover:bg-[#F5F5DC] hover:text-[#800020] font-medium rounded-md transition-colors shadow-lg hover:shadow-xl">
              Book a Table
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm mb-2">Scroll Down</p>
        <i className="fas fa-chevron-down animate-bounce"></i>
      </div>
    </section>
  );
};

export default Hero;
