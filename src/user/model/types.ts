export type User = {};

export type Credentials = {
  // username: string;
  // password: string;
};

export type State = {
  loggedUser?: User;
  loggingIn: boolean;
  error?: Error;
};

export type StateWithUserType = {
  user: State;
};
