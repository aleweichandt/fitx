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
export type SetNavigationAction = PayloadAction<
  typeof SET_NAVIGATION,
  NavigationContainerRef | null
>;
export type ActionType = typeof SET_NAVIGATION;

export const setNavigation = (
  payload: NavigationContainerRef | null,
): SetNavigationAction => ({
  type: SET_NAVIGATION,
  payload,
});
