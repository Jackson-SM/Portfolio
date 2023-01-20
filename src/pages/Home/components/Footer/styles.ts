import { styled } from '../../../../config/stitches.config';

export const ContainerFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
});

export const ContentFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',

  background: '$backgroundLight2',
  padding: 50,
  borderTopLeftRadius: '130px',
});
