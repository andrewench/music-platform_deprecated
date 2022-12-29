import classNames from 'classnames';

import React from 'react';

import { Container } from '@components/global';

import { PlaylistItem, SectionTitle } from '@components/ui';

import { ContainerGap, IPlaylistData } from '@types';

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
    <div className={classNames(styles.box, className)}>
      <SectionTitle {...title} />

      <Container flex grid gap={ContainerGap.LARGE}>
        {items.map((props, idx) => (
          <PlaylistItem {...props} key={idx} />
        ))}
      </Container>
    </div>
  );
};
