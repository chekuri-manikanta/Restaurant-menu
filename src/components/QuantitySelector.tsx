import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from './ui/Button';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  max: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  max,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (isNaN(newValue)) return;
    if (newValue < 1) return onChange(1);
    if (newValue > max) return onChange(max);
    onChange(newValue);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => value > 1 && onChange(value - 1)}
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </Button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min="1"
        max={max}
        className="w-16 text-center border rounded-md p-1"
        aria-label="Quantity"
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => value < max && onChange(value + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};