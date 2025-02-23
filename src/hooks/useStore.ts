import {create} from 'zustand';

interface FormElement {
    id: number;
    type: string;
    label: string;
}

interface FormStore {
    formElements: FormElement[];
    addElement: (type: string) => void;
    removeElement: (id: number) => void;
    clearForm: () => void;
}

const useFormStore = create<FormStore>((set) => ({
    formElements: [],
    addElement: (type: string) => set((state) => ({
        formElements: [
            ...state.formElements,
            { id: state.formElements.length, type, label: `${type} ${state.formElements.length + 1}` },
        ],
    })),
    removeElement: (id: number) => set((state) => ({
        formElements: state.formElements.filter((el) => el.id !== id),
    })),
    clearForm: () => set(() => ({ formElements: [] })),
}));

export default useFormStore;