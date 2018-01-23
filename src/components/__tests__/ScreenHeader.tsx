import 'react-native';
import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenHeader from '../ScreenHeader';

describe('<ScreenHeader />', () => {
  let wrapper: any;
  const navigation: any = {
    navigate: jest.fn(),
    state: {
      routeName: 'some route',
    },
  };

  beforeEach(() => {
    wrapper = shallow(<ScreenHeader navigation={navigation} />);
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('opens drawer when menu icon is pressed', () => {
    wrapper.find({ name: 'menu' }).simulate('Press');
    expect(navigation.navigate).toHaveBeenCalledWith('DrawerOpen');
  });
});
