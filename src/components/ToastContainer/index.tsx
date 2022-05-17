import React, { useCallback } from 'react';
import { animated, useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/useToast';
import Toast from '../Toast/index';
import { Container } from './styles';
interface ToastContainerProps {
  messages: ToastMessage[]
}
const ToastContainer = ({ messages }: ToastContainerProps) => {
  const messagesWithTransitions = useTransition(
    messages,
    {

      from : { right : '-120%',opacity: 0},
      enter: { right: '0%',opacity: 1},
      leave: {right: '-120%',opacity: 0}
    }
  )
  return (
    <Container>
      {
       messagesWithTransitions((styles,item) => item && <Toast style={styles} key={item.id}  message={item} />)
      }

    </Container>
  )
}

export default ToastContainer;