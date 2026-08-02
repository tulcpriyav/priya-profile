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
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Publications & Research',
    path: '/writing',
  },
  {
    label: 'Judging & Volunteering',
    path: '/judging',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
