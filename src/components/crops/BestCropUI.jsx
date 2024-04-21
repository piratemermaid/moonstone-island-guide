import { Card, CardBody, Center, Text } from '@chakra-ui/react';

import CROPS from '../../data/crops';
import { useSeasonColor } from '../../styles/useStyleUtils';

export default function BestCropUI({ label, stat, isPositive = true }) {
  const getBestCrop = () => {
    let bestStat = 0;
    let bestCrop = null;

    for (let crop of CROPS) {
      const statToCompare = crop.stats[stat];

      if (statToCompare) {
        let isCropBest = false;

        if (isPositive) {
          if (statToCompare > bestStat) isCropBest = true;
        } else {
          if (statToCompare < bestStat) isCropBest = true;
        }

        if (isCropBest) {
          bestStat = statToCompare;
          bestCrop = { ...crop, winningStat: statToCompare };
        }
      }
    }

    return bestCrop;
  };

  const crop = getBestCrop();
  const { name, season, winningStat } = crop;

  return (
    <Card>
      <CardBody>
        <Text fontSize="lg" color="blue.300">
          {label}
        </Text>
        <Text>{name}</Text>
        <Text color="green.200">{winningStat}</Text>
        <Center>
          <img
            src={`/images/crops/${name.replaceAll(' ', '')}.${
              name === 'Spectre Flower' ? 'png' : 'webp'
            }`}
            alt={name}
            title={name}
            style={{ width: 34, height: 34 }}
          />
        </Center>
        <Text sx={{ color: useSeasonColor(season) }}>{season}</Text>
        <Text>Days: {crop.daysToGrow}</Text>
        <Text>Regrows: {crop.reharvest ? 'Y' : 'N'}</Text>
      </CardBody>
    </Card>
  );
}
