import HomeScreen from '../screens/HomeScreen';

const initAction: any = HomeScreen.router.getActionForPathAndParams('Home');
const initialState: any = HomeScreen.router.getStateForAction(initAction);

export default (state: any = initialState, action: any) => {
  const nextState = HomeScreen.router.getStateForAction(action, state);

  return nextState || state;
};
