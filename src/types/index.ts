export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped';
  estimatedDelivery: string;
  createdAt: string;
}