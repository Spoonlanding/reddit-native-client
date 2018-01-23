import 'react-native';
import * as React from 'react';
import { shallow } from 'enzyme';

// tslint:disable-next-line:import-name
import Root from '../index';

describe('<Root />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Root />);
  });

  it('renders AppLoading before fonts have loaded', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders component when fonts have loaded', () => {
    wrapper.setState({ isReady: true });
    expect(wrapper).toMatchSnapshot();
  });
});
