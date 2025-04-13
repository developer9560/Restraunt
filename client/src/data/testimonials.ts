export interface Testimonial {
  id: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
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
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "The blend of flavors in every dish is spectacular. The chef clearly puts passion into the menu. Perfect place for a business dinner or date night.",
    rating: 5
  },
  {
    id: 5,
    name: "Jennifer Williams",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "From appetizers to dessert, every dish was a masterpiece. The wine pairing suggestions from the sommelier took our dining experience to another level.",
    rating: 4.5
  }
];
