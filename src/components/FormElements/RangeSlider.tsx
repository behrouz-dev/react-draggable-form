import React, { useState, useEffect } from 'react';
import useFormStore from '../../hooks/useStore';

interface RangeSliderProps {
  id: number;
  label: string;
  onRemove: (id: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ id, label, onRemove }) => {
  const [required, setRequired] = useState(false);
  const [min, setMin] = useState<number | undefined>(undefined);
  const [max, setMax] = useState<number | undefined>(undefined);
  const [step, setStep] = useState<number | undefined>(undefined);
  const updateElement = useFormStore((state) => state.updateElement);

  useEffect(() => {
    updateElement(id, { required, min, max, step });
  }, [required, min, max, step]);

  return (
    <div className="p-2 mb-2 bg-white border rounded shadow">
      <label className="block mb-1">{label}</label>
      <input type="range" className="w-full" required={required} min={min} max={max} step={step} />
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={required} onChange={(e) => setRequired(e.target.checked)} />
          <span className="ml-2">Required</span>
        </label>
      </div>
      <div className="mt-2">
        <label className="block">Min:</label>
        <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <div className="mt-2">
        <label className="block">Max:</label>
        <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <div className="mt-2">
        <label className="block">Step:</label>
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <button
        onClick={() => onRemove(id)}
        className="mt-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default RangeSlider;