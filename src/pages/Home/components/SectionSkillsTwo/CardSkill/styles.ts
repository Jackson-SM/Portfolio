import { styled } from '../../../../../config/stitches.config';

export const StyledSkillsCard = styled('div', {
  display: 'flex',
  gap: 10,

  padding: 5,
  borderRadius: '3px',

  transition: 'background ease 130ms',

  position: 'relative',

  zIndex: '1',

  '&:hover': {
    background: '$backgroundLight2',
  },

  '&::after': {
    content: '',

    position: 'absolute',

    background: '$tertiary',
    width: 10,
    height: 10,

    borderRadius: '50%',

    left: 'calc(100% - 4px)',
    top: 'calc(50% - 5px)',

    zIndex: '-1',
  },
});

export const IconContainer = styled('div', {});

export const StyledIcon = styled('div', {
  background: '$backgroundLight2',
  padding: 8,

  display: 'flex',
  borderRadius: '50%',

  '& svg': {
    width: 22,
    height: 22,
  },
});

export const ContentSkillCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});
export const TitleSkillCard = styled('span', {
  fontSize: '16px',
  fontFamily: 'Mulish',
});
export const DescriptionCard = styled('p', {
  fontSize: '13px',
  color: '$textDark',

  maxWidth: '300px',
});
