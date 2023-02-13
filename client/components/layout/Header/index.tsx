import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { FlexContainer } from '@/components/global';

import { HeaderLink } from '@/components/ui';

import { FlexAlignOnMainAxis } from '@/types';

import { HeaderLinks } from '@/data';

import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header className={styles.box}>
      <FlexContainer
        align={FlexAlignOnMainAxis.CENTER}
        className={styles.content}
      >
        {HeaderLinks.map(({ to, label }, idx) => (
          <HeaderLink
            active={location.pathname === to}
            to={to}
            label={t(label)}
            key={idx}
          />
        ))}
      </FlexContainer>
    </header>
  );
};
