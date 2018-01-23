import App from '../App';

const initAction: any = App.router.getActionForPathAndParams('Home');
const initialState: any = App.router.getStateForAction(initAction);

export default (state: any = initialState, action: any) => {
  const nextState = App.router.getStateForAction(action, state);

  return nextState || state;
};
