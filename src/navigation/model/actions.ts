import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {PayloadAction} from '../../redux-helpers';

export const {setParams, navigate, goBack} = CommonActions;
export const {replace, push, pop, popToTop} = StackActions;
// export const {openDrawer, closeDrawer, toggleDrawer} = DrawerActions;

export const SET_NAVIGATION = 'NAVIGATION/SET_NAVIGATION';
export type SetNavigation = PayloadAction<
  typeof SET_NAVIGATION,
  NavigationContainerRef | null
>;

export const SET_CURRENT_SCREEN = 'NAVIGATION/SET_CURRENT_SCREEN';
export type SetCurrentScreen = PayloadAction<typeof SET_CURRENT_SCREEN, string>;

export const setNavigation = (
  payload: NavigationContainerRef | null,
): SetNavigation => ({
  type: SET_NAVIGATION,
  payload,
});

export const setCurrentScreen = (payload: string): SetCurrentScreen => ({
  type: SET_CURRENT_SCREEN,
  payload,
});
