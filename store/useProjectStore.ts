"use client";
import { create } from "zustand";

interface ProjectsStore {
  activeWords: string[]; // now an array
  toggleWord: (word: string) => void;
  clearWords: () => void;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  activeWords: [],
  toggleWord: (word) =>
    set((state) => {
      if (state.activeWords.includes(word)) {
        // remove word if already selected
        return { activeWords: state.activeWords.filter((w) => w !== word) };
      }
      // add word
      return { activeWords: [...state.activeWords, word] };
    }),
  clearWords: () => set({ activeWords: [] }),
}));
