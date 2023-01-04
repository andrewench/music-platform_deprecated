import { PlaylistsList, SectionTitleList } from '@data';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, ViewContainer } from '@components/global';

import { SectionBox } from '@components/ui';

import { ContainerGap } from '@types';

export const Playlists = () => {
  const { t } = useTranslation();

  return (
    <ViewContainer>
      <Container flex column gap={ContainerGap.MEDIUM_LARGE}>
        {SectionTitleList.map(({ label, labelLink, href }, idx) => (
          <SectionBox
            title={{ label: t(label), labelLink: t(labelLink), href }}
            items={PlaylistsList}
            key={idx}
          />
        ))}
      </Container>
    </ViewContainer>
  );
};
