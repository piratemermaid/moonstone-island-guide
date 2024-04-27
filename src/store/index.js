import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      plannedCrops: {},
      setPlannedCrops: (crops) => {
        return set({ plannedCrops: crops });
      },
      togglePlannedCrop: (crop) => {
        const plannedCrops = get().plannedCrops;
        const newPlannedCrops = {
          ...plannedCrops,
          [crop]: !plannedCrops[crop],
        };
        return set({ plannedCrops: newPlannedCrops });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
