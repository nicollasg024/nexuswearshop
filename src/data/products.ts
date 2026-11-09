export interface Hotspot {
  x: number;
  y: number;
  label: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  collection: string;
  pieces: string;
  image: string;
  image2?: string;
  price?: number;
  compareAt?: number;
  gsm?: number;
  sizes?: string[];
  hotspots: Hotspot[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'CONJUNTO TRICÔ BLUE + ALFAIATARIA',
    category: 'Alfaiataria',
    collection: 'Roupas',
    pieces: 'Camiseta + Calça',
    image: '/assets/tricot-alfaiataria-Ctt1yDAk.jpg',
    hotspots: [
      { x: 62, y: 20, label: 'Tricô canelado' },
      { x: 30, y: 55, label: 'Pences frontais' },
      { x: 68, y: 37, label: 'Fivela lateral' },
    ],
  },
  {
    id: 2,
    name: 'CONJUNTO JERSEY BRASIL + CAMO',
    category: 'Graphic Street',
    collection: 'Roupas',
    pieces: 'Camisa + Calça',
    image: '/assets/jersey-brasil-camo-BMPgzIGQ.jpg',
    hotspots: [
      { x: 20, y: 16, label: 'Gola polo branca' },
      { x: 40, y: 38, label: 'Estampa grafite' },
      { x: 72, y: 55, label: 'Lettering gótico' },
    ],
  },
  {
    id: 3,
    name: 'CONJUNTO STRIPES + DENIM PATCH',
    category: 'Denim',
    collection: 'Roupas',
    pieces: 'Camiseta + Jeans',
    image: '/assets/stripes-denim-patch-C93xX-Pt.jpg',
    hotspots: [
      { x: 70, y: 25, label: 'Faixas azul e branco' },
      { x: 45, y: 45, label: 'Lavagem estonada' },
      { x: 25, y: 72, label: 'Remendos pretos' },
    ],
  },
  {
    id: 4,
    name: 'CONJUNTO 19:77 + DENIM CROSS',
    category: 'Graphic Street',
    collection: 'Roupas',
    pieces: 'Camiseta + Jeans',
    image: '/assets/1977-denim-cross-B_J4DC18.jpg',
    hotspots: [
      { x: 45, y: 22, label: 'Silk 19:77' },
      { x: 10, y: 18, label: 'Faixa lateral vermelha' },
      { x: 24, y: 61, label: 'Cruz bordada' },
      { x: 35, y: 82, label: 'Lavagem degradê' },
    ],
  },
];

export const TESTIMONIALS = [
  ['José Jonatas', 'Loja excelente, atendimento muito bom e melhores preços da região.'],
  ['Mateus Henrique', 'Qualidade incrível das peças, super recomendo e atendimento espetacular!'],
  ['Henrique Santos', 'Atendimento top, qualidade demais.'],
];
