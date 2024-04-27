import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      plannedPlots: {},
      setPlannedPlots: (plots) => {
        return set({ plannedPlots: plots });
      },
      togglePlannedPlot: (plotKey) => {
        const plannedPlots = get().plannedPlots;
        const newPlannedPlots = {
          ...plannedPlots,
          [plotKey]: !plannedPlots[plotKey],
        };
        return set({ plannedPlots: newPlannedPlots });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
