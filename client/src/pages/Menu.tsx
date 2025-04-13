import { useState, useEffect } from "react";
import { Link } from "wouter";
import { menuItems } from "@/data/menuItems";

type Category = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Our Menu</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of dishes prepared with the finest ingredients.
            </p>
          </div>
          
          {/* Menu Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button 
              className={`px-4 py-2 ${activeCategory === 'all' ? 'bg-[#800020] text-white' : 'bg-[#F5F5DC] text-[#800020] hover:bg-[#800020] hover:text-white'} rounded-md transition-colors`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 ${activeCategory === 'starters' ? 'bg-[#800020] text-white' : 'bg-[#F5F5DC] text-[#800020] hover:bg-[#800020] hover:text-white'} rounded-md transition-colors`}
              onClick={() => setActiveCategory('starters')}
            >
              Starters
            </button>
            <button 
              className={`px-4 py-2 ${activeCategory === 'mains' ? 'bg-[#800020] text-white' : 'bg-[#F5F5DC] text-[#800020] hover:bg-[#800020] hover:text-white'} rounded-md transition-colors`}
              onClick={() => setActiveCategory('mains')}
            >
              Main Courses
            </button>
            <button 
              className={`px-4 py-2 ${activeCategory === 'desserts' ? 'bg-[#800020] text-white' : 'bg-[#F5F5DC] text-[#800020] hover:bg-[#800020] hover:text-white'} rounded-md transition-colors`}
              onClick={() => setActiveCategory('desserts')}
            >
              Desserts
            </button>
            <button 
              className={`px-4 py-2 ${activeCategory === 'drinks' ? 'bg-[#800020] text-white' : 'bg-[#F5F5DC] text-[#800020] hover:bg-[#800020] hover:text-white'} rounded-md transition-colors`}
              onClick={() => setActiveCategory('drinks')}
            >
              Drinks
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex bg-[#F5F5DC] rounded-lg overflow-hidden shadow-md">
                <div className="w-1/3 h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold font-playfair">{item.name}</h3>
                    <span className="text-[#800020] font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block bg-[#A3162D] text-white text-xs px-2 py-1 rounded mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm bg-[#B8860B] hover:bg-[#D4AF37] text-white px-3 py-1 rounded transition-colors">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View Full Menu PDF Button */}
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                alert("Menu PDF would be downloaded in a real implementation");
              }}
            >
              <i className="fas fa-file-pdf mr-2"></i> Download Full Menu
            </a>
          </div>
        </div>
      </section>
      
      {/* Special Promotions Section */}
      <section className="py-16 bg-[#F5F5DC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Special Promotions</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Promo 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#D4AF37]">
              <div className="bg-[#800020] text-white py-2 text-center font-bold">
                WEEKDAY SPECIAL
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-playfair mb-3 text-center">Early Bird Dinner</h3>
                <p className="text-gray-600 text-center mb-4">
                  Enjoy 20% off your entire bill when you dine between 5:00 PM and 6:30 PM, Monday through Thursday.
                </p>
                <div className="w-full h-px bg-gray-200 my-4"></div>
                <div className="text-center">
                  <span className="text-[#800020] font-bold">Valid ID required</span>
                </div>
              </div>
            </div>
            
            {/* Promo 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#D4AF37]">
              <div className="bg-[#800020] text-white py-2 text-center font-bold">
                WEEKEND BRUNCH
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-playfair mb-3 text-center">Saturday & Sunday</h3>
                <p className="text-gray-600 text-center mb-4">
                  Join us for our popular weekend brunch, featuring a special menu and complimentary mimosa with any brunch entrée.
                </p>
                <div className="w-full h-px bg-gray-200 my-4"></div>
                <div className="text-center">
                  <span className="text-[#800020] font-bold">10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Promo 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#D4AF37]">
              <div className="bg-[#800020] text-white py-2 text-center font-bold">
                HAPPY HOUR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-playfair mb-3 text-center">Daily Drink Specials</h3>
                <p className="text-gray-600 text-center mb-4">
                  Enjoy half-price appetizers and $2 off all drinks at our bar area every day from 4:00 PM to 6:00 PM.
                </p>
                <div className="w-full h-px bg-gray-200 my-4"></div>
                <div className="text-center">
                  <span className="text-[#800020] font-bold">Bar Seating Only</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4">Ready to experience our delicious menu?</p>
            <Link href="/contact#reservation" className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Chef's Recommendation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Chef's Recommendation</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chef's special dish" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#800020] text-lg font-bold py-2 px-4 rounded-full transform rotate-12">
                Chef's Choice
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#800020] mb-4">Seasonal Tasting Menu</h3>
              <p className="text-gray-700 mb-4">
                Experience our exclusive six-course tasting menu, featuring the finest seasonal ingredients and innovative culinary techniques. Each dish is carefully crafted to showcase the best flavors of the season.
              </p>
              <p className="text-gray-700 mb-6">
                The menu changes monthly, ensuring a unique dining experience with each visit. Wine pairings selected by our sommelier are available to complement each course.
              </p>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <i className="fas fa-utensils text-[#D4AF37] mr-3"></i>
                  <span className="font-semibold">Six exquisite courses</span>
                </div>
                <div className="flex items-center mb-2">
                  <i className="fas fa-wine-glass-alt text-[#D4AF37] mr-3"></i>
                  <span className="font-semibold">Optional wine pairings</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt text-[#D4AF37] mr-3"></i>
                  <span className="font-semibold">Changes monthly with seasonal ingredients</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-[#800020] text-2xl font-bold mr-4">$95 per person</span>
                <Link href="/contact#reservation" className="inline-block px-5 py-2 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
                  Reserve Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
