import * as React from 'react';
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
} from 'native-base';

interface props {
  navigation: any;
}

const HomeScreen: React.SFC<props> = ({ navigation }) => (
  <Container >
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
        <Title>Home</Title>
      </Body>
      <Right />
    </Header>
  </Container>
);

export default HomeScreen;
