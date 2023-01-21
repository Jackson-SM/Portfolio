import { DiscIcon, EnvelopeClosedIcon, MobileIcon, PersonIcon } from '@radix-ui/react-icons';
import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { SiWhatsapp } from 'react-icons/si';

import { TitleContent, TitleIcon } from '../styles';
import {
  CardContact,
  ContainerContacts,
  ContentCardContact,
  ContentContacts,
  IconContacts,
  StringContact,
  TitleContacts,
} from './styles';

export function Contacts() {
  const contacts = [
    { title: 'Location', string: "Rio de Janeiro, Niterói, Ponta D'areia", icon: <GoLocation /> },
    { title: 'E-Mail', string: 'jacksonsilvamagalhaes@hotmail.com', icon: <EnvelopeClosedIcon /> },
    { title: 'Celular', string: '(21) 97424-5954', icon: <MobileIcon /> },
    { title: 'Whatsapp', string: '(21) 97424-5954', icon: <SiWhatsapp /> },
  ];

  return (
    <ContainerContacts>
      <TitleContent>
        <TitleIcon>
          <BiPhone />
        </TitleIcon>
        Contatos
      </TitleContent>
      <ContentContacts>
        {contacts.map((contact) => {
          return (
            <CardContact key={contact.title}>
              <IconContacts>{contact.icon}</IconContacts>
              <ContentCardContact>
                <TitleContacts>{contact.title}</TitleContacts>
                <StringContact>{contact.string}</StringContact>
              </ContentCardContact>
            </CardContact>
          );
        })}
      </ContentContacts>
    </ContainerContacts>
  );
}
