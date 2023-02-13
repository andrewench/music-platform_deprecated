import { useTranslation } from 'react-i18next';

import { FlexContainer, ViewContainer } from '@/components/global';

import { SectionBox } from '@/components/ui';

import { ContainerGap } from '@/types';

import { PlaylistsList, SectionTitleList } from '@/data';

export const Playlists = () => {
  const { t } = useTranslation();

  return (
    <ViewContainer>
      <FlexContainer column gap={ContainerGap.MEDIUM_LARGE}>
        {SectionTitleList.map(({ label, labelLink, href }, idx) => (
          <SectionBox
            title={{ label: t(label), labelLink: t(labelLink), href }}
            items={PlaylistsList}
            key={idx}
          />
        ))}
      </FlexContainer>
    </ViewContainer>
  );
};
