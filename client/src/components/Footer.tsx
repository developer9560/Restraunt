import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#5D001A] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold font-playfair mb-4">SAVOR</h3>
            <p className="text-[#F5F5DC] text-sm">
              A fine dining experience that combines modern flavors with traditional dishes. We aim to create unforgettable culinary memories.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-[#F5F5DC] hover:text-[#D4AF37] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#F5F5DC] hover:text-[#D4AF37] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#F5F5DC] hover:text-[#D4AF37] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#F5F5DC] hover:text-[#D4AF37] transition-colors">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#D4AF37] transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Gourmet Street, Culinary District, Food City, FC 12345</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>info@savorrestaurant.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-[#F5F5DC] text-sm mb-4">
              Subscribe to receive updates on special events, new menu items and exclusive offers.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-[#800020] border border-[#A3162D] rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
                <button 
                  type="submit" 
                  className="bg-[#D4AF37] hover:bg-[#F2D675] text-[#800020] px-4 py-2 rounded-r-md transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-[#A3162D] my-6"></div>
        
        {/* Copyright */}
        <div className="text-center text-[#F5F5DC] text-sm">
          <p>&copy; {new Date().getFullYear()} SAVOR Restaurant. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-[#D4AF37] transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
