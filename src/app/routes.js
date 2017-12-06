import { DrawerNavigator } from 'react-navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';

export const routes = DrawerNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    },
});