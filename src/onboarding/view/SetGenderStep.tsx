import React, {useCallback, useState} from 'react';
import {useTranslation} from '../../localization';
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
import {STR_ONBOARDING_NS} from '../localization';

type Props = {
  ageLimit?: Limit;
  onSubmitMetrics: (metrics: Partial<UserMetrics>) => void;
};

const defaultAgeLimit: Limit = {max: 100, min: 5, step: 1};

const SetGenderStep = ({
  ageLimit = defaultAgeLimit,
  onSubmitMetrics,
}: Props) => {
  const {t} = useTranslation(STR_ONBOARDING_NS);
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
      <Headline>{t('genderStepTitle')}</Headline>
      <Paragraph>{t('setGenderSubtitle')}</Paragraph>
      <Paragraph>{t(gender)}</Paragraph>
      <Choice
        t={t}
        values={['male', 'female', 'other']}
        selected={gender}
        onValueSelected={setGender}
      />
      <Paragraph>{t('setAgeSubtitle')}</Paragraph>
      <Paragraph>{t('ageUnits', {count: age})}</Paragraph>
      <Slider
        step={ageLimit.step}
        minimumValue={ageLimit.min}
        maximumValue={ageLimit.max}
        onValueChange={setAge}
      />
      <Button title={t('continue')} onPress={onSubmit} />
    </Layout>
  );
};

export default SetGenderStep;
