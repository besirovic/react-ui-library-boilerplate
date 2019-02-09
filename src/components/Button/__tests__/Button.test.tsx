import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

test('first test', () => {
  const wrapper = shallow(<Button>Default Button</Button>);

  expect(wrapper).toMatchSnapshot();
});
