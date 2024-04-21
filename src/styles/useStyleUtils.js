export const useSeasonColor = (season) => {
  switch (season) {
    case 'spring':
      return 'green.300';

    case 'summer':
      return 'yellow.300';

    case 'fall':
      return 'orange.300';

    default:
      return 'blue.100';
  }
};
