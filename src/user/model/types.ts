export type User = {
  uuid: string;
};

export type State = {
  loggedUser?: User;
};

export type StateWithUserType = {
  user: State;
};
