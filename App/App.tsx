import * as React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {
  Container,
  Button,
  Header,
  Content,
  Footer,
  Left,
  Right,
  Body,
  Icon,
  Title,
  Drawer,
} from 'native-base';
import { Constants } from 'expo';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './screens/HomeScreen';

class App extends React.Component {
  render() {
    return (
      <Container style={expoHeightFix}>
        <HomeScreen navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })} />      
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const expoHeightFix = {
  paddingTop: Constants.platform.ios.platform === 'ios' ? 0 : Constants.statusBarHeight,
};

const mapStateToProps = (state: any) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App)