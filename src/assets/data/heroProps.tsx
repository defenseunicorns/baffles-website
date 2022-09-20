import HowSupportHelps from '../../components/Sections/EnterpriseSupport/HowSupportHelps';
import SupportForm from '../../components/Sections/EnterpriseSupport/SupportForm';
import { HeroProps } from '../../components/Hero/Hero';
import BafflesAppstore from '../../assets/png/baffles-appstore.png';
import React from 'react';

interface HeroPropsData {
  [key: string]: HeroProps;
}
export const heroProps: HeroPropsData = {
  home: {
    header: 'The Airgap Appstore',
    body: 'A free open source tool that enables enables the warfighter to use Any App, Anywhere in ways that improve their quality of life and mission effectiveness.',
    image: BafflesAppstore,
  },
  support: {
    rhsChild: <SupportForm />,
    lhsChild: <HowSupportHelps />,
  },
};
