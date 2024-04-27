import BestCropsPage from '../pages/BestCropsPage';
import CropsPage from '../pages/CropsPage';

const ROUTES = [
  {
    label: 'Crops',
    path: '/',
    Component: CropsPage,
  },
  {
    label: 'Best Crops',
    path: '/best_crops',
    Component: BestCropsPage,
  },
];

export default ROUTES;
