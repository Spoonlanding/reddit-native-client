import * as React from 'react';
import { Container } from 'native-base';

import ScreenHeader from '../../components/ScreenHeader';

interface props {
  navigation: any;
}

const HomeScreen: React.SFC<props> = ({ navigation }) => (
  <Container >
    <ScreenHeader navigation={navigation} />
  </Container>
);

export default HomeScreen;
