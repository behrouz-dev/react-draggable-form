import React from 'react';
import useFormStore from '../hooks/useStore';
import InputBox from './FormElements/InputBox';
import CheckboxGroup from './FormElements/CheckboxGroup';
import SelectBox from './FormElements/SelectBox';
import RangeSlider from './FormElements/RangeSlider';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  ELEMENT: 'element',
};

const Canvas: React.FC = () => {
  const formElements = useFormStore((state) => state.formElements);
  const addElement = useFormStore((state) => state.addElement);
  const removeElement = useFormStore((state) => state.removeElement);
  const clearForm = useFormStore((state) => state.clearForm);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    drop: (item: { type: string }) => {
      addElement(item.type);
    },
  }));

  const generateJSON = () => {
    const json = JSON.stringify(formElements, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div ref={drop} className="canvas w-full lg:w-3/4 p-6">
      <div className="mb-5 flex justify-between items-center">
        <h2 className="text-lg font-semibold">📝 Form Builder</h2>
        <div>
          {formElements.length > 0 && (
            <>
              <button onClick={clearForm} className="mb-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2">
                ❌ Clear Form
              </button>
              <button onClick={generateJSON} className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                💾 Download JSON
              </button>
            </>
          )}
        </div>
      </div>

      <div className="border p-4 min-h-[400px] bg-gray-50 rounded-md shadow-md">
        {formElements.length === 0 && (
          <p className="text-gray-400">⚡ Add a form element...</p>
        )}
        {formElements.map((el) => {
          switch (el.type) {
            case 'inputBox':
              return (
                <InputBox key={el.id} id={el.id} label={el.label} onRemove={removeElement} />
              );
            case 'checkboxRadio':
              return (
                <CheckboxGroup key={el.id} id={el.id} label={el.label} onRemove={removeElement} />
              );
            case 'selectBox':
              return (
                <SelectBox key={el.id} id={el.id} label={el.label} onRemove={removeElement} />
              );
            case 'rangeSlider':
              return (
                <RangeSlider key={el.id} id={el.id} label={el.label} onRemove={removeElement} />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Canvas;