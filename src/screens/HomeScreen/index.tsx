import { DrawerNavigator, NavigationContainer } from 'react-navigation';
import * as React from 'react';

import routes from '../../config/routes';
import SideBar from '../SideBar/SideBar';

const HomeScreen: NavigationContainer = DrawerNavigator(routes, {
  contentComponent: (props: any) => <SideBar {...props} />,
});

export default HomeScreen;
