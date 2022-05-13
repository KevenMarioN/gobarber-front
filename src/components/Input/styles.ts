import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean
  IsFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    border: 2px solid #232129;
    color : #666360;

    ${props => props.isErrored && css`
    border-color: #c53030;
    `}
    ${props => props.isFocused && css`
    color : #ff9000;
    border-color: #ff9000;
    `}
    ${props => props.IsFilled && css`
    color : #ff9000;
    `}
    
    input {
      flex: 1;
      background: transparent;
      border: 0;
      color : #f4ede8;
      &::placeholder{
        color : #666360;
      }
      
    }
    & + div {
        margin-top: 8px;
      }
    > svg {
      margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    color: #FFF;
    background: #C53030;

    &::before {
      border-color: #C53030 transparent;
    }
  }
  
`;