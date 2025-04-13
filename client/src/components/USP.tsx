interface USPItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const uspItems: USPItem[] = [
  {
    id: 1,
    title: "Fresh Ingredients",
    description: "We source only the freshest, locally grown ingredients for our dishes.",
    icon: "fas fa-leaf"
  },
  {
    id: 2,
    title: "Expert Chefs",
    description: "Our internationally trained chefs create culinary masterpieces daily.",
    icon: "fas fa-utensils"
  },
  {
    id: 3,
    title: "Hygiene Guaranteed",
    description: "We maintain the highest standards of cleanliness in our kitchen and dining areas.",
    icon: "fas fa-hands-wash"
  },
  {
    id: 4,
    title: "Friendly Staff",
    description: "Our attentive staff ensures you have a memorable dining experience.",
    icon: "fas fa-smile"
  }
];

const USP = () => {
  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Why Choose Us</h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {uspItems.map((item) => (
            <div key={item.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#F5F5DC] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-2xl text-[#800020]`}></i>
              </div>
              <h3 className="text-xl font-semibold font-playfair mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
