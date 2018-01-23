import * as React from 'react';
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

interface props {
  navigation: any;
}

const screenHeader: React.SFC<props> = ({ navigation }) => (
  <Header>
    <Left>
      <Button transparent >
        <Icon
          name="menu"
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      </Button>
    </Left>
    <Body>
      <Title>{ navigation.state.routeName }</Title>
    </Body>
    <Right />
  </Header>
);

export default screenHeader;
