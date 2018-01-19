import * as React from 'react';
import { Container } from 'native-base';
import { shallow, configure, mount, render } from 'enzyme';

import Root from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Root />', () => {
  it('renders container correctly', () => {
    const wrapper: any = shallow(<Root />);
    expect(wrapper).toHaveLength(1);
  });
});

