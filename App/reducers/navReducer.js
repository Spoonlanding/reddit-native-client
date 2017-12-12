import HomeScreenRouter from "../screens/HomeScreen";

const initialState = HomeScreenRouter.router.getStateForAction(HomeScreenRouter.router.getActionForPathAndParams('Home'));

export default (state = initialState, action) => {
    const nextState = HomeScreenRouter.router.getStateForAction(action, state);

    return nextState || state;
};