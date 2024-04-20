import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import CropsPage from '../pages/CropsPage';

const ROUTES = [
  {
    label: 'Crops',
    path: '/',
    Component: CropsPage,
  },
  {
    label: 'Page One',
    path: '/one',
    Component: PageOne,
  },
  {
    label: 'Page Two',
    path: '/two',
    Component: PageTwo,
  },
];

export default ROUTES;
