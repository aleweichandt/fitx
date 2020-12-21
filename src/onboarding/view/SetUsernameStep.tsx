import React, {useCallback, useState} from 'react';
import {Button, Headline, Input, Layout, Paragraph} from '../../base-ui';
import {useTranslation} from '../../localization';
import {STR_ONBOARDING_NS} from '../localization';

type Props = {
  onSubmitUsername: (usernae: string) => void;
};

const SetUsernameStep = ({onSubmitUsername}: Props) => {
  const {t} = useTranslation(STR_ONBOARDING_NS);
  const [username, setUsername] = useState('');
  const onPress = useCallback(() => onSubmitUsername(username), [
    onSubmitUsername,
    username,
  ]);
  return (
    <Layout>
      <Headline>{t('welcome_onboard')}</Headline>
      <Paragraph>{t('set_username_subtitle')}</Paragraph>
      <Input
        value={username}
        autoCompleteType="username"
        textContentType="username"
        onChangeText={setUsername}
      />
      <Button title={t('continue')} onPress={onPress} />
    </Layout>
  );
};

export default SetUsernameStep;
