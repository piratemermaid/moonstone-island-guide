import { Box, Card, CardBody, Center, Text } from '@chakra-ui/react';

import CropImg from '../CropImg';
import CROPS from '../../data/crops';

export default function BestCrop({ label, stat, isPositive = true }) {
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
  const { name, winningStat, stats } = crop;

  return (
    <Card>
      <CardBody>
        <Text fontSize="lg" color="blue.300">
          {label}
        </Text>
        <Text>{name}</Text>
        <Text color="green.200">{winningStat}</Text>
        <Center>
          <CropImg name={name} />
        </Center>
        <Text>Days: {crop.daysToGrow}</Text>
        <Text>Regrows: {crop.reharvest ? 'Y' : 'N'}</Text>
        <Box>
          {Object.keys(stats).map((stat) => {
            if (label !== 'Stamina') {
              if (stat !== 'stamina') {
                return (
                  <Text fontSize="sm" color="blue.100" key={stat}>
                    {stat} {stats[stat]}
                  </Text>
                );
              }
            } else {
              return (
                <Text fontSize="sm" color="blue.100" key={stat}>
                  {stat} {stats[stat]}
                </Text>
              );
            }
          })}
        </Box>
      </CardBody>
    </Card>
  );
}
