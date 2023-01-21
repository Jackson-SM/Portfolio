import { styled } from '../../../../../config/stitches.config';

export const ContainerContacts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30,

  '@large': {
    flexDirection: 'row',
  },
});
export const ContentContacts = styled('div', {
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
    width: 18,
    height: 18,
  },
});
export const ContentCardContact = styled('div', {});
export const TitleContacts = styled('span', {
  fontSize: '16px',
});
export const StringContact = styled('p', {
  fontSize: '13px',
  color: '$textDark',
});
