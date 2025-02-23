import React from 'react';

interface FormElementProps {
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onRemove?: () => void;
}

const FormElement: React.FC<FormElementProps> = ({ type, label, placeholder, options, onChange, onRemove }) => {
  return (
    <div className="form-element">
      <label>{label}</label>
      {type === 'input' && (
        <input type="text" placeholder={placeholder} onChange={onChange} />
      )}
      {type === 'checkbox' && (
        <input type="checkbox" onChange={onChange} />
      )}
      {type === 'select' && options && (
        <select onChange={onChange}>
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}
      {onRemove && (
        <button onClick={onRemove} className="remove-button">Remove</button>
      )}
    </div>
  );
};

export default FormElement;