import cn from 'classnames';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import { FlexContainer } from '@/components/global';

import { SignInForm } from '@/components/layout';

import { TSignInQuery } from '@/types';

import { RouteService } from '@/services';

import { version as AppVersion } from '../../../package.json';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [authStep, setAuthStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const actQuery = searchParams.get('act') as TSignInQuery;

    const {
      signIn: { redirectTo },
    } = RouteService.supportQueries.pages;

    RouteService.watch(
      {
        page: 'signIn',
        query: actQuery,
      },
      () => {
        navigate(redirectTo);
      }
    );
  }, [searchParams, setSearchParams, navigate]);

  useLayoutEffect(() => {
    const actQuery = searchParams.get('act') as TSignInQuery;

    switch (actQuery) {
      case 'login':
        setAuthStep(0);
        break;

      case 'join':
        setAuthStep(1);
        break;

      case 'restore':
        setAuthStep(2);
        break;
    }
  }, [searchParams, setSearchParams]);

  return (
    <FlexContainer className={styles.box}>
      <div className={cn(styles.preview, styles.block)} />

      <SimpleBar className={styles.scroll}>
        <FlexContainer center className={cn(styles.authForm, styles.block)}>
          <FlexContainer column className={styles.formBox}>
            <h1 className={styles.heading} data-version={AppVersion}>
              Music Platform
            </h1>

            <SignInForm step={authStep} />
          </FlexContainer>
        </FlexContainer>
      </SimpleBar>
    </FlexContainer>
  );
};
