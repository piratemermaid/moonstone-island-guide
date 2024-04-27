import { SimpleGrid } from '@chakra-ui/react';

import BestCrop from './BestCrop';
import SectionHeader from './SectionHeader';

export default function BestCropsContent() {
  return (
    <>
      <SectionHeader>Main</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCrop label="Stamina" stat="stamina" />
        <BestCrop label="HP" stat="hp" />
        <BestCrop label="Tame" stat="tame" />
        <BestCrop label="EXP" stat="exp" />
      </SimpleGrid>

      <SectionHeader>Team Stats</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCrop label="Armor" stat="armor" />
        <BestCrop label="Speed" stat="speed" />
        <BestCrop label="Vitality" stat="vitality" />
        <BestCrop label="Power" stat="power" />
      </SimpleGrid>

      <SectionHeader>Enemy Stats</SectionHeader>
      <SimpleGrid columns={4} spacing={2} sx={{ width: '100%' }}>
        <BestCrop label="Armor" stat="armor" isPositive={false} />
        <BestCrop label="Speed" stat="speed" isPositive={false} />
        <BestCrop label="Vitality" stat="vitality" isPositive={false} />
        <BestCrop label="Power" stat="power" isPositive={false} />
      </SimpleGrid>
    </>
  );
}
