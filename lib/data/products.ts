// Designer information with their portfolio
export interface Designer {
  id: string;
  name: string;
  bio: string[];
  images: string[]; // Array of 3 images for showcase
}

export interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  image: string;
  description?: string;
  designerId: string; // Reference to designer
  information?: string;
  specifications?: {
    dimensions?: string;
    materials?: string[];
    colors?: string;
  };
}

export const designers: Designer[] = [
  {
    id: 'oscar-maschera',
    name: 'Oscar Maschera',
    bio: [
      'Una empresa 100% italiana fundada en 2005, nacida de la profunda experiencia y conocimiento de los materiales por parte de Oscar Maschera y Claudia Serafini.',
      'Rodeados por la campiña atemporal y romántica de Pesaro, estos dos artistas canalizan su creatividad en la producción de piezas únicas y refinadas, así como pequeños objetos de mobiliario, todos realizados en cuero y materiales naturales.',
      'Entre muros medievales y vistas sugestivas, el arte tradicional del trabajo en cuero se transforma en una expresión contemporánea de creatividad.',
      'OSCAR MASCHERA surge del amor y el compromiso de Oscar y Claudia con su oficio artístico.',
      'Oscar Maschera colabora con reconocidos diseñadores internacionales como Néstor Perkal, Claude Bouchard y Nathalie du Pasquier.'
    ],
    images: ['/designers/oscar-maschera/showcase-1.png', '/designers/oscar-maschera/showcase-2.png', '/designers/oscar-maschera/showcase-3.png']
  },
  {
    id: 'pieter-adam',
    name: 'Pieter Adam',
    bio: [
      'Pieter Adam es un estudio de diseño reconocido por su mobiliario y luminarias de lujo hechas a medida.',
      'Cada pieza surge de un proceso artesanal en su taller en Lopikerkapel, donde se combina experiencia técnica, imaginación y pasión por la excelencia. Utilizan materiales como el bronce, vidrio soplado, mármol, cuero, tejidos y maderas nobles.',
      'Sus mesas destacan por el equilibrio entre presencia y sofisticación, con estructuras sólidas de bronce o acero combinadas con superficies como el mármol o maderas seleccionadas.',
      'El resultado son piezas elegantes, atemporales y funcionales, que se convierten en el centro visual de cualquier espacio.'
    ],
    images: ['/designers/pieter-adams/showcase-1.png', '/designers/pieter-adams/showcase-2.png', '/designers/pieter-adams/showcase-3.png']
  },
  {
    id: 'arte-brotto',
    name: 'Arte Brotto',
    bio: [
      'Arte Brotto es una firma italiana con más de cinco décadas de historia, especializada en la creación de mobiliario de alta gama que combina tradición artesanal con diseño contemporáneo. Cada pieza es diseñada y fabricada íntegramente en Italia, reflejando una herencia de excelencia, elegancia y atención al detalle.',
      'La marca se distingue por el uso exclusivo de maderas macizas nobles, como el nogal canaletto y el roble europeo, seleccionadas de bosques gestionados de forma sostenible. Estas maderas son tratadas con técnicas que respetan su naturaleza y envejecen con belleza, revelando vetas únicas y una calidez inigualable.',
      'Sus colecciones celebran el vínculo entre arte, diseño y naturaleza, ofreciendo muebles atemporales que elevan cualquier espacio con carácter, autenticidad y alma.'
    ],
    images: ['/designers/arte-brotto/showcase-1.png', '/designers/arte-brotto/showcase-2.png', '/designers/arte-brotto/showcase-3.png']
  }
];

export const products: Product[] = [
  // Caballito Collection - Oscar Maschera
  {
    id: 1,
    category: 'Asientos',
    title: 'Caballito petit',
    price: 'Desde: $2.699,95 USD',
    image: '/products/caballito-petit/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Caballito Blanco se inspira en la icónica silla de montar de un caballo blanco, símbolo de la historia argentina. Un homenaje a la tradición y a su gente.',
    information: 'La inspiración de Néstor Perkal cabalga en la silla de montar de un caballo blanco: un juguete que vio de niño en la vidriera de un comercio del barrio y que también es símbolo de la historia de su gente. Los argentinos que cruzaron su país en busca de un hogar, comida y familia, viajaban a caballo. Y la silla de montar del Caballito Blanco es un lugar, cuidado, apoyo, amistad y descanso, todo al mismo tiempo. "Ven rápido, caballito blanco, llévame a la tierra donde nací... Tengo, tengo, tengo..." Una canción perteneciente a la Tradición Oral (1930–1936) del pueblo rural argentino. Bancos de malla de acero con asiento tapizado en cuero, cuero y tela, cuero y ante.',
    specifications: {
      dimensions: '40 × 37 × H43 cm',
      materials: [
        'Bancos de malla de acero con asiento tapizado en cuero, tela, ante o piel de oveja.',
        'Cuero italiano curtido al vegetal.',
        'Tela: pura lana virgen, tejida a mano y teñida con tintes vegetales.'
      ],
      colors: 'Colores según gama disponible.'
    }
  },
  {
    id: 2,
    category: 'Asientos',
    title: 'Caballito piccolo',
    price: 'Desde: $3.336,55 USD',
    image: '/products/caballito-piccolo/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Caballito Blanco se inspira en la icónica silla de montar de un caballo blanco, símbolo de la historia argentina. Un homenaje a la tradición y a su gente.',
    information: 'La inspiración de Néstor Perkal cabalga en la silla de montar de un caballo blanco: un juguete que vio de niño en la vidriera de un comercio del barrio y que también es símbolo de la historia de su gente. Los argentinos que cruzaron su país en busca de un hogar, comida y familia, viajaban a caballo. Y la silla de montar del Caballito Blanco es un lugar, cuidado, apoyo, amistad y descanso, todo al mismo tiempo. "Ven rápido, caballito blanco, llévame a la tierra donde nací... Tengo, tengo, tengo..." Una canción perteneciente a la Tradición Oral (1930–1936) del pueblo rural argentino. Bancos de malla de acero con asiento tapizado en cuero, cuero y tela, cuero y ante.',
    specifications: {
      dimensions: '70 × 37 × H42 cm',
      materials: [
        'Bancos de malla de acero con asiento tapizado en cuero, tela, ante o piel de oveja.',
        'Cuero italiano curtido al vegetal.',
        'Tela: pura lana virgen, tejida a mano y teñida con tintes vegetales.'
      ],
      colors: 'Colores según gama disponible.'
    }
  },
  {
    id: 3,
    category: 'Asientos',
    title: 'Caballito Lungo',
    price: 'Desde: $5.151,40 USD',
    image: '/products/caballito-lungo/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Caballito Blanco se inspira en la icónica silla de montar de un caballo blanco, símbolo de la historia argentina. Un homenaje a la tradición y a su gente.',
    information: 'La inspiración de Néstor Perkal cabalga en la silla de montar de un caballo blanco: un juguete que vio de niño en la vidriera de un comercio del barrio y que también es símbolo de la historia de su gente. Los argentinos que cruzaron su país en busca de un hogar, comida y familia, viajaban a caballo. Y la silla de montar del Caballito Blanco es un lugar, cuidado, apoyo, amistad y descanso, todo al mismo tiempo. "Ven rápido, caballito blanco, llévame a la tierra donde nací... Tengo, tengo, tengo..." Una canción perteneciente a la Tradición Oral (1930–1936) del pueblo rural argentino. Bancos de malla de acero con asiento tapizado en cuero, cuero y tela, cuero y ante.',
    specifications: {
      dimensions: '140 × 36 × H50 cm',
      materials: [
        'Bancos de malla de acero con asiento tapizado en cuero, tela, ante o piel de oveja.',
        'Cuero italiano curtido al vegetal.',
        'Tela: pura lana virgen, tejida a mano y teñida con tintes vegetales.'
      ],
      colors: 'Colores según gama disponible.'
    }
  },
  {
    id: 4,
    category: 'Asientos',
    title: 'Caballito Grande',
    price: 'Desde: $5.151,40 USD',
    image: '/products/caballito-grande/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Caballito Blanco se inspira en la icónica silla de montar de un caballo blanco, símbolo de la historia argentina. Un homenaje a la tradición y a su gente.',
    information: 'La inspiración de Néstor Perkal cabalga en la silla de montar de un caballo blanco: un juguete que vio de niño en la vidriera de un comercio del barrio y que también es símbolo de la historia de su gente. Los argentinos que cruzaron su país en busca de un hogar, comida y familia, viajaban a caballo. Y la silla de montar del Caballito Blanco es un lugar, cuidado, apoyo, amistad y descanso, todo al mismo tiempo. "Ven rápido, caballito blanco, llévame a la tierra donde nací... Tengo, tengo, tengo..." Una canción perteneciente a la Tradición Oral (1930–1936) del pueblo rural argentino. Bancos de malla de acero con asiento tapizado en cuero, cuero y tela, cuero y ante.',
    specifications: {
      dimensions: '140 × 36 × H50 cm',
      materials: [
        'Bancos de malla de acero con asiento tapizado en cuero, tela, ante o piel de oveja.',
        'Cuero italiano curtido al vegetal.',
        'Tela: pura lana virgen, tejida a mano y teñida con tintes vegetales.'
      ],
      colors: 'Colores según gama disponible.'
    }
  },
  // Bombo Collection - Oscar Maschera
  {
    id: 5,
    category: 'Asientos & Mesas',
    title: 'Bombo 01',
    price: 'Desde: $3.322,58 USD',
    image: '/products/bombo-01/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Para la colección Bombo, Nestor Perkal se inspiró en el espíritu auténtico de Argentina. Su nombre resuena como el vibrante latido de un tambor.',
    information: 'Diseñado por Néstor Perkal, resuena como el latido de un tambor argentino. Como jarras invertidas, estas piezas representan el encuentro exitoso entre el cuero y la cerámica de gres, gracias a la excelencia del saber hacer transalpino. Es una colección de objetos que permiten múltiples usos: mesa de centro, mesa de noche, mesa para el té o taburete. Con sus formas reconfortantes y sus colores delicados —tierra, azul cielo, terracota—, Bombo se adapta perfectamente a cualquier decoración.',
    specifications: {
      dimensions: 'D58 × H45 cm',
      materials: [
        'Gres esmaltado en tres colores diferentes.',
        'Cuero genuino italiano curtido al vegetal.',
        'Cordón color natural.',
        'Hecho a mano en Pesaro, Italia.'
      ],
      colors: 'Tierra, azul cielo, terracota.'
    }
  },
  {
    id: 6,
    category: 'Asientos & Mesas',
    title: 'Bombo 02',
    price: 'Desde: $2.624,56 USD',
    image: '/products/bombo-02/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Para la colección Bombo, Nestor Perkal se inspiró en el espíritu auténtico de Argentina. Su nombre resuena como el vibrante latido de un tambor.',
    information: 'Diseñado por Néstor Perkal, resuena como el latido de un tambor argentino. Como jarras invertidas, estas piezas representan el encuentro exitoso entre el cuero y la cerámica de gres, gracias a la excelencia del saber hacer transalpino. Es una colección de objetos que permiten múltiples usos: mesa de centro, mesa de noche, mesa para el té o taburete. Con sus formas reconfortantes y sus colores delicados —tierra, azul cielo, terracota—, Bombo se adapta perfectamente a cualquier decoración.',
    specifications: {
      dimensions: 'D40 × H55 cm',
      materials: [
        'Gres esmaltado en tres colores diferentes.',
        'Cuero genuino italiano curtido al vegetal.',
        'Cordón color natural.',
        'Hecho a mano en Pesaro, Italia.'
      ],
      colors: 'Tierra, azul cielo, terracota.'
    }
  },
  {
    id: 7,
    category: 'Asientos & Mesas',
    title: 'Bombo 03',
    price: 'Desde: $3.699,52 USD',
    image: '/products/bombo-03/main.jpg',
    designerId: 'oscar-maschera',
    description: 'Para la colección Bombo, Nestor Perkal se inspiró en el espíritu auténtico de Argentina. Su nombre resuena como el vibrante latido de un tambor.',
    information: 'Diseñado por Néstor Perkal, resuena como el latido de un tambor argentino. Como jarras invertidas, estas piezas representan el encuentro exitoso entre el cuero y la cerámica de gres, gracias a la excelencia del saber hacer transalpino. Es una colección de objetos que permiten múltiples usos: mesa de centro, mesa de noche, mesa para el té o taburete. Con sus formas reconfortantes y sus colores delicados —tierra, azul cielo, terracota—, Bombo se adapta perfectamente a cualquier decoración.',
    specifications: {
      dimensions: 'D65 × H33 cm',
      materials: [
        'Gres esmaltado en tres colores diferentes.',
        'Cuero genuino italiano curtido al vegetal.',
        'Cordón color natural.',
        'Hecho a mano en Pesaro, Italia.'
      ],
      colors: 'Tierra, azul cielo, terracota.'
    }
  },
  // Coffee Table Collection - Pieter Adam
  {
    id: 8,
    category: 'Mesas',
    title: 'Coffee Table Tall',
    price: 'Desde: $3.897,36 USD',
    image: '/products/coffee-table-tall/main.jpg',
    designerId: 'pieter-adam',
    description: 'Diseño de Pieter Adam, la mesa redonda de la colección Collect(t)able se integra con naturalidad a cualquier espacio. Su tapa, realizada en materiales ecológicos, revela un patrón geométrico que aporta carácter y elegancia atemporal.',
    information: 'La serie Collect(t)able de Pieter Adam celebra un diseño sofisticado que irradia elegancia y distinción. Mesas rectangulares y redondas dialogan con tapas realizadas en materiales sostenibles —bambú, selenita y marquetería de paja— que revelan un refinado lenguaje geométrico.',
    specifications: {
      dimensions: 'D80 × H40 cm',
      materials: [
        'Hierro y bamboo'
      ],
      colors: 'Colores según gama disponible.'
    }
  },
  {
    id: 9,
    category: 'Mesas',
    title: 'Coffe Table',
    price: 'Desde: $4.921,72 USD',
    image: '/products/coffee-table/main.jpg',
    designerId: 'pieter-adam',
    description: 'Diseño de Pieter Adam, la mesa redonda de la colección Collect(t)able se integra con naturalidad a cualquier espacio. Su tapa, realizada en materiales ecológicos, revela un patrón geométrico que aporta carácter y elegancia atemporal.',
    information: 'La serie Collect(t)able de Pieter Adam celebra un diseño sofisticado que irradia elegancia y distinción. Mesas rectangulares y redondas dialogan con tapas realizadas en materiales sostenibles —bambú, selenita y marquetería de paja— que revelan un refinado lenguaje geométrico.',
    specifications: {
      dimensions: 'D100 × H30 cm',
      materials: [
        'Hierro y bamboo'
      ],
      colors: 'Colores según gama disponible.'
    }
  }
];

// Helper function to get designer info
export function getDesignerById(designerId: string): Designer | undefined {
  return designers.find(d => d.id === designerId);
}

// Helper function to get products by designer
export function getProductsByDesigner(designerId: string): Product[] {
  return products.filter(p => p.designerId === designerId);
}
