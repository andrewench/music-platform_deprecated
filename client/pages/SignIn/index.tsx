import cn from 'classnames';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import { Container } from '@/components/global';

import { SignInForm } from '@/components/layout';

import { SignInQueryType } from '@/types';

import { RouteService } from '@/services';

import { version as AppVersion } from '../../../package.json';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [authStep, setAuthStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const actQuery = searchParams.get('act') as SignInQueryType;

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
    const actQuery = searchParams.get('act') as SignInQueryType;

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
    <Container flex className={styles.box}>
      <div className={cn(styles.preview, styles.block)} />

      <SimpleBar className={styles.scroll}>
        <Container flex center className={cn(styles.authForm, styles.block)}>
          <Container flex column className={styles.formBox}>
            <h1 className={styles.heading} data-version={AppVersion}>
              Music Platform
            </h1>

            <SignInForm step={authStep} />
          </Container>
        </Container>
      </SimpleBar>
    </Container>
  );
};
