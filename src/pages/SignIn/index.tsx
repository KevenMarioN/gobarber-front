import React from 'react';
import {FiLock, FiLogIn, FiMail} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Container,Content,Background} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn = () => {
  return(

    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} type="text" placeholder='email' name=''/>
          <Input icon={FiLock} type="password" placeholder='Senha' name='' />
          <Button type='submit'>Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href=""><FiLogIn/> Criar conta</a>
      </Content>
      <Background />
    </Container>

  )
}


export default SignIn;