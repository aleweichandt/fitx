import React, {useCallback, useState} from 'react';
import {Button, Headline, Layout, Paragraph, Slider} from '../../base-ui';
import {UserMetrics} from '../../user';
import {Limit} from '../model';
import {useTranslation} from '../../localization';
import {STR_ONBOARDING_NS} from '../localization';

type Props = {
  weightLimit?: Limit;
  heightLimit?: Limit;
  onSubmitMetrics: (metrics: Partial<UserMetrics>) => void;
};

const defaultWeightLimit: Limit = {max: 20000, min: 4000, step: 50};
const defaultHeightLimit: Limit = {max: 230, min: 100, step: 1};

const SetMetricsStep = ({
  weightLimit = defaultWeightLimit,
  heightLimit = defaultHeightLimit,
  onSubmitMetrics,
}: Props) => {
  const {t} = useTranslation(STR_ONBOARDING_NS);
  const [weight, setWeight] = useState(weightLimit.min);
  const [height, setHeight] = useState(heightLimit.min);
  const onSubmit = useCallback(
    () =>
      onSubmitMetrics({
        weight,
        height,
      }),
    [onSubmitMetrics, weight, height],
  );
  return (
    <Layout>
      <Headline>{t('metricsStepTitle')}</Headline>
      <Paragraph>{t('setWeightSubtitle')}</Paragraph>
      <Paragraph>{t('weightUnits', {count: weight / 100})}</Paragraph>
      <Slider
        step={weightLimit.step}
        minimumValue={weightLimit.min}
        maximumValue={weightLimit.max}
        onValueChange={setWeight}
      />
      <Paragraph>{t('setHeightSubtitle')}</Paragraph>
      <Paragraph>{t('heightUnits', {count: height / 100})}</Paragraph>
      <Slider
        step={heightLimit.step}
        minimumValue={heightLimit.min}
        maximumValue={heightLimit.max}
        onValueChange={setHeight}
      />
      <Button title={t('continue')} onPress={onSubmit} />
    </Layout>
  );
};

export default SetMetricsStep;
