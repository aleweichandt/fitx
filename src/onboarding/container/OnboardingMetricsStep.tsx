import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {UserMetrics} from '../../user';
import {submitMetrics} from '../model';
import {SetMetricsStep} from '../view';

type Props = {};

const OnboardingMetricsStep = ({}: Props) => {
  const dispatch = useDispatch();
  const onSubmitMetrics = useCallback(
    (metrics: Partial<UserMetrics>) => dispatch(submitMetrics(metrics)),
    [dispatch],
  );
  return <SetMetricsStep onSubmitMetrics={onSubmitMetrics} />;
};

export default OnboardingMetricsStep;
