import NavLink from '../../interfaces/NavLink';

export const navLinks: NavLink[] = [
  {
    url: '/',
    text: 'Product',
  },
  {
    url: 'https://defenseunicorns.github.io/zarf/examples',
    text: 'Examples',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    url: 'https://defenseunicorns.github.io/zarf',
    text: 'Documents',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

interface SocialLinks {
  [key: string]: NavLink;
}
export const socialLinks: SocialLinks = {
  slack: {
    url: '/slack',
    text: 'Slack',
  },
  github: {
    url: 'https://github.com/defenseunicorns/zarf',
    text: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
