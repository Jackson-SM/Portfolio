import React from 'react';

import { TopSection } from '../SectionServices/styles';
import { TitleSection } from '../TitleSection';
import { Contacts } from './Contacts';
import { Links } from './Links';
import { Networks } from './Networks';
import { ContainerFooter, ContentFooter } from './styles';

export function Footer() {
  return (
    <ContainerFooter id="contact">
      <TopSection css={{ padding: 20 }}>
        <TitleSection color="primary" size="sm">
          Contact
        </TitleSection>
      </TopSection>
      <ContentFooter>
        <Contacts />
        <Networks />
        <Links />
      </ContentFooter>
    </ContainerFooter>
  );
}
