import { styled } from '../../../../../config/stitches.config';

export const StyledSkillsCard = styled('div', {
  display: 'flex',
  gap: 10,

  padding: 5,
  borderRadius: '3px',

  transition: 'background ease 130ms',

  '&:hover': {
    background: '$backgroundLight2',
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
