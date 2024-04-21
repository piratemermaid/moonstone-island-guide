import { Box, Card, CardBody, Center, Text } from '@chakra-ui/react';
import { useSeasonColor } from '../../styles/useStyleUtils';

export default function BestCropUI({ label, crop }) {
  return (
    <Card>
      <CardBody>
        <Text fontSize="lg" color="blue.300">
          {label}
        </Text>
        <Text>{crop.name}</Text>
        <Center>
          <img
            src={`/images/crops/${crop.name.replaceAll(' ', '')}.${
              crop.name === 'Spectre Flower' ? 'png' : 'webp'
            }`}
            alt={crop.name}
            title={crop.name}
            style={{ width: 34, height: 34 }}
          />
        </Center>
        <Text sx={{ color: useSeasonColor(crop.season) }}>{crop.season}</Text>
        <Text></Text>
      </CardBody>
    </Card>
  );
}
