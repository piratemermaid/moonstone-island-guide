import {
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import CROPS from '../../data/crops';
import SEASONS from '../../data/seasons';

export default function CropsContent() {
  return (
    <>
      {SEASONS.map((season) => {
        const crops = CROPS.filter((crop) => crop.season === season);

        return (
          <Box key={season}>
            <Text color="green.400" fontSize="lg" sx={{ mb: 4 }}>
              {season}
            </Text>
            <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={2} sx={{ mb: 8 }}>
              {crops.map((crop) => {
                return (
                  <Card key={crop.name}>
                    <CardBody>
                      <VStack>
                        <Text>{crop.name}</Text>
                        <img
                          src={`/images/crops/${crop.name.replaceAll(
                            ' ',
                            ''
                          )}.${
                            crop.name === 'Spectre Flower' ? 'png' : 'webp'
                          }`}
                          alt={crop.name}
                          title={crop.name}
                          style={{ width: 34, height: 34 }}
                        />
                        <Text>Days: {crop.daysToGrow}</Text>
                        <Text>Regrows: {crop.reharvest ? 'Y' : 'N'}</Text>
                        <Box>
                          {Object.keys(crop.stats).map((stat) => {
                            return (
                              <Text fontSize="sm" color="blue.100" key={stat}>
                                {stat} {crop.stats[stat]}
                              </Text>
                            );
                          })}
                        </Box>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Box>
        );
      })}
    </>
  );
}
