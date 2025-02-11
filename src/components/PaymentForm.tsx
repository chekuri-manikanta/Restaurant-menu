import React from 'react';
import { PaymentInfo } from '../types';
import { Button } from './ui/Button';
import { toast } from 'react-hot-toast';

interface PaymentFormProps {
  total: number;
  onSuccess: (paymentInfo: PaymentInfo) => void;
  onCancel: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  total,
  onSuccess,
  onCancel,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onSuccess(formData);
      toast.success('Payment successful!');
    } catch (error) {
      toast.error('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              required
              pattern="[0-9]{16}"
              maxLength={16}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                required
                pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={formData.expiryDate}
                onChange={(e) =>
                  setFormData({ ...formData, expiryDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                required
                pattern="[0-9]{3,4}"
                maxLength={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={formData.cvv}
                onChange={(e) =>
                  setFormData({ ...formData, cvv: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-4">
          <span>Total Amount:</span>
          <span className="font-semibold">₹{total.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full" loading={loading}>
            Pay Now
          </Button>
        </div>
      </div>
    </form>
  );
};