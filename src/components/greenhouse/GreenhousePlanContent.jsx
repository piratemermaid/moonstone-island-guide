import React from 'react';
import { Grid } from '@chakra-ui/react';

import SoilPlot from './SoilPlot';
import WaterPlot from './WaterPlot';
import { useStore } from '../../store';

export default function GreenhousePlanContent() {
  const plannedCrops = useStore((state) => state.plannedCrops);
  const setPlannedCrops = useStore((state) => state.setPlannedCrops);

  React.useEffect(() => {
    if (Object.keys(plannedCrops).length < 1) {
      setPlannedCrops({
        Fuzzball: false,
        Electricone: false,
        Willowisp: false,
        'Snowman Plant': false,
        'Chilly Berry': false,
        'Snowdrop Flower': false,
        'Flag Flower': false,
        Bulbshroom: false,
        'Sweater Plant': false,
        'Gift Plant': false,
        'Snow Flobes': false,
        Erdenleaf: false,
        'Flake Flower': false,
      });
    }
  }, []);

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <WaterPlot cropName="Fuzzball" />
      <SoilPlot cropName="Electricone" />
      <SoilPlot cropName="Willowisp" />
      <SoilPlot cropName="Snowman Plant" />
      <WaterPlot cropName="Chilly Berry" />
      <SoilPlot cropName="Snowdrop Flower" />

      <SoilPlot cropName="Grumpkin" />
      <SoilPlot cropName="Crescent Plant" />
      <SoilPlot cropName="Snowman Plant" />
      <SoilPlot cropName="Snowdrop Flower" />

      <WaterPlot cropName="Flag Flower" />
      <SoilPlot cropName="Bulbshroom" />
      <SoilPlot cropName="Sweater Plant" />
      <SoilPlot cropName="Gift Plant" />
      <WaterPlot cropName="Snow Flobes" />
      <SoilPlot cropName="Snowdrop Flower" />

      <SoilPlot cropName="Erdenleaf" />
      <SoilPlot cropName="Flake Flower" />
      <SoilPlot cropName="Gift Plant" />
      <SoilPlot cropName="Snowdrop Flower" />
    </Grid>
  );
}
