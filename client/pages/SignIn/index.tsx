import { FormSignList, SignInFields } from '@data';
import classNames from 'classnames';

import React, {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import { Container } from '@components/global';

import { FormSign, InputBox, PrimaryButton } from '@components/ui';

import { ISignInFormFields, SignInQueryType } from '@types';

import { RouteService } from '@services';

import { useAppDispatch } from '@hooks';

import { setUserField } from '@slices';

import { version as AppVersion } from '../../../package.json';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [authStep, setAuthStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm<ISignInFormFields>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const submitHandler: SubmitHandler<ISignInFormFields> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

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
            label={t(password.label)}
            link={{
              href: password.link.href,
              label: `${t(password.link.label)}.`,
            }}
          />

          <FormSign
            label={t(signUp.label)}
            link={{
              href: signUp.link.href,
              label: `${t(signUp.link.label)}.`,
            }}
          />
        </>
      );
    }

    if (step === 1 || step === 2) {
      return (
        <FormSign
          label={t(FormSignList.accountExists.label)}
          link={{
            href: FormSignList.accountExists.link.href,
            label: `${t(FormSignList.accountExists.link.label)}.`,
          }}
        />
      );
    }
  };

  const renderSubmitButton = () => {
    const labels = [
      t('common.signIn'),
      t('common.signUp'),
      t('common.sendCode'),
    ];

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
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          {SignInFields.map(({ type, label, field, query: { act } }, idx) => {
            const query = searchParams.get('act') as SignInQueryType;

            return (
              act.includes(query) && (
                <InputBox
                  type={type}
                  label={t(label)}
                  field={field}
                  register={register}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setUserField({
                        key: field,
                        value: e.target.value,
                      })
                    )
                  }
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
