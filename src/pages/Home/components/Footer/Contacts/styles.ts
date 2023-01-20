import { styled } from '../../../../../config/stitches.config';

export const ContainerContacts = styled('div', {
  background: '$backgroundLight',
  borderRadius: 5,
  padding: 20,

  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const CardContact = styled('div', {
  display: 'flex',
  gap: 10,
});
export const IconContacts = styled('div', {
  '& svg': {
    width: 20,
    height: 20,
  },
});
export const ContentContact = styled('div', {});
export const TitleContacts = styled('span', {
  fontSize: '18px',
});
export const StringContact = styled('p', {
  fontSize: '13px',
  color: '$textDark',
});
