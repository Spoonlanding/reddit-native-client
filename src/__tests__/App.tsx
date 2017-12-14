import * as React from 'react';
import { Container } from 'native-base';
import { shallow } from 'enzyme';

import Root from '../index';

describe('<Root />', () => {
  it('renders container correctly', () => {
    const wrapper: any = shallow(<Root />);
    expect(wrapper.find(Container)).toHaveLength(1);
  });
});
