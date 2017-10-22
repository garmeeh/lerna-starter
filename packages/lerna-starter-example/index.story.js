import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Button from './src';

const stories = storiesOf('Button', module);

stories
  .add('Standard Button', () => (
    <Button onClick={action('clicked')}>Button</Button>
  ))
  .add('Themed Button', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Button</Button>
    </ThemeProvider>
  ));
