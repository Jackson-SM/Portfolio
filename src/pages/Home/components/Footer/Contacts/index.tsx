import { EnvelopeClosedIcon, MobileIcon } from '@radix-ui/react-icons';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';

import { CardContact, ContainerContacts, ContentContact, IconContacts, StringContact, TitleContacts } from './styles';

export function Contacts() {
  const contacts = [
    { title: 'E-Mail', string: 'jacksonsilvamagalhaes@hotmail.com', icon: <EnvelopeClosedIcon /> },
    { title: 'Celular', string: '(21) 97424-5954', icon: <MobileIcon /> },
    { title: 'Whatsapp', string: '(21) 97424-5954', icon: <SiWhatsapp /> },
  ];

  return (
    <ContainerContacts>
      {contacts.map((contact) => {
        return (
          <CardContact key={contact.title}>
            <IconContacts>{contact.icon}</IconContacts>
            <ContentContact>
              <TitleContacts>{contact.title}</TitleContacts>
              <StringContact>{contact.string}</StringContact>
            </ContentContact>
          </CardContact>
        );
      })}
    </ContainerContacts>
  );
}
