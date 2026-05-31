import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/tulasipriya/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/tulcpriyav',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/priyeah_v',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'mailto:hello@tulasipriya.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
