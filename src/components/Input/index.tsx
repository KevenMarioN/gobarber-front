import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon: React.ComponentType<IconBaseProps>;
}

const Input =  ({icon : Icon,name,...rest} : InputProps) : JSX.Element  => (
  <Container>
   {Icon &&  <Icon name={name}/>}
    <input  {...rest}/>
  </Container>
)

export default Input;