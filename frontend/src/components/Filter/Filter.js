import { useForm } from "../../hooks/useForm";
import { Autocomplete, TextField } from "@mui/material";
import Switch from "../Input/Switch";
import styles from './Filter.module.css';

const empresas = [
  'Google',
  'Microsoft',
  'Facebook',
  'Amazon',
  'Youtube',
  'Spotify',
  'Occ Mundial',
  'Instagram'
];

const profile = [
  'Becario',
  'Pasante',
  'Titulado',
];

const typeJob = [
  'Tiempo Completo',
  'Medio Tiempo',
  'Flexible',
  'Freelance',
];


let initialForm = {
  company: "",
  profile: "",
  salary: "",
  homeOffice: false,
};

const Filter = () => {
  const { form, handleChecked } = useForm(initialForm);

  return (
    <div className={styles.filterContainer}>
      <span>Filtros avanzados</span>
      <form>
        <div className={styles.filterOptions}>
          <div>
            Salario
          </div>
          <div>
          <Autocomplete 
            disablePortal
            id="profile"
            name="profile"
            value={form.profile}
            options={profile}
            sx={{width:180}}
            renderInput={(params) => <TextField {...params} label="Perfil Laboral" />}
          />
          </div>
          <div>
          <Autocomplete 
            disablePortal
            id="typeJob"
            name="typeJob"
            options={typeJob}
            sx={{width:180}}
            renderInput={(params) => <TextField {...params} label="Tipo de empleo" />}
          />
          </div>
          <div>
          <Autocomplete 
            disablePortal
            id="company"
            name="company"
            options={empresas}
            sx={{width:180}}
            renderInput={(params) => <TextField {...params} label="Empresa" />}
          />
          </div>
          <div>
          <Switch
            label="Remoto"
            name="travel"
            id="travel"
            value={form.travel}
            onChange={handleChecked}
          />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filter;