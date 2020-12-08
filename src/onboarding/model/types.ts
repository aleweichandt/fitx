export type Step = 'username' | 'metrics' | 'done';

export type State = {
  step: Step;
};

export type StateWithOnboardingType = {
  onboarding: State;
};
