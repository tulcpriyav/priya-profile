import type { Metadata } from 'next';

import ContactForm from '@/components/Contact/ContactForm';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tulasi Priya Vattikuti for AI and healthcare discussions, research collaborations, speaking opportunities, and STEM initiatives.',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <ContactForm />
      </section>
    </PageWrapper>
  );
}
