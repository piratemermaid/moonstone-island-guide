import { VStack } from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import BestCropsContent from '../components/crops/BestCropsContent';

export default function BestCropsPage() {
  return (
    <PageLayout title="Best Crops">
      <VStack>
        <BestCropsContent />
      </VStack>
    </PageLayout>
  );
}
