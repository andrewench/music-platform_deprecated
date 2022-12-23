import React from 'react';
import { Container, ViewContainer } from '@components/global';
import { SectionBox } from '@components/ui';
import { ContainerGap } from '@types';
import { PlaylistsList } from '@data';

export const Playlists = () => {
  return (
    <ViewContainer>
      <Container flex column gap={ContainerGap.MEDIUM_LARGE}>
        <SectionBox
          title={{
            label: 'Popular',
            labelLink: 'Show more playlists',
            href: '',
          }}
          items={PlaylistsList}
        />
        <SectionBox
          title={{
            label: 'Related',
            labelLink: 'Show more playlists',
            href: '',
          }}
          items={PlaylistsList}
        />
        <SectionBox
          title={{
            label: 'For You',
            labelLink: 'Show more playlists',
            href: '',
          }}
          items={PlaylistsList}
        />
      </Container>
    </ViewContainer>
  );
};
