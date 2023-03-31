import { styled } from '../../../../../config/stitches.config';

export const CollapseSkill = styled('button', {
  width: '100%',

  outline: 'none',
  border: 'none',
  cursor: 'pointer',

  color: '$text',

  background: '$backgroundLight2',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,

  padding: 20,

  fontSize: '20px',

  position: 'relative',

  overflow: 'hidden',

  '& svg': {
    width: 25,
    height: 25,
  },

  '&::before': {
    content: '',

    position: 'absolute',

    width: '0',
    height: '100%',

    background: '$primary',

    top: '96%',
    left: '0',

    transition: 'all ease 600ms',
  },

  '&:hover': {
    '&::before': {
      width: '100%',
    },
  },
});
