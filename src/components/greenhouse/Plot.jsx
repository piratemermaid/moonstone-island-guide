import { Box, Center, Checkbox, Text, VStack } from '@chakra-ui/react';

import CropImg from '../CropImg';
import CROPS from '../../data/crops';
import { useStore } from '../../store';

const SIZE = 36;

export default function Plot({ cropName, plotKey }) {
  const plannedPlots = useStore((state) => state.plannedPlots);
  const togglePlannedPlot = useStore((state) => state.togglePlannedPlot);

  const crop = CROPS.find((cropData) => cropData.name === cropName);

  const handlePlotToggle = () => {
    togglePlannedPlot(plotKey);
  };

  return (
    <Center
      width={SIZE}
      height={crop.islandType === 'Aquatic' ? SIZE * 2 : SIZE}
      onClick={handlePlotToggle}
      sx={{ cursor: 'pointer' }}
    >
      <VStack spacing={0}>
        <Box>
          {cropName}
          <Checkbox
            colorScheme="orange"
            isChecked={plannedPlots[plotKey]}
            onChange={handlePlotToggle}
            sx={{ position: 'relative', top: 1, left: 2 }}
          />
        </Box>
        <CropImg name={cropName} size={24} />
        {Object.keys(crop.stats).map((stat) => {
          return (
            <Text fontSize="sm" key={stat} sx={{ mb: -1 }}>
              {stat} {crop.stats[stat]}
            </Text>
          );
        })}
      </VStack>
    </Center>
  );
}
