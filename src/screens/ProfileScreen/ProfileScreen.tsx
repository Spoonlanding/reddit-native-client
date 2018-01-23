import * as React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';

import ScreenHeader from '../../components/ScreenHeader';

interface props {
  navigation: any;
}

const ProfileScreen: React.SFC<props> = ({ navigation }) => (
  <Container>
    <ScreenHeader navigation={navigation}/>
    <Text>Profile Screen</Text>
  </Container>
);

export default ProfileScreen;
