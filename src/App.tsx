import * as React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Container } from 'native-base';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

interface props {
  dispatch: any;
  nav: any;
}

const app: React.SFC<props> = ({ dispatch, nav }) => (
  <Container >
    <HomeScreen navigation={
      addNavigationHelpers({
        dispatch,
        state: nav,
      })} />
  </Container>
);

const mapDispatchToProps = (dispatch: any) => ({ dispatch });
const mapStateToProps = ({ nav }: any) => ({ nav });

export default connect(mapStateToProps, mapDispatchToProps)(app);
