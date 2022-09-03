import HowSupportHelps from '../../components/Sections/EnterpriseSupport/HowSupportHelps';
import SupportForm from '../../components/Sections/EnterpriseSupport/SupportForm';
import { HeroProps } from '../../components/Hero/Hero';
import ZarfEdge from '../../assets/png/zarf-edge.png';
import React from 'react';

interface HeroPropsData {
  [key: string]: HeroProps;
}
export const heroProps: HeroPropsData = {
  home: {
    header: 'DevSecOps for Airgap',
    body: 'A free open source tool that enables continuous software delivery on disconnected networks.',
    image: ZarfEdge,
  },
  support: {
    rhsChild: <SupportForm />,
    lhsChild: <HowSupportHelps />,
  },
};
