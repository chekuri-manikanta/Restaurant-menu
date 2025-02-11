import React from 'react';
import { Order } from '../types';
import { Button } from './ui/Button';
import { Download } from 'lucide-react';

interface OrderConfirmationProps {
  order: Order;
  onClose: () => void;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  order,
  onClose,
}) => {
  const handleDownload = () => {
    // Generate and download receipt (simplified for demo)
    const receipt = `
Order #${order.id}
Date: ${order.createdAt}
Status: ${order.status}
Estimated Delivery: ${order.estimatedDelivery}

Items:
${order.items
  .map(
    (item) =>
      `${item.product.name} x${item.quantity} - ₹${
        item.product.price * item.quantity
      }`
  )
  .join('\n')}

Total: ₹${order.total}
    `;

    const blob = new Blob([receipt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `order-${order.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Order Confirmed!</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase</p>
      </div>

      <div className="space-y-4">
        <div className="border-t border-b py-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium">{order.id}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Status:</span>
            <span className="font-medium capitalize">{order.status}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Estimated Delivery:</span>
            <span className="font-medium">{order.estimatedDelivery}</span>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleDownload}
            variant="outline"
            className="w-full"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Receipt
          </Button>
          <Button onClick={onClose} className="w-full">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};