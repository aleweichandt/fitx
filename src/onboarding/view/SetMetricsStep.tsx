import React, {useCallback, useState} from 'react';
import {Button, Headline, Layout, Paragraph, Slider} from '../../base-ui';
import {UserMetrics} from '../../user';
import {Limit} from '../model';

type Props = {
  weightLimit?: Limit;
  heightLimit?: Limit;
  onSubmitMetrics: (metrics: Partial<UserMetrics>) => void;
};

const defaultWeightLimit: Limit = {max: 20000, min: 4000, step: 50};
const defaultHeightLimit: Limit = {max: 230, min: 110, step: 1};

const SetMetricsStep = ({
  weightLimit = defaultWeightLimit,
  heightLimit = defaultHeightLimit,
  onSubmitMetrics,
}: Props) => {
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
      <Headline>
        Nice one! Now please answer the following questions so we know you
        better
      </Headline>
      <Paragraph>How much you weight?</Paragraph>
      <Paragraph>{weight / 100} kgs</Paragraph>
      <Slider
        step={weightLimit.step}
        minimumValue={weightLimit.min}
        maximumValue={weightLimit.max}
        onValueChange={setWeight}
      />
      <Paragraph>What about your height?</Paragraph>
      <Paragraph>{height / 100} mts</Paragraph>
      <Slider
        step={heightLimit.step}
        minimumValue={heightLimit.min}
        maximumValue={heightLimit.max}
        onValueChange={setHeight}
      />
      <Button title="Continue" onPress={onSubmit} />
    </Layout>
  );
};

export default SetMetricsStep;
