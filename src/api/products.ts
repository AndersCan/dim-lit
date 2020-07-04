export interface IProduct {
  id: string;
  name: string;
  price_cents: number;
  details: string;
  details_short: string;
  img_src: string;
}

export function getProduct(id: IProduct['id']) {
  return getProducts().find((p) => p.id === id);
}

export function getProducts(): IProduct[] {
  return PRODUCTS;
}

let id = 3;
function mockProduct(): IProduct {
  return {
    img_src: images[id],
    name: `name - ${id}`,
    id: `${id++}`,
    details: 'Details are short, but these are longer!',
    details_short: 'Details are short',
    price_cents: Math.floor(Math.random() * 100),
  };
}
const images = [
  '/src/assets/images/banner.jpg',
  '/src/assets/images/bolgeskvulp.jpg',
  '/src/assets/images/fjord.jpg',
  '/src/assets/images/glacier.jpg',
  '/src/assets/images/gronnteoghavre.jpg',
  '/src/assets/images/guttas.jpg',
  '/src/assets/images/harmoni.jpg',
  '/src/assets/images/heksedans.jpg',
  '/src/assets/images/herrlig.jpg',
  '/src/assets/images/hjerte.jpg',
  '/src/assets/images/kaffemint.jpg',
  '/src/assets/images/knittingrose.jpg',
  '/src/assets/images/mantra.jpg',
  '/src/assets/images/midnightsun.jpg',
  '/src/assets/images/nordlys.jpg',
  '/src/assets/images/northenlights.jpg',
  '/src/assets/images/polarbear.jpg',
  '/src/assets/images/sprudle.jpg',
  '/src/assets/images/stormvind.jpg',
  '/src/assets/images/tornerose.jpg',
  '/src/assets/images/troll.jpg',
  '/src/assets/images/viking.jpg',
];

const PRODUCTS = [
  {
    id: '1',
    name: 'Hjerte',
    price_cents: 79,
    img_src: '/src/assets/images/hjerte.jpg',
    details: `Hjerten i ditt liv.
      <br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      <br>
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      <br>
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    details_short: 'Hjerten i ditt liv',
  },
  {
    id: '2',
    name: 'Midnight',
    price_cents: 79,
    img_src: '/src/assets/images/midnightsun.jpg',
    details: `Midnatt solen som varmer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    details_short:
      'Midnatt solen som varmer ditt hjerte. Passer ypperlige for lange sommerkvelder som bringer deg masse lykke og glede som vil vare livet ut.',
  },
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
  mockProduct(),
];
