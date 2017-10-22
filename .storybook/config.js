import React from 'react';
import { configure } from '@storybook/react';

// stories.pattern is needed here so that the glob works correctly
function loadStories() {
  require(`glob-loader!./stories.pattern`);
}

configure(loadStories, module);
