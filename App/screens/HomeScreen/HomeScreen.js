import React from 'react';
import { Container, Button, Header, Content, Footer, Left, Right, Body, Icon, Title, Drawer } from 'native-base';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
  }
}