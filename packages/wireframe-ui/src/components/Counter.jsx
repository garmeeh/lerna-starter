import React from 'react';
import styled from 'styled-components';
import Counter from '@gmdev/counter';

import { Button } from '../';

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  color: #000000;
  min-width: 28px;
  font-weight: bold;
  padding: 0 4px;
  font-size: 24px;
  text-align: center;
`;

const ExportableCounter = props => (
  <Counter {...props}>
    {({ increase, decrease, count }) => (
      <CounterWrapper>
        <Button onClick={decrease}>-</Button>
        <Count>{count}</Count>
        <Button onClick={increase}>+</Button>
      </CounterWrapper>
    )}
  </Counter>
);

export default ExportableCounter;
