import { styled } from '../../config/stitches.config';

export const StyledCardGeneralInformation = styled('div', {
  width: 250,
  height: 150,
  padding: 10,

  borderRadius: '5px',

  background: '$backgroundLight',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  transition: 'all ease 200ms',

  '&:hover': {
    background: '$primary',
    color: 'white',
  },
});

export const TitleCardGeneral = styled('span', {
  fontSize: 15,
});

export const NumberInCenter = styled('h1', {
  fontSize: 60,
  margin: 'auto 0',
});
