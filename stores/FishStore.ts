import {create} from 'zustand';

type State = {
  fish: number;
};

type Action = {
  addFish: (amount: State['fish']) => void;
};

export const useFishStore = create<State & Action>(set => ({
  fish: 0,
  addFish: amount => set(state => ({fish: state.fish + amount})),
}));
