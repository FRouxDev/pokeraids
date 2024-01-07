import type { NavbarItem } from '$/components/layout/navbar/navbar.type';

export const pagesItems: NavbarItem[] = [
  {
    path: '/',
    label: 'Accueil',
  },
  {
    path: '/raid-builds',
    label: 'Builds de raids',
  },
  {
    path: '/events',
    label: 'Événements',
  },
  {
    path: '/pokedex',
    label: 'Pokédex',
  },
  {
    label: 'Guides',
    subItems: [
      {
        path: '/guides/craft',
        label: 'Monter un Pokémon',
      },
      {
        path: '/guides/raids',
        label: 'Mécaniques de raids',
      },
    ],
  },
];
