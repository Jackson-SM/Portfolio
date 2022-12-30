import { styled } from '../../../../../config/stitches.config';

export const StyledSkillsCard = styled('div', {
  display: 'flex',
  gap: 10,
});

export const IconContainer = styled('div', {});
export const StyledIcon = styled('div', {
  background: '$backgroundLight',
  padding: 8,

  display: 'flex',
  borderRadius: '50%',

  '& svg': {
    width: 20,
    height: 20,
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
export const ProgressBar = styled('div', {
  width: '100%',
  height: '4px',

  borderRadius: '10px',

  background: '$backgroundLight',

  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '',

    position: 'absolute',

    width: '100%',
    height: '100%',

    top: 0,
    left: 0,
  },
});
