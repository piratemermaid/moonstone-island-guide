import { GridItem, Text } from '@chakra-ui/react';

import Plot from './Plot';

export default function WaterPlot({ cropName, plotKey }) {
  return (
    <GridItem rowSpan={2} bg="blue.400">
      <Plot cropName={cropName} plotKey={plotKey} />
    </GridItem>
  );
}
