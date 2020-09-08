import {
  NavigationContainer,
  NavigationContainerProps,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {currentScreen, setCurrentScreen, setNavigation} from '../model';

const Container = ({onStateChange, ...props}: NavigationContainerProps) => {
  // redux actions & selectors hooks
  const dispatch = useDispatch();
  const setRef = useCallback(
    (r: NavigationContainerRef) => dispatch(setNavigation(r)),
    [dispatch],
  );
  const lastScreen = useSelector(currentScreen);
  const setScreen = useCallback(
    (screen: string | undefined) => {
      if (screen && screen !== lastScreen) {
        dispatch(setCurrentScreen(screen));
      }
    },
    [lastScreen, dispatch],
  );

  // react hooks
  const ref = useRef<NavigationContainerRef>();
  const updateRef = useCallback(
    (current) => {
      if (ref.current !== current) {
        ref.current = current;
        setRef(current);
      }
    },
    [setRef],
  );
  const onReady = useCallback(() => {
    const route = ref.current && ref.current.getCurrentRoute();
    setScreen(route?.name);
  }, [setScreen]);
  const onNavStateChange = useCallback(
    (state) => {
      const route = ref.current && ref.current.getCurrentRoute();
      setScreen(route?.name);
      onStateChange && onStateChange(state);
    },
    [setScreen, onStateChange],
  );
  return (
    <NavigationContainer
      {...props}
      ref={updateRef}
      onReady={onReady}
      onStateChange={onNavStateChange}
    />
  );
};

export default Container;
