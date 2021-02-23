import React from 'react';
import {RoutineUuid} from '../../routines';
import {ExercisesList} from '../view';
import RoutineExerciseBox from './RoutineExerciseBox';

type Props = {
  routineUuid: RoutineUuid;
};

const RoutineExercisesList = ({}: Props) => {
  const exerciseUuids = ['1', '2', '3'];
  return (
    <ExercisesList
      exerciseUuids={exerciseUuids}
      ItemComponent={RoutineExerciseBox}
    />
  );
};

export default RoutineExercisesList;
