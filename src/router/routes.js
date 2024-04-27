import BestCropsPage from '../pages/BestCropsPage';
import CropsPage from '../pages/CropsPage';
import GreenhousePlanPage from '../pages/GreenhousePlanPage';

const ROUTES = [
  {
    label: 'Crops',
    path: '/',
    Component: CropsPage,
  },
  {
    label: 'Best Crops',
    path: 'best_crops',
    Component: BestCropsPage,
  },
  {
    label: 'Greenhouse Plan',
    path: 'greenhouse_plan',
    Component: GreenhousePlanPage,
  },
];

export default ROUTES;
