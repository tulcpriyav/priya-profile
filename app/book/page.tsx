import type { Metadata } from 'next';

import BookLandingPage from '@/components/Book/BookLandingPage';

export const metadata: Metadata = {
  title: 'Book',
  description:
    'Enterprise AI on AWS - a forthcoming book by Tulasi Priya Vattikuti on data platforms, MLOps, and Generative AI.',
};

export default function BookPage() {
  return <BookLandingPage />;
}
