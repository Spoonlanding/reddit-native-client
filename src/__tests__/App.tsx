import 'react-native';
import * as React from 'react';
import { shallow } from 'enzyme';

// tslint:disable-next-line:import-name
import Root from '../index';

describe('<Root />', () => {
  it('renders as expected', () => {
    const wrapper: any = shallow(<Root />);
    expect(wrapper).toMatchSnapshot();
  });
});
