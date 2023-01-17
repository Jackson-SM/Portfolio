import React from 'react';

import { itemsCarousel } from '../Carousel';
import {
  ContainerGallery,
  FolderProject,
  ImageGallery,
  ImagesProjectGallery,
  ProjectFoldersGallery,
  TitleFolder,
} from './styles';

type GalleryProps = React.ComponentProps<typeof ContainerGallery> & {
  imgsInfo: itemsCarousel[];
  galleryOpen: boolean;
};

export function Gallery({ imgsInfo, galleryOpen, ...props }: GalleryProps) {
  return (
    <ContainerGallery {...props} open={galleryOpen}>
      <ProjectFoldersGallery>
        {imgsInfo.map((img) => {
          return (
            <FolderProject key={img.title}>
              <TitleFolder>{img.title}</TitleFolder>
              <ImagesProjectGallery>
                <ImageGallery key={img.title}>{img.cover}</ImageGallery>
              </ImagesProjectGallery>
            </FolderProject>
          );
        })}
      </ProjectFoldersGallery>
    </ContainerGallery>
  );
}
