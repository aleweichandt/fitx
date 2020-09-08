import {NavigationContainerRef} from '@react-navigation/native';

export type NavigationDispatchType = NavigationContainerRef['dispatch'];

export type State = {
  dispatch: NavigationDispatchType | undefined;
  currentScreen: string;
};

export type StateWithNavigationType = {
  navigation: State;
};
