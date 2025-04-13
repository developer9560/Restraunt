import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Adding meta tags for SEO and viewport
document.title = "Savor - Fine Dining Experience";
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Experience fine dining at Savor Restaurant. Delicious food, cozy atmosphere, and unforgettable taste.';
document.head.appendChild(meta);

// Adding font links
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap';
document.head.appendChild(fontLink);

// Adding fontawesome for icons
const faLink = document.createElement('link');
faLink.rel = 'stylesheet';
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';
document.head.appendChild(faLink);

createRoot(document.getElementById("root")!).render(<App />);
