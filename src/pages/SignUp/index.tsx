import React, { useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'
import * as Yup from "yup"
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErros';
import { ValidationError } from 'yup';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: object): Promise<void> {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatótia').min(6, 'No mínimo 6 dígitos')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err : any) {
      const errors = getValidationErros(err);
      formRef.current?.setErrors(errors);
    }
  }
  return (

    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form autoComplete="off" ref={formRef} initialData={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} type="text" placeholder='Nome' name='name' />
          <Input icon={FiMail} type="text" placeholder='E-mail' name='email' />
          <Input icon={FiLock} type="password" placeholder='Senha' name='password' />
          <Button type='submit'>Cadastrar</Button>
        </Form>
        <a href=""><FiArrowLeft /> Voltar para logon</a>
      </Content>

    </Container>

  )
}


export default SignUp;