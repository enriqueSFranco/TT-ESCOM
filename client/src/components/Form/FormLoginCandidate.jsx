import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useForm } from '../../hooks/useForm'
import { usePassword } from '../../hooks/usePassword'
import Input from '../Input/Input'
import { CREATE_ACCOUNT_CANDIDATE } from '../../types/createAccountCandidate'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { Button, Form, GroupInput, Legend, WrapperForm } from './styled-components/FormLoginCandidateStyled'

const FormLoginCandidate = () => {
  const { form, handleChange } = useForm(CREATE_ACCOUNT_CANDIDATE);
  const { showPassword, handleShowPassword } = usePassword();
  const auth = useAuth();
  
  return (
    <WrapperForm>
      <Legend>Hola, bienvenido de nuevo ✌️</Legend>
      <Form onSubmit={auth.loginCandidate}>
        <GroupInput>
          <Input label='Correo electronico'
            id='t100_email'
            name='t100_email'
            value={form.t100_email}
            onChange={handleChange}
          />
        </GroupInput>

        <GroupInput>
          <Input 
            label='Contraseña'
            icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
            iconColor='#1b8efb'
            onClick={handleShowPassword}
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            value={form.password}
            onChange={handleChange}
          />
        </GroupInput>
        <Button type='submit' value='Iniciar Sesion'></Button>
      <div>
        <span>No tienes cuenta?</span><Link to="/cuenta-nueva"> Crear cuenta</Link>
      </div>
      </Form>
    </WrapperForm>
  )
}

export default FormLoginCandidate