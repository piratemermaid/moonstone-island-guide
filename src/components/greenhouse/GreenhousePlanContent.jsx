import React from 'react';
import { Grid } from '@chakra-ui/react';

import SoilPlot from './SoilPlot';
import WaterPlot from './WaterPlot';
import { useStore } from '../../store';

export default function GreenhousePlanContent() {
  const plannedPlots = useStore((state) => state.plannedPlots);
  const setPlannedPlots = useStore((state) => state.setPlannedPlots);

  React.useEffect(() => {
    if (Object.keys(plannedPlots).length < 1) {
      setPlannedPlots({
        water1: false,
        water2: false,
        water3: false,
        water4: false,
        soil1: false,
        soil2: false,
        soil3: false,
        soil4: false,
        soil5: false,
        soil6: false,
        soil7: false,
        soil8: false,
        soil9: false,
        soil10: false,
        soil11: false,
        soil12: false,
        soil13: false,
        soil14: false,
        soil15: false,
        soil16: false,
      });
    }
  }, []);

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <WaterPlot cropName="Fuzzball" plotKey="water2" />
      <SoilPlot cropName="Electricone" plotKey="soil10" />
      <SoilPlot cropName="Willowisp" plotKey="soil11" />
      <SoilPlot cropName="Ghostshroom" plotKey="soil12" />
      <WaterPlot cropName="Chilly Berry" plotKey="water4" />
      <SoilPlot cropName="Snowdrop Flower" plotKey="soil16" />

      <SoilPlot cropName="Grumpkin" plotKey="soil7" />
      <SoilPlot cropName="Crescent Plant" plotKey="soil8" />
      <SoilPlot cropName="Ghostshroom" plotKey="soil9" />
      <SoilPlot cropName="Snowdrop Flower" plotKey="soil15" />

      <WaterPlot cropName="Flag Flower" plotKey="water1" />
      <SoilPlot cropName="Bulbshroom" plotKey="soil4" />
      <SoilPlot cropName="Sweater Plant" plotKey="soil5" />
      <SoilPlot cropName="Gift Plant" plotKey="soil6" />
      <WaterPlot cropName="Snow Flobes" plotKey="water3" />
      <SoilPlot cropName="Snowdrop Flower" plotKey="soil14" />

      <SoilPlot cropName="Erdenleaf" plotKey="soil1" />
      <SoilPlot cropName="Flake Flower" plotKey="soil2" />
      <SoilPlot cropName="Gift Plant" plotKey="soil3" />
      <SoilPlot cropName="Snowdrop Flower" plotKey="soil13" />
    </Grid>
  );
}
