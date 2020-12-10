import React, {useCallback, useState} from 'react';
import {Button, Headline, Input, Layout, Paragraph} from '../../base-ui';

type Props = {
  onSubmitUsername: (usernae: string) => void;
};

const SetUsernameStep = ({onSubmitUsername}: Props) => {
  const [username, setUsername] = useState('');
  const onPress = useCallback(() => onSubmitUsername(username), [
    onSubmitUsername,
    username,
  ]);
  return (
    <Layout>
      <Headline>Welcome to FitX</Headline>
      <Paragraph>Before we start, how should we call you?</Paragraph>
      <Input
        value={username}
        autoCompleteType="username"
        textContentType="username"
        onChangeText={setUsername}
      />
      <Button title="Continue" onPress={onPress} />
    </Layout>
  );
};

export default SetUsernameStep;
