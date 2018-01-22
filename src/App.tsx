import * as React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Container } from 'native-base';
import {
  addNavigationHelpers,
  DrawerNavigator,
  NavigationContainer,
} from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

import routes from './config/routes';
import SideBar from './screens/SideBar/SideBar';

interface props {
  dispatch: any;
  nav: any;
}

const app: NavigationContainer = DrawerNavigator(routes, {
  contentComponent: (props: any) => <SideBar {...props} />,
});

const mapDispatchToProps = (dispatch: any) => ({ dispatch });
const mapStateToProps = ({ nav }: any) => ({ nav });

export default connect(mapStateToProps, mapDispatchToProps)(app);
