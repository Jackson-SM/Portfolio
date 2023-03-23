import { BsCodeSlash } from 'react-icons/bs';

import { styled } from '../../../../../config/stitches.config';

export const StyledCardProject = styled('div', {
  width: 300,
  height: 150,
  background: '$backgroundLight2',
  padding: 10,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  margin: '0 auto',

  borderRadius: '5px',

  boxShadow: `4px 4px 10px 2px rgba(106, 106, 106, 0.27)`,
});

export const TitleCardProject = styled('span', {
  fontSize: '22px',
  color: '$textDark',
});

export const IconContainerCard = styled('div', {
  display: 'flex',
});

export const IconCardProject = styled(BsCodeSlash, {
  width: 20,
  height: 20,
});

export const LinkCardProject = styled('a', {
  fontSize: '$2',

  display: 'flex',
  alignItems: 'center',

  gap: 5,
  width: 'max-content',

  textDecoration: 'none',
  color: '$textDark',

  transition: 'color ease 200ms',

  '&:hover': {
    color: '$primary',
  },
});
