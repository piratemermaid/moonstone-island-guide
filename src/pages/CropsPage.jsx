import { VStack } from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import BestCropsSection from '../components/crops/BestCropsSection';

export default function CropsPage() {
  return (
    <PageLayout title="Crops">
      <VStack>
        <BestCropsSection />
      </VStack>
    </PageLayout>
  );
}
