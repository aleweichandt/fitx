import React from 'react';
import {RoutineUuid} from '../model';
import {RoutinesList} from '../view';
import UserRoutineBox from './UserRoutineBox';

type Props = {};

const UserRoutinesList = ({}: Props) => {
  const uuids: RoutineUuid[] = ['uuid', '', '', ' '];
  return <RoutinesList routineUuids={uuids} ItemComponent={UserRoutineBox} />;
};

export default UserRoutinesList;
