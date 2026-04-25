import { Minus, Plus } from 'lucide-react';

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  compact?: boolean;
}

export function QuantityStepper({ value, onChange, max = 99, compact }: QuantityStepperProps) {
  const size = compact ? 'w-7 h-7' : 'w-9 h-9';
  const inputWidth = compact ? 'w-10' : 'w-12';
  const iconSize = compact ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className="inline-flex items-center border border-[rgba(26,20,16,0.15)]">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className={`${size} flex items-center justify-center hover:bg-[rgba(26,20,16,0.05)] transition-colors disabled:opacity-30`}
        disabled={value <= 1}
        aria-label="Decrease quantity"
      >
        <Minus className={`${iconSize} stroke-[1.5]`} />
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const v = parseInt(e.target.value) || 1;
          onChange(Math.min(max, Math.max(1, v)));
        }}
        className={`${inputWidth} text-center font-body text-sm bg-transparent outline-none`}
        min={1}
        max={max}
      />
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className={`${size} flex items-center justify-center hover:bg-[rgba(26,20,16,0.05)] transition-colors disabled:opacity-30`}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus className={`${iconSize} stroke-[1.5]`} />
      </button>
    </div>
  );
}
