import { Console } from 'console';
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message : Omit<ToastMessage,'id'>) : void;
  removeToast(id: string): void;
}
type ToastProps = {
  children: ReactNode;
}
export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title : string;
  description?: string;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider = ({children} : ToastProps) : JSX.Element => {
  const [messages,setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message : Omit<ToastMessage,'id'>) => {
    const id = uuidv4();

    const toast : ToastMessage = {
      id,
      ...message
    }
    setMessages(oldMessages => [...oldMessages,toast]);
  },[]);
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter(message => message.id !== id));
  },[]);
  return(
    <ToastContext.Provider value={{addToast,removeToast}}>
     {children}
     <ToastContainer messages={messages}/>
    </ToastContext.Provider>
  )
}
function useToast() : ToastContextData {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('useToast nust be uded within a ToastProvider');
  }
  return context;
}

export {useToast, ToastProvider}