import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Counter from '../';

const TestCounter = props => (
  <Counter {...props}>
    {({ increase, decrease, count }) => (
      <div>
        <button onClick={decrease} data-testid="decrease">
          -
        </button>
        <div data-testid="count">{count}</div>
        <button onClick={increase} data-testid="increase">
          +
        </button>
      </div>
    )}
  </Counter>
);

afterEach(cleanup);

test('the counter is initialized 0', () => {
  const { getByTestId } = render(<TestCounter />);
  const count = getByTestId('count');
  expect(count).toHaveTextContent(/0/);
});

test('the counter is initialized via prop', () => {
  const { getByTestId } = render(<TestCounter initialCount={9} />);
  const count = getByTestId('count');
  expect(count).toHaveTextContent(/9/);
});

test('when clicked, the counter increments', () => {
  const { getByTestId } = render(<TestCounter />);
  const increase = getByTestId('increase');
  const count = getByTestId('count');
  fireEvent.click(increase);
  expect(count).toHaveTextContent(/1/);
});

test('when clicked, the counter decrements', () => {
  const { getByTestId } = render(<TestCounter />);
  const decrease = getByTestId('decrease');
  const count = getByTestId('count');
  fireEvent.click(decrease);
  expect(count).toHaveTextContent(/-1/);
});
