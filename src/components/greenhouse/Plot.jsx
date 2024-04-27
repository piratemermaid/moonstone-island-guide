import { Box, Center, Checkbox, Text, VStack } from '@chakra-ui/react';

import CropImg from '../CropImg';
import CROPS from '../../data/crops';
import { useStore } from '../../store';

const SIZE = 36;

export default function Plot({ cropName }) {
  const plannedCrops = useStore((state) => state.plannedCrops);
  const togglePlannedCrop = useStore((state) => state.togglePlannedCrop);

  const crop = CROPS.find((cropData) => cropData.name === cropName);

  return (
    <Center
      width={SIZE}
      height={crop.islandType === 'Aquatic' ? SIZE * 2 : SIZE}
    >
      <VStack spacing={0}>
        <Box>
          {cropName}
          <Checkbox
            colorScheme="orange"
            isChecked={plannedCrops[cropName]}
            onChange={() => togglePlannedCrop(cropName)}
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
