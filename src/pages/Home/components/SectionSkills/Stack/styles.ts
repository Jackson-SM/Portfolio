import { styled } from '../../../../../config/stitches.config';

export const StyledStack = styled('div', {
  padding: 15,
  borderRadius: 3,
});

export const StringStack = styled('span', {
  fontSize: 25,
});

export const StringProjectAmount = styled('span', {
  fontSize: 11,
  alignSelf: 'end',
});

export const ContainerStackAndAmountProject = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
});

export const StyledIconStack = styled('div', {
  background: '$background',

  padding: 10,
  width: 'max-content',
  borderRadius: '50%',
  marginTop: 'calc(-15px - 15px)',
  marginLeft: 'calc(100% - 15px)',

  display: 'flex',

  '& svg': {
    width: 20,
    height: 20,
  },
});

export const ContainerStacks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  padding: 35,
  gap: 20,
});
