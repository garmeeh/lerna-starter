import React from 'react';

import DefaultStyledButton from './styles/defaultStyledButton';

const Button = ({ type = 'button', children, onClick }) => (
  <DefaultStyledButton type={type} className="button" onClick={onClick}>
    {children}
  </DefaultStyledButton>
);

export default Button;
