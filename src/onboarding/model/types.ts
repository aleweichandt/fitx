export type State = {
  step: 'username' | 'metrics' | 'done';
};

export type StateWithOnboardingType = {
  onboarding: State;
};
