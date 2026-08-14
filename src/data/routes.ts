export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Tulasi Priya Vattikuti',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Experience',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Research',
    path: '/writing',
  },
  {
    label: 'Leadership',
    path: '/judging',
  },
  {
    label: 'Book',
    path: '/book',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
