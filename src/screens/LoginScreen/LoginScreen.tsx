import * as React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';

import ScreenHeader from '../../components/ScreenHeader';

interface props {
  navigation: any;
}
const LoginScreen: React.SFC<props> = ({ navigation }) => (
  <Container>
    <ScreenHeader navigation={navigation} />
    <Text>Login Screen</Text>
  </Container>
);

export default LoginScreen;
