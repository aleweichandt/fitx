import {UserUuid} from '../../user';

export type ExerciseUuid = string;

export type Exercise = {
  uuid: ExerciseUuid;
};

export type RoutineUuid = string;

export type RoutineType = string; // const

export type RoutineLevel = string; //const

export type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type DaysPerWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Routine = {
  uuid: RoutineUuid;
  trainerUuid: UserUuid;
  traineeUuid: UserUuid;
  name: string;
  description: string;
  type: RoutineType;
  level: RoutineLevel;
  daysPerWeek: DaysPerWeek;
  exerciseUuids: ExerciseUuid[];
};
