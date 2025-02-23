import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  ELEMENT: 'element',
};

const DraggableElement: React.FC<{ type: string; children: React.ReactNode }> = ({ type, children }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { type },
  }));

  return (
    <div ref={drag} className="w-full p-2 bg-white border rounded shadow cursor-move">
      {children}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-200">
      <h2 className="text-lg font-semibold mb-4">Palette</h2>
      <div className="space-y-4">
        <DraggableElement type="inputBox">Input Box</DraggableElement>
        <DraggableElement type="checkboxRadio">Checkbox / Radio Buttons</DraggableElement>
        <DraggableElement type="selectBox">Select Box</DraggableElement>
        <DraggableElement type="rangeSlider">Range Slider</DraggableElement>
      </div>
    </div>
  );
};

export default Sidebar;