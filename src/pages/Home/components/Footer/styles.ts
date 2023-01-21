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

export const TitleContent = styled('span', {
  color: '$textDark',
  fontSize: '20px',

  display: 'flex',
  alignItems: 'center',
  gap: 10,

  '& svg': {
    width: 15,
    height: 15,
    color: '$primary',
  },
});
export const TitleIcon = styled('div', {
  padding: 5,
  borderRadius: '50%',

  display: 'flex',

  border: '1px solid $primary',
});
