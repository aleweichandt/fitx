import React, {useCallback} from 'react';
import {Box, Headline, Paragraph} from '../../base-ui';
import {Routine} from '../model';

type Props = {
  routine: Routine;
  onPress?: (routine: Routine) => void;
  disabled?: boolean;
};

const RoutineBox = ({routine, onPress = () => {}, disabled = false}: Props) => {
  const onBoxPress = useCallback(() => onPress(routine), [routine, onPress]);
  return (
    <Box onPress={onBoxPress} disabled={disabled}>
      <Headline>{routine.name}</Headline>
      <Paragraph>{routine.description}</Paragraph>
    </Box>
  );
};

export default RoutineBox;
