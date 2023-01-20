import { styled } from '../../../../../config/stitches.config';

export const ContainerNetworks = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: 10,
});

export const NetworkCard = styled('a', {
  padding: '5px 90px 5px 20px',

  borderRadius: '5px',

  display: 'flex',
  alignItems: 'center',
  gap: 10,

  textDecoration: 'none',
  color: 'white',

  background: 'linear-gradient(to left, $primary, transparent 90%)',
});

export const TitleNetwork = styled('span', {});
export const IconNetwork = styled('div', {
  padding: 5,

  background: '$primary',

  display: 'flex',
  alignItems: 'center',

  borderRadius: '10px',

  '& svg': {
    width: 20,
    height: 20,

    color: 'white',
  },
});
