export type ExerciseSchemaUuid = string;

export type BodyGroup = string; //TODO

export type ExerciseStyle = string; //TODO

export type ExerciseSchema = {
  uuid: ExerciseSchemaUuid;
  name: string;
  description: string;
  bodyGroup: BodyGroup;
  style: ExerciseStyle;
  videoUrl: string;
};

export type ExerciseUuid = string;

export type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Exercise = {
  uuid: ExerciseUuid;
  schema: ExerciseSchema;
  workTime: number;
  restTime: number;
  repetitions: number;
  weight: number;
  weekDay: WeekDay;
};
