import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {UserMetrics} from '../../user';
import {submitMetrics} from '../model';
import {SetGenderStep} from '../view';

type Props = {};

const OnboardingGenderStep = ({}: Props) => {
  const dispatch = useDispatch();
  const onSubmitMetrics = useCallback(
    (metrics: Partial<UserMetrics>) => dispatch(submitMetrics(metrics)),
    [dispatch],
  );
  return <SetGenderStep onSubmitMetrics={onSubmitMetrics} />;
};

export default OnboardingGenderStep;
