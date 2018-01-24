import * as React from 'react';
import { Container } from 'native-base';

import ScreenHeader from '../../components/ScreenHeader';
import FrontPage from '../../components/FrontPage';

interface props {
  navigation: any;
}

const HomeScreen: React.SFC<props> = ({ navigation }) => (
  <Container >
    <ScreenHeader navigation={navigation} />
    <FrontPage />
  </Container>
);

export default HomeScreen;
