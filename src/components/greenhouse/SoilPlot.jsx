import { GridItem } from '@chakra-ui/react';

import Plot from './Plot';

export default function SoilPlot({ cropName, plotKey }) {
  return (
    <GridItem bg="green.400">
      <Plot cropName={cropName} plotKey={plotKey} />
    </GridItem>
  );
}
