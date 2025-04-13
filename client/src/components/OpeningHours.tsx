import { Link } from "wouter";

interface Schedule {
  days: string;
  hours: string;
}

const schedule: Schedule[] = [
  {
    days: "Monday - Thursday",
    hours: "11:00 AM - 10:00 PM"
  },
  {
    days: "Friday - Saturday",
    hours: "11:00 AM - 11:00 PM"
  },
  {
    days: "Sunday",
    hours: "12:00 PM - 9:00 PM"
  }
];

const OpeningHours = () => {
  return (
    <section className="py-16 bg-[#800020] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Opening Hours */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Opening Hours</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 mx-auto md:mx-0"></div>
            
            <div className="max-w-md mx-auto md:mx-0">
              <div className="bg-[#5D001A] p-6 rounded-lg">
                {schedule.map((item, index) => (
                  <div key={index} className={`py-3 ${index < schedule.length - 1 ? 'border-b border-[#800020]' : ''}`}>
                    <div className="flex justify-between">
                      <span>{item.days}</span>
                      <span>{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contact#reservation" className="inline-block px-6 py-3 bg-[#D4AF37] hover:bg-[#F2D675] text-[#800020] font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
                  Reserve a Table
                </Link>
              </div>
            </div>
          </div>
          
          {/* Location Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-96">
            {/* Google Maps would be embedded here in a real implementation */}
            <div className="w-full h-full bg-[#5D001A] flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-5xl mb-4"></i>
                <p className="font-playfair text-xl mb-2">Find Us</p>
                <p>123 Gourmet Street, Culinary District</p>
                <p>Food City, FC 12345</p>
                <p className="mt-4 text-sm text-[#F5F5DC]">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    View on Google Maps <i className="fas fa-external-link-alt text-xs"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
