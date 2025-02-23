import React, { useState } from 'react';
import useFormStore from '../../hooks/useStore';

interface CheckboxGroupProps {
  id: number;
  label: string;
  onRemove: (id: number) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ id, label, onRemove }) => {
  const [required, setRequired] = useState(false);
  const updateElement = useFormStore((state) => state.updateElement);

  const handleUpdate = () => {
    updateElement(id, { required });
  };

  return (
    <div className="p-2 mb-2 bg-white border rounded shadow">
      <label className="block mb-1">{label}</label>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Option 1</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Option 2</span>
        </label>
      </div>
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={required} onChange={(e) => setRequired(e.target.checked)} />
          <span className="ml-2">Required</span>
        </label>
      </div>
      <button
        onClick={() => { onRemove(id); handleUpdate(); }}
        className="mt-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CheckboxGroup;