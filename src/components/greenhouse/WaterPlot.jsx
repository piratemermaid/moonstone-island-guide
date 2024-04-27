import { GridItem, Text } from '@chakra-ui/react';

import Plot from './Plot';

export default function WaterPlot({ cropName }) {
  return (
    <GridItem rowSpan={2} bg="blue.400">
      <Plot cropName={cropName} />
    </GridItem>
  );
}
