import React from 'react';

import { TopSection } from '../SectionServices/styles';
import { TitleSection } from '../TitleSection';
import { Contacts } from './Contacts';
import { Networks } from './Networks';
import { ContainerFooter, ContentFooter } from './styles';

export function Footer() {
  return (
    <ContainerFooter>
      <TopSection css={{ padding: 20 }}>
        <TitleSection color="primary" size="sm">
          Contact
        </TitleSection>
      </TopSection>
      <ContentFooter>
        <Contacts />
        <Networks />
      </ContentFooter>
    </ContainerFooter>
  );
}
