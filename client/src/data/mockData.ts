import { MenuItem, Category } from '../types';

export const categories: Category[] = [
  { id: 'starters', name: 'Starters' },
  { id: 'main-courses', name: 'Main Courses' },
  { id: 'sides', name: 'Sides' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Crispy Calamari',
    description: 'Tender calamari rings, lightly battered and fried to perfection. Served with our signature dipping sauce.',
    price: 499,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    category: 'starters'
  },
  {
    id: '2',
    name: 'Bruschetta',
    description: 'Toasted baguette topped with fresh tomatoes, basil, garlic, and extra virgin olive oil.',
    price: 299,
    image: 'https://images.pexels.com/photos/2317685/pexels-photo-2317685.jpeg',
    category: 'starters'
  },
  {
    id: '3',
    name: 'Chicken Alfredo',
    description: 'Grilled chicken breast on a bed of fettuccine, tossed in our creamy Alfredo sauce.',
    price: 649,
    image: 'https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg',
    category: 'main-courses'
  },
  {
    id: '4',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon fillet, grilled and served with seasonal vegetables and lemon butter sauce.',
    price: 899,
    image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg',
    category: 'main-courses'
  },
  {
    id: '5',
    name: 'Vegetable Stir Fry',
    description: 'Fresh seasonal vegetables stir-fried in a savory sauce, served over steamed rice.',
    price: 449,
    image: 'https://images.pexels.com/photos/6758648/pexels-photo-6758648.jpeg',
    category: 'main-courses'
  },
  {
    id: '6',
    name: 'Garlic Mashed Potatoes',
    description: 'Creamy mashed potatoes with roasted garlic and herbs.',
    price: 249,
    image: 'https://images.pexels.com/photos/14358014/pexels-photo-14358014.jpeg',
    category: 'sides'
  },
  {
    id: '7',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
    price: 349,
    image: 'https://images.pexels.com/photos/13412089/pexels-photo-13412089.jpeg',
    category: 'desserts'
  },
  {
    id: '8',
    name: 'Classic Tiramisu',
    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
    price: 399,
    image: 'https://images.pexels.com/photos/6163271/pexels-photo-6163271.jpeg',
    category: 'desserts'
  },
  {
    id: '9',
    name: 'Fresh Lemonade',
    description: 'Freshly squeezed lemons with just the right amount of sweetness.',
    price: 149,
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg',
    category: 'beverages'
  },
  {
    id: '10',
    name: 'Iced Tea',
    description: 'Freshly brewed black tea, served over ice with lemon.',
    price: 129,
    image: 'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg',
    category: 'beverages'
  }
];