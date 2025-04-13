interface Testimonial {
  id: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "The food here is absolutely exceptional. We celebrated our anniversary and couldn't have chosen a better place. The service was impeccable and the ambiance was perfect.",
    rating: 5
  },
  {
    id: 2,
    name: "David Brown",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "I've been to many restaurants, but Savor stands out for its attention to detail. The Truffle Risotto is to die for, and their wine pairing suggestions are always on point.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "We hosted a family celebration at Savor and everyone was impressed. The chef customized the menu for our dietary needs, and the staff made us feel like VIPs. Highly recommend for special occasions!",
    rating: 4.5
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">What Our Guests Say</h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#F5F5DC] p-6 rounded-lg shadow-md relative">
              <div className="text-[#D4AF37] text-4xl absolute top-6 right-6 opacity-20">
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="text-yellow-400 text-sm">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
