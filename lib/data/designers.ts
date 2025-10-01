export interface Designer {
  id: number;
  name: string;
  image: string;
  href: string;
}

export const designers: Designer[] = [
  {
    id: 1,
    name: 'Oscar Maschera',
    image: '/designers/oscar-maschera/profile.png',
    href: '/productos',
  },
  {
    id: 2,
    name: 'Arte Brotto',
    image: '/designers/arte-brotto/profile.png',
    href: '/productos',
  },
  {
    id: 3,
    name: 'Pieter Adams',
    image: '/designers/pieter-adams/profile.png',
    href: '/productos',
  },
];
