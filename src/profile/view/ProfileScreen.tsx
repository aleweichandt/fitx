import React from 'react';
import {User} from '../../user';
import {Headline, Layout, Paragraph} from '../../base-ui';

type Props = {
  user: User;
};

const ProfileScreen = ({user}: Props) => (
  <Layout>
    <Headline>{user.name}</Headline>
    <Headline>Base Info:</Headline>
    <Paragraph>{`Gender: ${user.metrics?.gender || ''}`}</Paragraph>
    <Paragraph>{`Age: ${user.metrics?.age || ''} years old`}</Paragraph>
    <Paragraph>{`Height: ${(user.metrics?.height || 0) / 100} Mts`}</Paragraph>
    <Paragraph>{`Weight: ${(user.metrics?.weight || 0) / 100} Kgs`}</Paragraph>
  </Layout>
);

export default ProfileScreen;
