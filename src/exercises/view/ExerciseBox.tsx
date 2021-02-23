import React from 'react';
import styled from 'styled-components/native';
import {Headline, Paragraph} from '../../base-ui';
import {Exercise} from '../model';

const Box = styled.View`
  width: 100%;
  flex: 1;
  background-color: #00f;
`;

type Props = {
  exercise: Exercise;
};

const ExerciseBox = ({exercise}: Props) => (
  <Box>
    <Headline>{exercise.schema.name}</Headline>
    <Paragraph>{exercise.schema.description}</Paragraph>
  </Box>
);

export default ExerciseBox;
