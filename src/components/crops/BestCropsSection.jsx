import { SimpleGrid } from '@chakra-ui/react';

import BestCropUI from './BestCropUI';
import SectionHeader from './SectionHeader';

export default function BestCropsSection() {
  return (
    <>
      <SectionHeader>Main</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCropUI label="Stamina" stat="stamina" />
        <BestCropUI label="HP" stat="hp" />
        <BestCropUI label="Tame" stat="tame" />
        <BestCropUI label="EXP" stat="exp" />
      </SimpleGrid>

      <SectionHeader>Team Stats</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCropUI label="Armor" stat="armor" />
        <BestCropUI label="Speed" stat="speed" />
        <BestCropUI label="Vitality" stat="vitality" />
        <BestCropUI label="Power" stat="power" />
      </SimpleGrid>

      <SectionHeader>Enemy Stats</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCropUI label="Armor" stat="armor" isPositive={false} />
        <BestCropUI label="Speed" stat="speed" isPositive={false} />
        <BestCropUI label="Vitality" stat="vitality" isPositive={false} />
        <BestCropUI label="Power" stat="power" isPositive={false} />
      </SimpleGrid>
    </>
  );
}
