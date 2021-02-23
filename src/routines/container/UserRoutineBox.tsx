import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigation';
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
  const dispatch = useDispatch();
  const onPress = useCallback(
    (r: Routine) =>
      dispatch(navigate('routineExercises', {routineUuid: r.uuid})),
    [dispatch],
  );
  return <RoutineBox routine={routine} onPress={onPress} />;
};

export default UserRoutineBox;
