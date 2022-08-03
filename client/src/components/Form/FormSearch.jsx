import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Autocompleted from '../Autocompleted/Autocompleted'
import { FiSearch } from 'react-icons/fi'
import { Button, Form, InputSearch, Separator, WrapperInput, WrapperForm } from './styled-components/FormSearchStyled'

const FormSearch = () => {
  const { loading, data, error } = useFetch(import.meta.env.VITE_API_VACANTS_URL);
  const [displayJob, setDisplayJob] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(false);
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('enviando formulario')
  }

  return (
    <WrapperForm>
      <Form onSubmit={onSubmit}>
        <WrapperInput content='Qué'>
          <InputSearch
            type='text'
            id='job'
            name='job'
            value={job}
            onChange={(e) => setJob(e.target.value)}
            onKeyDown={() => setDisplayJob(!displayJob)}
            autoComplete='off'
            placeholder='Desarrollador Backend' 
            marginLeft='2.7rem' 
          />
        {displayJob && <Autocompleted query={job} onChange={setJob} />}
        </WrapperInput>
        <Separator></Separator>
        <WrapperInput content='Dónde'>
          <InputSearch 
            type="text" 
            id='location'
            name='location'
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyUp={() => setDisplayLocation(!displayLocation)}
            autoComplete='off'
            placeholder='Ciudad de Mexico' 
            marginLeft='3.7rem' 
          />
          {displayLocation && <Autocompleted query={location} onChange={setLocation} />}
        </WrapperInput>
        <Button>
          <FiSearch />
        </Button>
      </Form>
    </WrapperForm>
  )
}

export default FormSearch