import {
  NavigationContainer,
  NavigationContainerProps,
  NavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';
import {setNavigation} from '../model';

const mapDispatchToProps: MapDispatchToProps<
  Props,
  NavigationContainerProps
> = (dispatch) => ({
  setRef: (ref: NavigationContainerRef) => dispatch(setNavigation(ref)),
});

type Props = {
  setRef: (ref: NavigationContainerRef) => void;
};

const Container = ({setRef, ...props}: Props & NavigationContainerProps) => (
  <NavigationContainer {...props} ref={setRef} />
);

export default connect(null, mapDispatchToProps)(Container);
