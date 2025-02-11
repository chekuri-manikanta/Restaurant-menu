import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import { useStore } from './store/useStore';
import { PaymentForm } from './components/PaymentForm';
import { OrderConfirmation } from './components/OrderConfirmation';
import { Order, PaymentInfo } from './types';

function App() {
  const [showPayment, setShowPayment] = React.useState(false);
  const [order, setOrder] = React.useState<Order | null>(null);
  const { cart, total, clearCart } = useStore();

  const handlePaymentSuccess = (paymentInfo: PaymentInfo) => {
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9),
      items: cart,
      total,
      status: 'confirmed',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      createdAt: new Date().toISOString(),
    };
    setOrder(newOrder);
    setShowPayment(false);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Navbar cartCount={cart.length} cartTotal={total} onCartClick={() => setShowPayment(true)} />
      <Hero />
      <Menu />
      <About />
      <Contact />

      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <PaymentForm
              total={total}
              onSuccess={handlePaymentSuccess}
              onCancel={() => setShowPayment(false)}
            />
          </div>
        </div>
      )}

      {order && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <OrderConfirmation
            order={order}
            onClose={() => setOrder(null)}
          />
        </div>
      )}
    </div>
  );
}

export default App;