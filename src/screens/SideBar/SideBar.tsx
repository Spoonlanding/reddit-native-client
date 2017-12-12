import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
} from 'native-base';

import routes from '../../config/routes';

interface props {
  navigation: any;
}

const SideBar: React.SFC<props> = ({ navigation }) => (
  <Container>
    <Content>
      <List
        dataArray={Object.keys(routes)}
        renderRow={data => {
          return (
            <ListItem
              button
              onPress={() => navigation.navigate(data)}
            >
              <Text>{data}</Text>
            </ListItem>
          );
        }}
      />
    </Content>
  </Container>
);

export default SideBar;
