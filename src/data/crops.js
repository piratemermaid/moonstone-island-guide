const CROPS = [
  ////// SPRING CROPS //////
  {
    name: 'Flax Flower',
    islandType: 'Earth',
    season: 'spring',
    daysToGrow: 6,
    reharvest: false,
    stats: {
      stamina: 20,
      tame: 10,
    },
  },
  {
    name: 'Stonefruit',
    islandType: 'Earth',
    season: 'spring',
    daysToGrow: 6,
    reharvest: false,
    stats: {
      stamina: 50,
    },
  },
  {
    name: 'Cat Tail',
    islandType: 'Aquatic',
    season: 'spring',
    daysToGrow: 6,
    reharvest: false,
    stats: { stamina: 20, speed: 3 },
  },
  {
    name: 'Lilypad',
    islandType: 'Aquatic',
    season: 'spring',
    daysToGrow: 7,
    reharvest: false,
    stats: {
      stamina: 20,
      hp: 15,
    },
  },
  {
    name: 'Bolt',
    islandType: 'Electric',
    season: 'spring',
    daysToGrow: 8,
    reharvest: false,
    stats: {
      stamina: 20,
      speed: 5,
    },
  },
  {
    name: 'Mandrake',
    islandType: 'Poison',
    season: 'spring',
    daysToGrow: 10,
    reharvest: false,
    stats: {
      stamina: -10,
      power: -3,
    },
  },
  {
    name: 'Nightshade',
    islandType: 'Poison',
    season: 'spring',
    daysToGrow: 8,
    reharvest: false,
    stats: {
      stamina: -10,
      vitality: -3,
    },
  },
  {
    name: 'Nimbus Plant',
    islandType: 'Electric',
    season: 'spring',
    daysToGrow: 9,
    reharvest: false,
    stats: {
      stamina: 20,
      power: 3,
    },
  },
  {
    name: 'Fire Flower',
    islandType: 'Fire',
    season: 'spring',
    daysToGrow: 6,
    reharvest: false,
    stats: {
      stamina: 20,
      tame: 30,
    },
  },
  {
    name: 'Hot Pepper',
    islandType: 'Fire',
    season: 'spring',
    daysToGrow: 10,
    reharvest: true,
    stats: {
      stamina: 20,
      vitality: 3,
    },
  },
  {
    name: 'Bloodroot',
    islandType: 'Dark',
    season: 'spring',
    daysToGrow: 7,
    reharvest: false,
    stats: {
      stamina: 20,
      speed: -5,
      vitality: 5,
    },
  },
  {
    name: 'Spirit Bane',
    islandType: 'Dark',
    season: 'spring',
    daysToGrow: 11,
    reharvest: false,
    stats: {
      stamina: 20,
      speed: -5,
      power: 5,
    },
  },
  {
    name: 'Magic Mushroom',
    islandType: 'Psychic',
    season: 'spring',
    daysToGrow: 7,
    reharvest: false,
    stats: {
      stamina: 100,
    },
  },
  {
    name: 'Yarrow',
    islandType: 'Psychic',
    season: 'spring',
    daysToGrow: 10,
    reharvest: false,
    stats: {
      stamina: 20,
      hp: 30,
    },
  },
  ////// SUMMER CROPS //////
  {
    name: 'Mossball',
    islandType: 'Earth',
    season: 'summer',
    daysToGrow: 4,
    reharvest: false,
    stats: { stamina: 20, hp: 10, speed: 1, power: 1 },
  },
  {
    name: 'Popsiplant',
    islandType: 'Earth',
    season: 'summer',
    daysToGrow: 5,
    reharvest: false,
    stats: { stamina: 20, speed: 2, vitality: 1 },
  },
  {
    name: 'Beach Peach',
    islandType: 'Aquatic',
    season: 'summer',
    daysToGrow: 4,
    reharvest: false,
    stats: { stamina: 40 },
  },
  {
    name: 'Pinwheel Flower',
    islandType: 'Aquatic',
    season: 'summer',
    daysToGrow: 4,
    reharvest: false,
    stats: { stamina: 20, power: 2, tame: 20 },
  },
  {
    name: 'Erdenleaf',
    islandType: 'Poison',
    season: 'summer',
    daysToGrow: 6,
    reharvest: false,
    stats: { stamina: 20, armor: -2 },
  },
  {
    name: 'Umbrellashroom',
    islandType: 'Poison',
    season: 'summer',
    daysToGrow: 5,
    reharvest: false,
    stats: { stamina: 20, vitality: -1, power: -2 },
  },
  {
    name: 'Stun Flower',
    islandType: 'Electric',
    season: 'summer',
    daysToGrow: 6,
    reharvest: false,
    stats: { stamina: 20, speed: 2, tame: 30 },
  },
  {
    name: 'Zaplant',
    islandType: 'Electric',
    season: 'summer',
    daysToGrow: 5,
    reharvest: false,
    stats: { stamina: 20, armor: 1, power: 3 },
  },
  {
    name: 'Flameroot',
    islandType: 'Fire',
    season: 'summer',
    daysToGrow: 5,
    reharvest: false,
    stats: { stamina: 20, speed: 4 },
  },
  {
    name: 'Hot Air Fruit',
    islandType: 'Fire',
    season: 'summer',
    daysToGrow: 4,
    reharvest: false,
    stats: { stamina: 20, hp: 20, exp: 50 },
  },
  {
    name: 'Prickly Plant',
    islandType: 'Dark',
    season: 'summer',
    daysToGrow: 6,
    reharvest: false,
    stats: { stamina: 20, speed: 8, power: -4 },
  },
  {
    name: 'Wingfruit',
    islandType: 'Dark',
    season: 'summer',
    daysToGrow: 6,
    reharvest: false,
    stats: { stamina: 20, vitality: -8, power: 8 },
  },
  {
    name: 'Eye Berry',
    islandType: 'Psychic',
    season: 'summer',
    daysToGrow: 6,
    reharvest: false,
    stats: { stamina: 20, exp: 100 },
  },
  {
    name: 'Tiny Flower',
    islandType: 'Psychic',
    season: 'summer',
    daysToGrow: 4,
    reharvest: false,
    stats: { stamina: 20, exp: 50, tame: 30 },
  },
  ////// FALL CROPS //////
  {
    name: 'Applum',
    islandType: 'Earth',
    season: 'fall',
    daysToGrow: 9,
    reharvest: true,
    stats: { stamina: 30, hp: 20 },
  },
  {
    name: 'Squish',
    islandType: 'Earth',
    season: 'fall',
    daysToGrow: 8,
    reharvest: true,
    stats: { stamina: 60 },
  },
  {
    name: 'Flag Flower',
    islandType: 'Aquatic',
    season: 'fall',
    daysToGrow: 7,
    reharvest: true,
    stats: { stamina: 30, tame: 40 },
  },
  {
    name: 'Fuzzball',
    islandType: 'Aquatic',
    season: 'fall',
    daysToGrow: 8,
    reharvest: true,
    stats: { stamina: 30, speed: 1, vitality: 1, power: 1 },
  },
  {
    name: 'Grumpkin',
    islandType: 'Poison',
    season: 'fall',
    daysToGrow: 7,
    reharvest: true,
    stats: { stamina: -10, speed: -1, vitality: -1, power: -1 },
  },
  {
    name: 'Spiky Plant',
    islandType: 'Poison',
    season: 'fall',
    daysToGrow: 9,
    reharvest: true,
    stats: { stamina: -10, speed: -3 },
  },
  {
    name: 'Electricone',
    islandType: 'Electric',
    season: 'fall',
    daysToGrow: 9,
    reharvest: true,
    stats: { stamina: 30, power: 4 },
  },
  {
    name: 'Plantern',
    islandType: 'Electric',
    season: 'fall',
    daysToGrow: 8,
    reharvest: true,
    stats: { stamina: 30, speed: 4 },
  },
  {
    name: 'Colberry',
    islandType: 'Fire',
    season: 'fall',
    daysToGrow: 9,
    reharvest: true,
    stats: { stamina: 30, hp: 40 },
  },
  {
    name: 'Heat Plant',
    islandType: 'Fire',
    season: 'fall',
    daysToGrow: 9,
    reharvest: true,
    stats: { stamina: 30, vitality: 4 },
  },
  {
    name: 'Skeleplant',
    islandType: 'Dark',
    season: 'fall',
    daysToGrow: 7,
    reharvest: true,
    stats: { stamina: 30, armor: 2, vitality: -2 },
  },
  {
    name: 'Spectre Flower',
    islandType: 'Dark',
    season: 'fall',
    daysToGrow: 10,
    reharvest: true,
    stats: { stamina: 30, speed: -2, tame: 50 },
  },
  {
    name: 'Ghostshroom',
    islandType: 'Psychic',
    season: 'fall',
    daysToGrow: 10,
    reharvest: true,
    stats: { stamina: 30, hp: 100 },
  },
  {
    name: 'Willowisp',
    islandType: 'Psychic',
    season: 'fall',
    daysToGrow: 7,
    reharvest: true,
    stats: { stamina: 30, exp: 250 },
  },
  ////// WINTER CROPS //////
  {
    name: 'Crescent Plant',
    islandType: 'Earth',
    season: 'winter',
    daysToGrow: 13,
    stats: { stamina: 40, vitality: 5 },
  },
  {
    name: 'Snowman Plant',
    islandType: 'Earth',
    season: 'winter',
    daysToGrow: 12,
    reharvest: true,
    stats: { stamina: 40, hp: 50, vitality: 1 },
  },
  {
    name: 'Chilly Berry',
    islandType: 'Aquatic',
    season: 'winter',
    daysToGrow: 12,
    stats: { stamina: 40, armor: 1, vitality: 1 },
  },
  {
    name: 'Snow Flobes',
    islandType: 'Aquatic',
    season: 'winter',
    daysToGrow: 12,
    stats: { stamina: 80 },
  },
  {
    name: 'Flake Flower',
    islandType: 'Poison',
    season: 'winter',
    daysToGrow: 11,
    stats: { stamina: -10, speed: -2, vitality: -2, power: -2, tame: 50 },
  },
  {
    name: 'Saplant',
    islandType: 'Poison',
    season: 'winter',
    daysToGrow: 13,
    reharvest: true,
    stats: { stamina: -10, speed: -5 },
  },
  {
    name: 'Bulbshroom',
    islandType: 'Electric',
    season: 'winter',
    daysToGrow: 12,
    stats: { stamina: 40, speed: 3, power: 3 },
  },
  {
    name: 'Popcorn Plant',
    islandType: 'Electric',
    season: 'winter',
    daysToGrow: 12,
    reharvest: true,
    stats: { stamina: 40, armor: -1 },
  },
  {
    name: 'Ruby Plant',
    islandType: 'Fire',
    season: 'winter',
    daysToGrow: 14,
    stats: { stamina: 40, speed: 2, vitality: 2, power: 2 },
  },
  {
    name: 'Sweater Plant',
    islandType: 'Fire',
    season: 'winter',
    daysToGrow: 14,
    stats: { stamina: 40, armor: 3 },
  },
  {
    name: 'Black Pearl',
    islandType: 'Dark',
    season: 'winter',
    daysToGrow: 13,
    stats: { stamina: 40, armor: -3, power: 5 },
  },
  {
    name: 'Icicle Root',
    islandType: 'Dark',
    season: 'winter',
    daysToGrow: 13,
    stats: { stamina: 40, armor: 5, speed: -5, vitality: -5, power: -5 },
  },
  {
    name: 'Gift Plant',
    islandType: 'Psychic',
    season: 'winter',
    daysToGrow: 14,
    stats: { stamina: 40, exp: 1000 },
  },
  {
    name: 'Snowdrop Flower',
    islandType: 'Psychic',
    season: 'winter',
    daysToGrow: 13,
    stats: { stamina: 40, exp: 500, tame: 100 },
  },
];

export default CROPS;
