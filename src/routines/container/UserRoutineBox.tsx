import React from 'react';
import {Routine, RoutineUuid} from '../model';
import {RoutineBox} from '../view';

const mockRoutine: Routine = {
  uuid: 'uuid',
  trainerUuid: 'uuid',
  traineeUuid: 'uuid',
  name: 'Mock',
  description: 'A basic mocked routine with no exercises',
  type: 'fit',
  level: 'low',
  daysPerWeek: 3,
  exerciseUuids: [],
};

type Props = {
  uuid: RoutineUuid;
};

const UserRoutineBox = ({}: Props) => {
  const routine: Routine | undefined = mockRoutine;
  return <RoutineBox routine={routine} />;
};

export default UserRoutineBox;
