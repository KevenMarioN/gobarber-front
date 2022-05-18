import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'
import * as Yup from "yup"
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimatedContainer } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErros';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../http/api';
import { useToast } from '../../hooks/useToast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignUpFormData): Promise<void> => {
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

        api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você já pode fazer seu logon no GoBarber!'
        });
        navigate('/dashboard')


      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
        });
      }
    }, [addToast, navigate])
  return (

    <Container>
      <Background />

      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form autoComplete="off" ref={formRef} initialData={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input icon={FiUser} type="text" placeholder='Nome' name='name' />
            <Input icon={FiMail} type="text" placeholder='E-mail' name='email' />
            <Input icon={FiLock} type="password" placeholder='Senha' name='password' />
            <Button type='submit'>Cadastrar</Button>
          </Form>
          <Link to="/"><FiArrowLeft /> Voltar para logon</Link>
        </AnimatedContainer>
      </Content>
    </Container>

  )
}


export default SignUp;