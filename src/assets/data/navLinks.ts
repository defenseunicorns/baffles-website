import NavLink from '../../interfaces/NavLink';

interface SocialLinks {
  [key: string]: NavLink;
}
export const namedLinks: SocialLinks = {
  product: {
    url: '/',
    text: 'Product',
  },
  enterpriseSupport: {
    text: 'Contact an Expert',
    url: '/enterprise-support',
  },
  bafflesDocs: {
    target: '_self',
    text: 'Documents',
    rel: 'noopener noreferrer',
    url: 'https://docs.baffles.dev/docs/baffles-overview',
  },
  github: {
    text: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://github.com/defenseunicorns/baffles',
  },
  defenseUnicorns: {
    target: '_blank',
    text: 'Defense Unicorns',
    rel: 'noopener noreferrer',
    url: 'https://defenseunicorns.com',
  },
};

export const navLinks: NavLink[] = [namedLinks.product, namedLinks.bafflesDocs];
