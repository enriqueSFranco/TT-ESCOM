import React from 'react'
import { useForm } from '../../hooks/useForm'
import { POST_NEW_JOB } from '../../types/postNewJob'
import Input from '../Input/Input'
import TextEditor from '../Editor/TextEditor'
import { Button, ContainerForm, ContainerTextEditor, Form, SubTitle } from './styled-components/FormPostNewJobStyled'

const FormPostNewJob = () => {
  const { form, handleChange } = useForm(POST_NEW_JOB);

  return (
    <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <Input 
            label="Nombre de la vacante"
            id="t200_job"
            name="t200_job"
            value={form.t200_job}
            onChange={handleChange}
          />
          <ContainerTextEditor>
            <SubTitle>Descripcion de la vacante</SubTitle>
            <TextEditor 
              id="description" 
              name="description"
              value={body}
              onChange={(newText) => setBody(newText)}
            />
          </ContainerTextEditor>
          <Button type="submit" value="Publicar" />
        </Form>
      </ContainerForm>
  )
}

export default FormPostNewJob