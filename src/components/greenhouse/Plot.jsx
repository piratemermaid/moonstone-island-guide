import { Center, Text, VStack } from '@chakra-ui/react';

import CropImg from '../CropImg';
import CROPS from '../../data/crops';

const SIZE = 36;

export default function Plot({ cropName }) {
  const crop = CROPS.find((cropData) => cropData.name === cropName);

  return (
    <Center
      width={SIZE}
      height={crop.islandType === 'Aquatic' ? SIZE * 2 : SIZE}
    >
      <VStack spacing={0}>
        <Text>{cropName}</Text>
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
