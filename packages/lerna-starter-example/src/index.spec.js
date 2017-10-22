import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Button from '.';

describe(':: Button Component ::', () => {
  it('renders without any props', () => {
    const wrapper = mount(<Button />);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
  });

  it('renders with children passed in', () => {
    const wrapper = mount(
      <Button>
        <span className="is-child">Button Child</span>
      </Button>
    );

    const child = wrapper.find('.is-child');
    expect(child.length).toBe(1);
  });

  it('onClick events are handled', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} />);

    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
