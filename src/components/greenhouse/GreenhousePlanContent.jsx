import { Grid, GridItem } from '@chakra-ui/react';
import WaterPlot from './WaterPlot';
import Plot from './Plot';

export default function GreenhousePlanContent() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <WaterPlot />
      <Plot />
      <Plot />
      <Plot />
      <WaterPlot />
      <Plot />

      <Plot />
      <Plot />
      <Plot />
      <Plot />

      <WaterPlot />
      <Plot />
      <Plot />
      <Plot />
      <WaterPlot />
      <Plot />

      <Plot />
      <Plot />
      <Plot />
      <Plot />
    </Grid>
  );
}
