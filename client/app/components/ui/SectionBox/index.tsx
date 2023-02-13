import cn from 'classnames';

import { FlexContainer } from '@/components/global';

import { PlaylistItem, SectionTitle } from '@/components/ui';

import { ContainerGap, IPlaylistData } from '@/types';

import styles from './SectionBox.module.scss';

interface ISectionBox {
  title: {
    label: string;
    labelLink: string;
    href: string;
  };
  items: IPlaylistData[];
  className?: string;
}

export const SectionBox = ({ items, title, className }: ISectionBox) => {
  return (
    <div className={cn(styles.box, className)}>
      <SectionTitle {...title} />

      <FlexContainer grid gap={ContainerGap.LARGE}>
        {items.map((props, idx) => (
          <PlaylistItem {...props} key={idx} />
        ))}
      </FlexContainer>
    </div>
  );
};
