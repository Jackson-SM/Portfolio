import { styled } from '../../../../../config/stitches.config';

export const ContainerLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
});
export const TopContainerLinks = styled('div', {});

export const ContentLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});
export const LinkFooter = styled('a', {
  textDecoration: 'none',

  color: '$textDark2',

  transition: 'all ease 130ms',

  '&:hover': {
    color: '$textDark',
  },
});
