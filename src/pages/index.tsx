import MaintainedBy from '../components/Sections/MaintainedBy';
import { heroProps } from '../assets/data/heroProps';
import PageLayout from '../components/PageLayout';
import React, { ReactElement } from 'react';
import Hero from '../components/Hero/Hero';

function index(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.home} />
      <MaintainedBy />
    </PageLayout>
  );
}

export default index;
