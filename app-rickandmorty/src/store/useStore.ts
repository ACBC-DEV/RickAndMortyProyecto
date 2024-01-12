import { create } from "zustand";
import type { TCharacters, IInfo } from "../types/Tcharacters";

type Tstore = {
  Characters: TCharacters[];
  url: string;
  pagination: {
    prev: string;
    next: string;
    pages: number;
  };
  setUrl: (url: string) => void;
  getCharacters: (state: string) => Promise<void>;
  setPagination: (pagination: IInfo) => void;
};

const useStore = create<Tstore>((set) => ({
  Characters: [],
  url: "https://rickandmortyapi.com/api/character/?page=1",
  pagination: {
    prev: "",
    next: "",
    pages: 0,
  },
  setUrl: (url) => set({ url }),
  getCharacters: async (state: string) => {
    const rta = await (await fetch(state)).json();
    set((state) => ({
      ...state,
      Characters: rta.results,
      pagination: {
        prev: rta.info.prev,
        next: rta.info.next,
        pages: rta.info.pages,
      },
    }));
  },
  setPagination: (pagination) => set({ pagination }),
}));

export default useStore;
