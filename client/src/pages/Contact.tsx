import ContactForm from "@/components/ContactForm";
import ReservationForm from "@/components/ReservationForm";
import { useEffect } from "react";
import { useLocation } from "wouter";

const Contact = () => {
  const [location, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL has a hash and scroll to that section
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Contact Us</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for questions, feedback, or special requests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-[#F5F5DC] p-8 rounded-lg shadow-lg h-full">
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-playfair text-[#800020] mb-4">Get in Touch</h3>
                  <p className="text-gray-600 mb-4">
                    We're here to answer your questions and help you plan your dining experience.
                  </p>
                  
                  <div className="flex items-start mt-6">
                    <div className="mr-4 text-[#800020]">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">123 Gourmet Street, Culinary District, Food City, FC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-6">
                    <div className="mr-4 text-[#800020]">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-6">
                    <div className="mr-4 text-[#800020]">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@savorrestaurant.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-playfair text-[#800020] mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Thursday</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday - Saturday</span>
                      <span>11:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span>12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-playfair text-[#800020] mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#800020] hover:text-[#A3162D] transition-colors">
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" className="text-[#800020] hover:text-[#A3162D] transition-colors">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" className="text-[#800020] hover:text-[#A3162D] transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-[#800020] hover:text-[#A3162D] transition-colors">
                      <i className="fab fa-yelp text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map Section */}
      <section className="py-10 bg-[#F5F5DC]">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-96">
            {/* Google Maps would be embedded here in a real implementation */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-5xl text-[#800020] mb-4"></i>
                <p className="font-playfair text-xl mb-2">Find Us on the Map</p>
                <p>123 Gourmet Street, Culinary District, Food City, FC 12345</p>
                <p className="mt-4 text-sm text-gray-600">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#800020] hover:text-[#A3162D] transition-colors"
                  >
                    Open in Google Maps <i className="fas fa-external-link-alt text-xs"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reservation Section */}
      <section className="py-16 bg-[#800020] text-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3">Make a Reservation</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-[#F5F5DC] max-w-2xl mx-auto">
              Reserve your table to ensure availability and enjoy a seamless dining experience.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ReservationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
