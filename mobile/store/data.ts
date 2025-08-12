import { create } from 'zustand';

export type Person = {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    level: string;
    objective: string;
}

type DataState = {
    user: Person;
    setPageOne: (data: Omit<Person, "gender" | "level" | "objective">) => void;
    setPageTwo: (data: Pick<Person, "gender" | "level" | "objective">) => void;
}

export const useDataStore = create<DataState>((set) => ({
    user: {
        name: "",
        weight: "",
        height: "",
        age: "",
        gender: "",
        level: "",
        objective: ""
    },
    setPageOne: (data) => set((state) => ({ user: {...state.user, ...data} })),
    setPageTwo: (data) => set((state) => ({ user: {...state.user, ...data} }))
}))