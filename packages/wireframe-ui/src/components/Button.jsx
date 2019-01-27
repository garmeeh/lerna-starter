import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
import Button from '@gmdev/button';

const StyledButton = styled.button`
  font-size: 16px;
  margin: 0;
  padding: 0.3em 0.75em;
  border-radius: 3px;
  background: none;
  font-weight: bold;
  color: ${styledMap`
    secondary: #fa3635;
    default: #000000;
  `};
  border: 2px solid ${styledMap`
    secondary: #fa3635;
    default: #000000;
  `};
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${styledMap`
      secondary: #c91900;
      default: #660198;
    `};
    color: ${styledMap`
      secondary: #c91900;
      default: #660198;
    `};
  }

  &:active {
    border: 2px solid ${styledMap`
      secondary: #fa3635;
      default: #660198;
    `};
    color: #ffffff;
    background: ${styledMap`
      secondary: #fa3635;
      default: #660198;
    `};
  }
`;

const ExportableButton = ({ type = 'button', children, ...rest }) => (
  <Button type={type}>
    {({ getProps }) => (
      <StyledButton {...getProps()} {...rest}>
        {children}
      </StyledButton>
    )}
  </Button>
);

export default ExportableButton;
