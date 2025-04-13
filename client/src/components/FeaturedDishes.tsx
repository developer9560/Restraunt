import { Link } from "wouter";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with wild mushrooms and truffle oil",
    price: "$22.95",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Herb Crusted Salmon",
    description: "Wild-caught salmon with lemon butter sauce and seasonal vegetables",
    price: "$28.95",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Beef Wellington",
    description: "Tender fillet of beef wrapped in puff pastry with mushroom duxelles",
    price: "$36.95",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center and vanilla ice cream",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#800020] mb-3">Featured Dishes</h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience our chef's special creations, prepared with love and the finest ingredients.
          </p>
        </div>
        
        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="bg-[#F5F5DC] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold font-playfair">{dish.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{dish.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[#800020] font-bold">{dish.price}</span>
                  <button className="text-sm bg-[#B8860B] hover:bg-[#D4AF37] text-white px-3 py-1 rounded transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/menu" className="inline-block px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
