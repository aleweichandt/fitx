import React from 'react';
import {Exercise} from '../model';
import {ExerciseBox} from '../view';

type Props = {};

const RoutineExerciseBox = ({}: Props) => {
  const exercise: Exercise = {
    uuid: 'uuid',
    schema: {
      uuid: 'ExerciseSchemaUuid',
      name: 'string',
      description: 'string',
      bodyGroup: 'BodyGroup',
      style: 'ExerciseStyle',
      videoUrl: 'string',
    },
    workTime: 1,
    restTime: 1,
    repetitions: 1,
    weight: 10,
    weekDay: 1,
  };
  return <ExerciseBox exercise={exercise} />;
};

export default RoutineExerciseBox;
