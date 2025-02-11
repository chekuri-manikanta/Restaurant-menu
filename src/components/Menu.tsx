import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Paneer Tikka',
    price: 220,
    description: 'Grilled cottage cheese with Indian spices',
    stock: 20,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Butter Chicken',
    price: 320,
    description: 'Tender chicken in rich tomato gravy',
    stock: 15,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Dal Makhani',
    price: 180,
    description: 'Creamy black lentils cooked overnight',
    stock: 25,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Gulab Jamun',
    price: 120,
    description: 'Sweet milk dumplings in rose syrup',
    stock: 30,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Vegetable Biryani',
    price: 250,
    description: 'Fragrant rice cooked with mixed vegetables and aromatic spices',
    stock: 20,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Masala Dosa',
    price: 160,
    description: 'Crispy rice crepe filled with spiced potato mixture',
    stock: 25,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Palak Paneer',
    price: 240,
    description: 'Cottage cheese cubes in creamy spinach gravy',
    stock: 18,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Samosa',
    price: 80,
    description: 'Crispy pastry filled with spiced potatoes and peas',
    stock: 40,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1601050690717-2bd6cb003c01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Malai Kofta',
    price: 260,
    description: 'Potato and paneer dumplings in rich cream sauce',
    stock: 15,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937422273-c0d1f8d61d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    name: 'Rasmalai',
    price: 140,
    description: 'Soft cottage cheese patties in sweetened milk',
    stock: 20,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    name: 'Tandoori Roti',
    price: 40,
    description: 'Whole wheat flatbread baked in clay oven',
    stock: 50,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Mango Lassi',
    price: 90,
    description: 'Sweet yogurt drink with mango pulp',
    stock: 30,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    name: 'Chicken Tikka',
    price: 280,
    description: 'Grilled marinated chicken pieces with Indian spices',
    stock: 25,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '14',
    name: 'Mushroom Masala',
    price: 220,
    description: 'Fresh mushrooms in spiced tomato gravy',
    stock: 20,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '15',
    name: 'Onion Bhaji',
    price: 100,
    description: 'Crispy onion fritters with Indian spices',
    stock: 35,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '16',
    name: 'Gajar Ka Halwa',
    price: 150,
    description: 'Traditional carrot pudding with nuts',
    stock: 20,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '17',
    name: 'Chana Masala',
    price: 180,
    description: 'Spiced chickpeas curry',
    stock: 25,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937422273-c0d1f8d61d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '18',
    name: 'Matar Paneer',
    price: 230,
    description: 'Cottage cheese and green peas in tomato gravy',
    stock: 20,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '19',
    name: 'Kulfi',
    price: 100,
    description: 'Traditional Indian ice cream with nuts',
    stock: 30,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '20',
    name: 'Veg Spring Roll',
    price: 120,
    description: 'Crispy rolls filled with mixed vegetables',
    stock: 35,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All', 'Starters', 'Main Course', 'Desserts'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Menu</h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;