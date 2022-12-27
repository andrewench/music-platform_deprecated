import React, { FormEvent, useLayoutEffect, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import classNames from 'classnames';
import SimpleBar from 'simplebar-react';

import { Container } from '@components/global';
import { FormSign, InputBox, PrimaryButton } from '@components/ui';
import { SignInFields, FormSignList } from '@data';
import { ISignInFormFields, SignInQueryType } from '@types';
import { RouteService } from '@services';

import { version as AppVersion } from '../../../package.json';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [authStep, setAuthStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register } = useForm<ISignInFormFields>();
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

  const renderSigns = (step: number) => {
    if (!step) {
      const password = FormSignList.forgotPassword;
      const signUp = FormSignList.accountNoExists;

      return (
        <>
          <FormSign
            label={password.label}
            link={{
              href: password.link.href,
              label: password.link.label,
            }}
          />

          <FormSign
            label={signUp.label}
            link={{
              href: signUp.link.href,
              label: signUp.link.label,
            }}
          />
        </>
      );
    }

    if (step === 1 || step === 2) {
      return (
        <FormSign
          label={FormSignList.accountExists.label}
          link={{
            href: FormSignList.accountExists.link.href,
            label: FormSignList.accountExists.link.label,
          }}
        />
      );
    }
  };

  const renderSubmitButton = () => {
    const labels = ['Sign In', 'Sign Up', 'Send email'];

    return (
      <PrimaryButton
        label={labels[authStep]}
        type="submit"
        className={styles.submit}
      />
    );
  };

  const renderAuthSteps = () => {
    return (
      <>
        <form
          onSubmit={(e: FormEvent) => e.preventDefault()}
          className={styles.form}
        >
          {SignInFields.map(({ type, label, field, query: { act } }, idx) => {
            const query = searchParams.get('act') as SignInQueryType;

            return (
              act.includes(query) && (
                <InputBox
                  type={type}
                  label={label}
                  field={field}
                  register={register}
                  key={idx}
                  required
                />
              )
            );
          })}

          {renderSubmitButton()}
        </form>

        {renderSigns(authStep)}
      </>
    );
  };

  return (
    <Container flex className={styles.box}>
      <div className={classNames(styles.preview, styles.block)} />

      <SimpleBar className={styles.scroll}>
        <Container
          flex
          center
          className={classNames(styles.authForm, styles.block)}
        >
          <Container flex column className={styles.formBox}>
            <h1 className={styles.heading} data-version={AppVersion}>
              Music Platform
            </h1>

            {renderAuthSteps()}
          </Container>
        </Container>
      </SimpleBar>
    </Container>
  );
};
