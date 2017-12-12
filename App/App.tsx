import * as React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Container } from 'native-base';
import { Constants } from 'expo';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

interface AppProps {
  dispatch: any;
  nav: any;
}

const app: React.SFC<AppProps> = ({ dispatch, nav }) => (
  <Container style={expoHeightFix}>
    <HomeScreen navigation={
      addNavigationHelpers({
        dispatch,
        state: nav,
      })} />      
  </Container>
);

const expoHeightFix: any = {
  paddingTop: Constants.platform.ios.platform === 'ios' ? 0 : Constants.statusBarHeight,
};

const mapDispatchToProps = (dispatch: any) => ({ dispatch });
const mapStateToProps = (state: any) => ({
  nav: state.nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(app);
