import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {submitUsername} from '../model';
import {SetUsernameStep} from '../view';

type Props = {};

const OnboardingUsernameStep = ({}: Props) => {
  const dispatch = useDispatch();
  const onSubmitUsername = useCallback(
    (username: string) => dispatch(submitUsername(username)),
    [dispatch],
  );
  return <SetUsernameStep onSubmitUsername={onSubmitUsername} />;
};

export default OnboardingUsernameStep;
