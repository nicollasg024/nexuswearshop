export interface Hotspot {
  id: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  title: string;
  description?: string;
}

export type ProductCategory = 'Alfaiataria' | 'Graphic Street' | 'Denim';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subtitle: string;
  description: string;
  image: string;
  image2?: string;
  price?: number;
  compareAt?: number;
  gsm?: number;
  sizes?: string[];
  hotspots: Hotspot[];
  pieces: string;
  isNewArrival?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'nexus-trico-blue-alfaiataria',
    name: 'CONJUNTO TRICÔ BLUE + ALFAIATARIA',
    category: 'Alfaiataria',
    subtitle: 'Roupas · peças do conjunto',
    description: 'Camiseta de tricô azul canelada com gola estruturada + calça preta de alfaiataria urbana com pences frontais e fecho com fivela utilitária.',
    image: '/assets/aistudio/image_9fd685e2.png',
    image2: '/src/assets/images/nexus_trico_blue_1794194505695.jpg',
    pieces: 'Camiseta de tricô azul canelada + Calça alfaiataria preta com fivelas',
    isNewArrival: true,
    hotspots: [
      {
        id: 'h1',
        x: 68,
        y: 20,
        title: 'Tricô Canelado Azul',
        description: 'Trama azul céu canelada com acabamento macio e gola redonda reforçada',
      },
      {
        id: 'h2',
        x: 48,
        y: 35,
        title: 'Fivela Utilitária na Cintura',
        description: 'Cós com cinto ajustável e fivela metálica industrial com tag NEXUS',
      },
      {
        id: 'h3',
        x: 36,
        y: 52,
        title: 'Pences Frontais',
        description: 'Construção estruturada de alfaiataria contemporânea com caimento slim reto',
      },
      {
        id: 'h4',
        x: 28,
        y: 78,
        title: 'Barra com Costura Invisível',
        description: 'Acabamento limpo de alfaiataria para combinar com sneakers e calçados robustos',
      },
    ],
  },
  {
    id: 'nexus-jersey-brasil-camo',
    name: 'CONJUNTO JERSEY BRASIL + CAMO',
    category: 'Graphic Street',
    subtitle: 'Roupas · peças do conjunto',
    description: 'Camisa esportiva amarela e verde com gola polo branca + calça camuflada cinza e preta com lettering gótico de alto impacto.',
    image: '/assets/aistudio/image_e48e2c79.png',
    image2: '/src/assets/images/nexus_jersey_camo_1794194506542.jpg',
    pieces: 'Camisa jersey Brasil gola polo branca + Calça camuflada cinza lettering gótico',
    isNewArrival: true,
    hotspots: [
      {
        id: 'h1',
        x: 22,
        y: 16,
        title: 'Gola Polo Branca Retrô',
        description: 'Lapela branca estruturada contrastando com o amarelo ouro e verde canário',
      },
      {
        id: 'h2',
        x: 45,
        y: 24,
        title: 'Escudo Estilizado',
        description: 'Emblema geométrico com cinco estrelas e grafismos street culture',
      },
      {
        id: 'h3',
        x: 76,
        y: 48,
        title: 'Lettering Gótico "TRAPSIDE"',
        description: 'Silk vertical em tipografia gótica branca com contorno preto em alta densidade',
      },
      {
        id: 'h4',
        x: 68,
        y: 78,
        title: 'Camuflagem Grafite & Asfalto',
        description: 'Padrão camuflado urbano em tons de cinza com bolsos utilitários reforçados',
      },
    ],
  },
  {
    id: 'nexus-stripes-denim-patch',
    name: 'CONJUNTO STRIPES + DENIM PATCH',
    category: 'Denim',
    subtitle: 'Roupas · peças do conjunto',
    description: 'Camiseta preta com blocos de faixas azul royal e branca + jeans destroyed cinza estonado com remendos pretos pespontados.',
    image: '/assets/aistudio/image_1d1c1137.png',
    image2: '/src/assets/images/nexus_stripes_patch_1794194507881.jpg',
    pieces: 'Camiseta preta faixas azul e branca + Jeans destroyed cinza com patches',
    isNewArrival: true,
    hotspots: [
      {
        id: 'h1',
        x: 62,
        y: 22,
        title: 'Silk Stripes Azul & Branco',
        description: 'Faixas horizontais de alto contraste sobre malha pesada preta',
      },
      {
        id: 'h2',
        x: 50,
        y: 12,
        title: 'Emblema Roland Garros Paris',
        description: 'Patch circular esportivo em acabamento silk screen de precisão',
      },
      {
        id: 'h3',
        x: 48,
        y: 65,
        title: 'Remendos Pretos Pespontados',
        description: 'Patches retangulares pretos costurados com pespontos visíveis reforçados',
      },
      {
        id: 'h4',
        x: 14,
        y: 44,
        title: 'Denim Washed Grey Estonado',
        description: 'Lavagem estonada com detalhes desfiados e tag exclusiva NEXUS WEAR',
      },
    ],
  },
  {
    id: 'nexus-1977-denim-cross',
    name: 'CONJUNTO 19:77 + DENIM CROSS',
    category: 'Graphic Street',
    subtitle: 'Roupas · peças do conjunto',
    description: 'Camiseta oversized preta com estampa silk 19:77 e faixas vermelhas nos ombros + jeans baggy com cruz bordada e lavagem degradê spray fade.',
    image: '/assets/aistudio/image_b40b4f5c.png',
    image2: '/src/assets/images/nexus_1977_cross_1794194508544.jpg',
    pieces: 'Camiseta silk 19:77 faixas vermelhas + Jeans baggy degrade cruzes bordadas',
    isNewArrival: true,
    hotspots: [
      {
        id: 'h1',
        x: 52,
        y: 20,
        title: 'Silk 19:77 & "Autêntico até o osso"',
        description: 'Estampa frontal de grandes proporções com tipografia gótica e tarja parental advisory',
      },
      {
        id: 'h2',
        x: 22,
        y: 11,
        title: 'Faixas Vermelhas nos Ombros',
        description: 'Vivos esportivos vermelhos aplicados na cor assinatura NEXUS',
      },
      {
        id: 'h3',
        x: 26,
        y: 62,
        title: 'Cruzes Góticas Bordadas',
        description: 'Bordados nos bolsos traseiros em linha carmesim e branca em alto relevo',
      },
      {
        id: 'h4',
        x: 58,
        y: 72,
        title: 'Lavagem Degradê Spray Fade',
        description: 'Transição manual em aerografia de preto para cinza claro nas pernas',
      },
    ],
  },
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'look-1',
    image: '/assets/aistudio/image_b40b4f5c.png',
    title: 'LOOK 01 // OVERSIZED 19:77 & BAGGY CROSS',
    pieces: 'Camiseta 19:77 Red Stripes + Baggy Degradê Cruzes Bordadas',
    drop: 'DROP 05 — URBAN NIGHT',
  },
  {
    id: 'look-2',
    image: '/assets/aistudio/image_9fd685e2.png',
    title: 'LOOK 02 // BLUE KNIT & TAILORED BUCKLE',
    pieces: 'Camiseta Tricô Blue Canelada + Calça Alfaiataria Fivela',
    drop: 'DROP 05 — MODERN TAILORING',
  },
  {
    id: 'look-3',
    image: '/assets/aistudio/image_e48e2c79.png',
    title: 'LOOK 03 // BRASIL JERSEY & GOTHIC CAMO',
    pieces: 'Jersey Brasil Gola Polo + Calça Camo Lettering Trapside',
    drop: 'DROP 05 — STREET TACTICAL',
  },
  {
    id: 'look-4',
    image: '/assets/aistudio/image_1d1c1137.png',
    title: 'LOOK 04 // STRIPES HEAVYWEIGHT & PATCH DENIM',
    pieces: 'Camiseta Stripes Boxy + Jeans Destroyed Patches Pretos',
    drop: 'DROP 05 — RAW DENIM',
  },
  {
    id: 'look-5',
    image: '/src/assets/images/nexus_hero_lookbook_1794194509027.jpg',
    title: 'LOOK 05 // BRUTALIST CAPSULE EDITORIAL',
    pieces: 'Coleção Completa Drop 05 — Jarinu, SP',
    drop: 'DROP 05 — LIMITED CAMPAIGN',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'José Jonatas',
    role: 'Cliente verificado · Google Reviews',
    text: 'Loja excelente, atendimento muito bom e melhores preços da região.',
    initials: 'JJ',
  },
  {
    id: 't2',
    name: 'Mateus Henrique',
    role: 'Cliente verificado · Google Reviews',
    text: 'Qualidade incrível das peças, super recomendo e atendimento espetacular!',
    initials: 'MH',
  },
  {
    id: 't3',
    name: 'Henrique Santos',
    role: 'Cliente verificado · Google Reviews',
    text: 'Atendimento top, qualidade demais.',
    initials: 'HS',
  },
];
