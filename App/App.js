import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Container, Button, Header, Content, Footer, Left, Right, Body, Icon, Title, Drawer } from 'native-base';
import { Constants } from 'expo';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from "./screens/HomeScreen";

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


// export default class App extends React.Component {
//   render() {
//     return (
//         <Container style={expoHeightFix}>
//           <Header>
//             <Left>
//               <Button transparent >
//                 <Icon name='menu' />
//               </Button>
//             </Left>
//             <Body>
//               <Title>Header</Title>
//             </Body>
//             <Right />
//           </Header>
//           <Content>
//             <Text>Open up App.js to start working on your app!</Text>
//             <Text>Changes you make will automatically reload.</Text>
//             <Text style={{ color: 'blue' }}>Shake your phone to open the developer menu.</Text>
//           </Content>
//           <Footer></Footer>
//         </Container>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const expoHeightFix = {
  paddingTop: Constants.Platform === 'ios' ? 0 : Constants.statusBarHeight
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(App);