import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Counter } from '../';

const stories = storiesOf('Wire Frame UI', module);

stories
  .add('Default Button', () => (
    <Button onClick={action('button')}>Default Button</Button>
  ))
  .add('Secondary Button', () => (
    <Button onClick={action('button')} type="submit" secondary>
      Secondary Button
    </Button>
  ))
  .add('Counter', () => <Counter />)
  .add('Counter with Initial', () => <Counter initialCount={10} />);
