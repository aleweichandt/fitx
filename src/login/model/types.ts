export type Credentials = {
  // username: string;
  // password: string;
};

export type State = {
  loggingIn: boolean;
  error?: Error;
};

export type StateWithLoginType = {
  login: State;
};
