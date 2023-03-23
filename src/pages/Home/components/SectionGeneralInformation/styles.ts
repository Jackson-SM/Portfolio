import { styled } from '../../../../config/stitches.config';

export const ContainerGeneralInformation = styled('section', {});

export const ContentGeneralInformation = styled('div', {
  padding: 40,
  margin: 20,
  borderRadius: 5,
  gap: 10,

  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$backgroundLight2',
});
