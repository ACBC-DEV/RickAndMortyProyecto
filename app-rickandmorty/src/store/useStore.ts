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
  page: number;
  setUrl: (url: string) => void;
  getCharacters: (state: string) => Promise<void>;
  setPagination: (pagination: IInfo) => void;
  getCharactersByPage: (page: number) => Promise<void>;
  setPage: (page: number) => void;
};

const useStore = create<Tstore>((set) => ({
  Characters: [],
  url: "https://rickandmortyapi.com/api/character/?page=1",
  page: 1,
  pagination: {
    prev: "",
    next: "",
    pages: 0,
  },
  setPage: (page: number) => set({ page }),
  getCharactersByPage: async (page = 1) => {
    const rta = await (
      await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    ).json();
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
