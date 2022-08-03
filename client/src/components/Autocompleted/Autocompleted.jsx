import React from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { Item, List, WrapperAutocompleted } from './styled-components/AutocompletedStyled'


const data = [
  {
    titleJob: "desarrollador backend",
    id: 1
  },
  {
    titleJob: "desarrollador web",
    id: 2
  },
  {
    titleJob: "fullstack developer",
    id: 3
  },
  {
    titleJob: "Analista de datos",
    id: 4
  },
  {
    titleJob: "Administrador de recursos",
    id: 5
  },
  {
    titleJob: "desarrollador android",
    id: 6
  },
  {
    titleJob: "desarrollador de software",
    id: 7
  }
]

const Autocompleted = ({suggestions, query, onChange}) => {
  const debounce = useDebounce(query, 500);

  const filtered = () => {
    let newData = data?.filter(el => {
      return el.titleJob.toLowerCase().startsWith(debounce);
    });
    return newData;
  }

  const filteredItems = filtered();

  const handleSelection = value => onChange(value);

  return (
    <WrapperAutocompleted tabIndex="0">
      <List>
        {filteredItems.map(item => (
          <Item key={item.id} onClick={() => handleSelection(item.titleJob)}>{item.titleJob}</Item>
        ))}
      </List>
    </WrapperAutocompleted>
  )
}

export default Autocompleted