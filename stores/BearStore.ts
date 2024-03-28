import {create} from 'zustand';

type State = {
  bears: number;
};

type Action = {
  increatePopulation: (amount: State['bears']) => void;
};

export const useBearStore = create<State & Action>(set => ({
  bears: 0,
  increatePopulation: amount => set(state => ({bears: state.bears + amount})),
}));
