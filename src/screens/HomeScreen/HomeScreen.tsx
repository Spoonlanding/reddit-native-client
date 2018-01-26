import * as React from 'react';
import { Container, Content } from 'native-base';

import ScreenHeader from '../../components/ScreenHeader';
import FrontPage from '../../components/FrontPage';

interface props {
  navigation: any;
}

const HomeScreen: React.SFC<props> = ({ navigation }) => (
  <Container >
    <ScreenHeader navigation={navigation} />
    <Content>
      <FrontPage />
    </Content>
  </Container>
);

export default HomeScreen;
