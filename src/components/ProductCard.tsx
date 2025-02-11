import React from 'react';
import { Product } from '../types';
import { Button } from './ui/Button';
import { useStore } from '../store/useStore';
import { toast } from 'react-hot-toast';
import { QuantitySelector } from './QuantitySelector';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      addToCart(product, quantity);
      toast.success('Added to cart!');
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-bold">₹{product.price}</span>
        <span className="text-sm text-gray-500">{product.stock} in stock</span>
      </div>
      <div className="space-y-4">
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          max={product.stock}
        />
        <Button
          onClick={handleAddToCart}
          loading={loading}
          disabled={product.stock === 0}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};