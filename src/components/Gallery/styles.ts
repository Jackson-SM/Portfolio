import { styled } from '../../config/stitches.config';

export const ContainerGallery = styled('div', {
  position: 'fixed',
  background: '$backgroundTransparence2',
  padding: 10,

  overflow: 'auto',

  top: 0,
  left: 0,

  zIndex: 99999,

  height: '100%',
  width: '100%',

  opacity: 0,
  pointerEvents: 'none',

  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  },
});

export const ProjectFoldersGallery = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const TitleFolder = styled('h1', {
  color: '$text',
  fontSize: '$3',
});

export const FolderProject = styled('div', {
  padding: 10,

  background: '$backgroundTransparence',

  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const ImagesProjectGallery = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))',
});

export const ImageGallery = styled('div', {
  borderRadius: 5,

  overflow: 'hidden',

  '& img': {
    width: '100%',
  },
});
