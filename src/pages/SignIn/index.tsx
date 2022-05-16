import React, { useRef, useContext, useCallback } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web';
import * as Yup from "yup";
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErros';
import { useAuth } from '../../context/AuthContext';

interface SignInFormData {
  email : string;
  password: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn,user } = useAuth();

  console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatótia').required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email : data.email,
          password : data.password
        });
      } catch (err: any) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);
      }
    }
    , [signIn]);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit} ref={formRef} autoComplete="off">
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} type="text" placeholder='email' name='email' />
          <Input icon={FiLock} type="password" placeholder='Senha' name='password' />
          <Button type='submit'>Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href=""><FiLogIn /> Criar conta</a>
      </Content>
      <Background />
    </Container>

  )
}


export default SignIn;