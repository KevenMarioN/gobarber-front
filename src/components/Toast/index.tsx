import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../hooks/useToast';

import { Container } from './styles';

interface ToastProps {
  message : ToastMessage;
  style : object;
}

const icons = {
  info: <FiInfo size={24} />
  ,
  error: <FiAlertCircle size={24} />
  ,
  success: <FiCheckCircle size={24} />

}

const Toast = ({message,style} : ToastProps) => {
  const { removeToast } = useToast();
  useEffect(() =>{
  const timer = setTimeout(() => {
    removeToast(message.id)
  }, 3000);

  return () => {
    clearTimeout(timer)
  }
  },[removeToast,message.id])
  return (
    <Container
    style={style}
      key={message.id}
      type={message.type}
      hasDescription={!!message.description}>
     {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
        <button type='button' onClick={() => removeToast(message.id)}>
          <FiXCircle size={18} />
        </button>
      </div>
    </Container>
  );
}

export default Toast;