import images from './images';

const hotDrinks = [
  {
    title: 'Fresh Mint Tea',
    price: '$19',
    tags: 'AU | Bottle',
  },
  {
    title: 'English Tea',
    price: '$14',
    tags: 'AU | Bottle',
  },
  {
    title: 'Hot Chocolate',
    price: '$19',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Chai',
    price: '$29',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Hot Lemon',
    price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Espresso Martini - Coffee',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const coldDrinks = [
  {
    title: 'Mango Smoothie',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Watermelon-Mint Agua Fresca",
    price: '$29',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Peach Iced Tea',
    price: '$29',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Tropical Creamsicle Smoothie',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Hibiscus Lemon Iced Tea',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const data = { hotDrinks, coldDrinks, awards };

export default data;
