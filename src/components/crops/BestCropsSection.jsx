import { SimpleGrid } from '@chakra-ui/react';

import CROPS from '../../data/crops';
import BestCropUI from './BestCropUI';
import SectionHeader from './SectionHeader';

export default function BestCropsSection() {
  const getBestCrop = (stat, isPositive = true) => {
    let bestStat = 0;
    let bestCrop = null;

    for (let crop of CROPS) {
      const statToCompare = crop.stats[stat];

      if (statToCompare) {
        let isCropBest = false;

        if (isPositive) {
          if (statToCompare > bestStat) isCropBest = true;
        } else {
          if (statToCompare < bestStat) isCropBest = true;
        }

        if (isCropBest) {
          bestStat = statToCompare;
          bestCrop = crop;
        }
      }
    }

    return bestCrop;
  };

  return (
    <>
      <SectionHeader>Main</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCropUI label="Stamina" crop={getBestCrop('stamina')} />
        <BestCropUI label="HP" crop={getBestCrop('hp')} />
        <BestCropUI label="Tame" crop={getBestCrop('tame')} />
        <BestCropUI label="EXP" crop={getBestCrop('exp')} />
      </SimpleGrid>

      <SectionHeader>Team Stats</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCropUI label="Armor" crop={getBestCrop('armor')} />
        <BestCropUI label="Speed" crop={getBestCrop('speed')} />
        <BestCropUI label="Vitality" crop={getBestCrop('vitality')} />
        <BestCropUI label="Power" crop={getBestCrop('power')} />
      </SimpleGrid>

      <SectionHeader>Enemy Stats</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCropUI label="Armor" crop={getBestCrop('armor', false)} />
        <BestCropUI label="Speed" crop={getBestCrop('speed', false)} />
        <BestCropUI label="Vitality" crop={getBestCrop('vitality', false)} />
        <BestCropUI label="Power" crop={getBestCrop('power', false)} />
      </SimpleGrid>
    </>
  );
}
