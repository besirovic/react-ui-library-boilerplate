import React from 'react';
import {
  storiesOf
} from '@storybook/react';

import Button from '../Button';

const ButtonStory = storiesOf('Button', module);

ButtonStory.add('default', () => (
  <div>
    <Button>Default Button</Button>
  </div>
));
