import { Link } from "wouter";
import { useEffect } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  cta: {
    text: string;
    link: string;
  };
}

const services: Service[] = [
  {
    id: 1,
    title: "Dine-In Experience",
    description: "Enjoy our elegant ambiance with comfortable seating, soft lighting, and occasional live music. Perfect for a romantic dinner or family gathering.",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "fas fa-utensils",
    cta: {
      text: "Reserve a Table",
      link: "/contact#reservation"
    }
  },
  {
    id: 2,
    title: "Takeaway & Online Orders",
    description: "Place your order by phone or online and enjoy our delicious meals in the comfort of your home. Quick pickup service available.",
    image: "https://images.unsplash.com/photo-1553395572-0ef353a662d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "fas fa-shopping-bag",
    cta: {
      text: "Order Now",
      link: "/menu"
    }
  },
  {
    id: 3,
    title: "Event Catering",
    description: "Let us cater your special events with customized menus for weddings, birthdays, corporate functions, and more.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "fas fa-glass-cheers",
    cta: {
      text: "Request a Quote",
      link: "/contact"
    }
  },
  {
    id: 4,
    title: "Private Dining",
    description: "Our elegant private dining rooms are perfect for intimate gatherings, business meetings, or special celebrations with personalized service.",
    image: "https://images.unsplash.com/photo-1602068549927-505aad363e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "fas fa-user-friends",
    cta: {
      text: "Book Private Room",
      link: "/contact"
    }
  },
  {
    id: 5,
    title: "Home Delivery",
    description: "Get your favorite dishes delivered right to your doorstep. We deliver within a 5-mile radius or through popular delivery apps.",
    image: "https://images.unsplash.com/photo-1629994562870-75d0cf1ef5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "fas fa-truck",
    cta: {
      text: "Order Delivery",
      link: "/menu"
    }
  },
  {
    id: 6,
    title: "Cooking Classes",
    description: "Learn culinary secrets from our expert chefs in monthly cooking classes. Perfect for food enthusiasts of all skill levels.",
    image: "https://images.unsplash.com/photo-1607877742574-2f95f8714591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "fas fa-chalkboard-teacher",
    cta: {
      text: "Inquire About Classes",
      link: "/contact"
    }
  }
];

const Services = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="py-16 bg-[#F5F5DC]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Our Services</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer a variety of dining experiences to make every occasion special.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center mb-4">
                    <i className={`${service.icon} text-xl text-[#800020]`}></i>
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link href={service.cta.link} className="inline-block text-[#800020] hover:text-[#5D001A] font-medium transition-colors">
                    {service.cta.text} <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Special Events</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Let us make your special occasions even more memorable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Special event setup" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#800020] mb-4">Celebrations & Corporate Events</h3>
              <p className="text-gray-700 mb-4">
                From intimate birthday dinners to large corporate events, our team will help you plan and execute the perfect occasion. We offer customized menus, special decorations, and dedicated staff to ensure your event is a success.
              </p>
              <p className="text-gray-700 mb-6">
                Our private dining rooms can accommodate groups of various sizes, and our event coordinator will work closely with you to understand your specific needs and preferences.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
                  <span>Customized menus tailored to your preferences</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
                  <span>Private dining spaces for groups of 10-50 people</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
                  <span>Full-service catering available at your location</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
                  <span>Special decorations and setups upon request</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
                  Inquire About Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-[#F5F5DC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold font-playfair text-[#800020] mb-2">Do you accommodate dietary restrictions?</h3>
                <p className="text-gray-700">
                  Yes, we are happy to accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergen-specific requests. Please inform us of any dietary restrictions when making your reservation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold font-playfair text-[#800020] mb-2">How far in advance should I book for a private event?</h3>
                <p className="text-gray-700">
                  We recommend booking at least 2-3 weeks in advance for private dining and 1-2 months for larger events, especially during peak season. However, we'll always try to accommodate last-minute requests when possible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold font-playfair text-[#800020] mb-2">What is your delivery radius?</h3>
                <p className="text-gray-700">
                  We deliver within a 5-mile radius of our restaurant. For locations beyond that, we partner with delivery services like Uber Eats, DoorDash, and Grubhub.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold font-playfair text-[#800020] mb-2">Are reservations required?</h3>
                <p className="text-gray-700">
                  While reservations are recommended, especially for dinner and weekends, we do accept walk-ins. To guarantee your table, we suggest making a reservation online or by phone.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700 mb-4">Have more questions? We're here to help!</p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
