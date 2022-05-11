import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => (
  <Container >
    {children}
  </Container>
)

export default Button;