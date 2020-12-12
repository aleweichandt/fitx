import React, {useCallback, useState} from 'react';
import {
  Button,
  Choice,
  Headline,
  Layout,
  Paragraph,
  Slider,
} from '../../base-ui';
import {Gender, UserMetrics} from '../../user';
import {Limit} from '../model';

type Props = {
  ageLimit?: Limit;
  onSubmitMetrics: (metrics: Partial<UserMetrics>) => void;
};

const defaultAgeLimit: Limit = {max: 100, min: 5, step: 1};

const SetGenderStep = ({
  ageLimit = defaultAgeLimit,
  onSubmitMetrics,
}: Props) => {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState(ageLimit.min);
  const onSubmit = useCallback(
    () =>
      onSubmitMetrics({
        age,
        gender,
      }),
    [onSubmitMetrics, age, gender],
  );
  return (
    <Layout>
      <Headline>
        Welcome! Before we start please fill the following info below
      </Headline>
      <Paragraph>How you define yourself?</Paragraph>
      <Paragraph>{gender}</Paragraph>
      <Choice
        values={['male', 'female', 'other']}
        selected={gender}
        onValueSelected={setGender}
      />
      <Paragraph>How old are you?</Paragraph>
      <Paragraph>{age} years old</Paragraph>
      <Slider
        step={ageLimit.step}
        minimumValue={ageLimit.min}
        maximumValue={ageLimit.max}
        onValueChange={setAge}
      />
      <Button title="Continue" onPress={onSubmit} />
    </Layout>
  );
};

export default SetGenderStep;
