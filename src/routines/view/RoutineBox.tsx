import React from 'react';
import {Box, Headline, Paragraph} from '../../base-ui';
import {Routine} from '../model';

type Props = {
  routine: Routine | undefined;
};

const RoutineBox = ({routine}: Props) =>
  routine ? (
    <Box>
      <Headline>{routine.name}</Headline>
      <Paragraph>{routine.description}</Paragraph>
    </Box>
  ) : null;

export default RoutineBox;
