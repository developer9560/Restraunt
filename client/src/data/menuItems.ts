export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  tags: string[];
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Tomato Bruschetta",
    description: "Toasted artisan bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
    price: "$9.95",
    image: "https://images.unsplash.com/photo-1626078299034-9743ee50115f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "starters",
    tags: ["Vegetarian"]
  },
  {
    id: 2,
    name: "Crispy Calamari",
    description: "Lightly fried calamari rings served with lemon aioli and marinara sauce",
    price: "$14.95",
    image: "https://images.unsplash.com/photo-1611599539392-0198d33c4c1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "starters",
    tags: ["Popular"]
  },
  {
    id: 3,
    name: "Spinach Artichoke Dip",
    description: "Creamy blend of spinach, artichokes, and three cheeses, served with toasted crostini",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1594565750994-1e0c64435ab6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "starters",
    tags: ["Vegetarian"]
  },
  
  // Main Courses
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz prime beef tenderloin with red wine reduction, truffle mashed potatoes, and seasonal vegetables",
    price: "$38.95",
    image: "https://images.unsplash.com/photo-1611599539332-748192d9f79d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "mains",
    tags: ["Chef's Choice"]
  },
  {
    id: 5,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice cooked with mixed wild mushrooms, white wine, truffle oil, and aged parmesan",
    price: "$24.95",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "mains",
    tags: ["Vegetarian"]
  },
  {
    id: 6,
    name: "Herb Crusted Salmon",
    description: "Fresh Atlantic salmon with a herb crust, served with saffron risotto and grilled asparagus",
    price: "$29.95",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "mains",
    tags: ["Healthy"]
  },
  
  // Desserts
  {
    id: 7,
    name: "Classic Tiramisu",
    description: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder",
    price: "$10.95",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "desserts",
    tags: ["Popular"]
  },
  {
    id: 8,
    name: "Vanilla Crème Brûlée",
    description: "Rich vanilla custard topped with a layer of caramelized sugar, served with fresh berries",
    price: "$11.95",
    image: "https://images.unsplash.com/photo-1551404973-761c83cd8341?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "desserts",
    tags: ["Gluten-Free"]
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream and berry compote",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "desserts",
    tags: ["Chef's Choice"]
  },
  
  // Drinks
  {
    id: 10,
    name: "Premium Red Wine Selection",
    description: "Carefully selected wines from premium vineyards. Ask your server for our current selection.",
    price: "$12.95+",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "drinks",
    tags: ["By Glass/Bottle"]
  },
  {
    id: 11,
    name: "Signature Cocktails",
    description: "Handcrafted cocktails by our expert mixologists. Try our house specialty, the \"Golden Sunset\".",
    price: "$14.95",
    image: "https://images.unsplash.com/photo-1581927480458-449743da2aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "drinks",
    tags: ["House Special"]
  },
  {
    id: 12,
    name: "Craft Beer Selection",
    description: "Rotating selection of local craft beers. Ask your server about our seasonal offerings.",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "drinks",
    tags: ["Local"]
  }
];
