import { create } from 'zustand';

interface FormElement {
    id: number;
    type: string;
    label: string;
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
}

interface FormStore {
    formElements: FormElement[];
    addElement: (type: string) => void;
    updateElement: (id: number, updates: Partial<FormElement>) => void;
    removeElement: (id: number) => void;
    clearForm: () => void;
}

const useFormStore = create<FormStore>((set) => ({
    formElements: [],
    addElement: (type: string) => set((state) => ({
        formElements: [
            ...state.formElements,
            { id: state.formElements.length, type, label: `${type} ${state.formElements.length + 1}`, required: false, min: undefined, max: undefined, step: undefined },
        ],
    })),
    updateElement: (id: number, updates: Partial<FormElement>) => set((state) => ({
        formElements: state.formElements.map((el) =>
            el.id === id ? { ...el, ...updates } : el
        ),
    })),
    removeElement: (id: number) => set((state) => ({
        formElements: state.formElements.filter((el) => el.id !== id),
    })),
    clearForm: () => set(() => ({ formElements: [] })),
}));

export default useFormStore;