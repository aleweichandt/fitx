export type UserUuid = string;

export type Gender = 'male' | 'female' | 'other';

export type UserMetrics = {
  age: number;
  gender: Gender;
  weight: number; //grams
  height: number; //centimeters
};

export type User = {
  uuid: UserUuid;
  name: string | undefined;
  metrics: UserMetrics | undefined;
};

export type State = {
  loggedUser?: User;
};

export type StateWithUserType = {
  user: State;
};
