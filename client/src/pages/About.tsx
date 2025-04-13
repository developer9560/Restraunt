import { Link } from "wouter";
import { useEffect } from "react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Our Story</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#800020] mb-4">Founded with Passion</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2020, SAVOR combines modern flavors with traditional dishes. Our restaurant was born from a deep passion for culinary excellence and the desire to create an exceptional dining experience.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to provide delicious, freshly made food and offer a warm, inviting atmosphere for everyone. We aim to be your go-to restaurant for every celebration and dining experience.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold font-playfair text-[#800020] mb-3">Meet Our Chef</h4>
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                      alt="Chef Raj" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold">Chef Raj Kumar</h5>
                    <p className="text-gray-600 text-sm">
                      Chef Raj has over 15 years of culinary experience and a passion for blending traditional and modern flavors.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-[#F5F5DC]" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Our Gallery</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Take a peek at our beautiful space and delicious creations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Restaurant interior" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Private dining" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Fine dish" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Chef preparing food" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Dessert" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1483648969698-5e7dcaa9c5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Table setting" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1548940740-204726a19e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Wine glasses" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Cocktail" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Our Mission & Values</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold font-playfair text-center mb-3">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To create memorable dining experiences through exceptional food, impeccable service, and a warm atmosphere that makes every guest feel special.
              </p>
            </div>
            
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-eye text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold font-playfair text-center mb-3">Our Vision</h3>
              <p className="text-gray-700 text-center">
                To be the premier dining destination that combines culinary innovation with traditional cooking techniques, setting the standard for fine dining in our community.
              </p>
            </div>
            
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold font-playfair text-center mb-3">Our Values</h3>
              <p className="text-gray-700 text-center">
                Quality, integrity, passion, innovation, and community. These core values guide our daily operations and long-term decisions.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
