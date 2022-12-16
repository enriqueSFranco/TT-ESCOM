import {useEffect, useState } from "react";
import { useForm } from "hooks";
import {
  uploadPhotoStudent,
  uploadCVStudent,
  updateStudent,
  getLocality,
} from "services";
import Input from "components/Input/Input";
import Switch from "components/Switch/Switch";
import CustomAvatar from "components/Avatar/Avatar";
import ButtonFile from "components/Button/ButtonFile";
import { BsFileEarmarkImage } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Select, WrapperSelect } from "./UpdateCandidateComponents";
import styles from "./FormUpdateDataStudent.module.css";

const FormUpdateDataStudent = ({ id, username, picture, candidate }) => {
  const { form, setForm, handleChange, handleChecked } = useForm({
    t100_name: candidate?.t100_name,
    t100_last_name: candidate?.t100_last_name,
    t100_second_surname: candidate?.t100_second_surname,
    t100_cv: null,
    t100_residence: candidate?.t100_residence,
    t100_travel: false,
  });
  const [previewImage, setPreviewImage] = useState(username);
  const [localities, setLocalities] = useState(null);
  const [state, setState] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [_, setCP] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    setForm(candidate)
  }, [candidate, id, setForm])

  const handleLocality = (e) => {
    const { value } = e.target;
    setCP(value);

    if (value !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
          console.log(response[0]["c222_state"]);
          setState(response[0]["c222_state"]);
          setMunicipality(response[0]["c222_municipality"]);
        })
        .catch((error) => console.error(error));
    }
  };

  const set_locality = (e) => {
    const locality = e.split(",");
    setPlace(locality[1]);
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      setPreviewImage(file);
      fr.readAsDataURL(file);

      fr.onload = () => {
        if (fr.readyState === 2) {
          resolve(fr.result);
        }
      };
      fr.onerror = (error) => {
        reject(error);
      };
    });
  }

  async function uploadCV(e) {
    const file = e.target.files[0];
    console.log(file);
    if (!file === undefined) {
      return;
    }
    const base64 = await convertToBase64(file);
    uploadCVStudent(id, { t100_username: "", t100_cv: base64 })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  async function updateImage(e) {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    uploadPhotoStudent(id, { t100_username: "", t100_profile_picture: base64 })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  function update(e) {
    e.preventDefault();
    console.log("formulario enviado...");

    updateStudent(id, form)
      .then((response) => console.log(response))
      .catch((error) => error);

    if (e.target.files !== undefined) updateImage(e);

    if (e.target.files !== undefined) uploadCV(e);
  }

  if (!id) return null;

  return (
    <>
      <h1
        style={{
          fontSize: "1.3rem",
          textAlign: "center",
          fontFamily: "sans-serif",
          marginBottom: "2rem",
        }}
      >
        Editar datos personales
      </h1>
      <div className={styles.wrapperForm}>
        <form onSubmit={update} className={styles.formUpdate}>
          <div className={styles.wrapperAvatar}>
            <CustomAvatar
              username={username}
              picture={picture}
              width="100px"
              height="100px"
            />
            <ButtonFile
              onChange={updateImage}
              text="Subir foto"
              icon={<BsFileEarmarkImage />}
              color="#222"
            />
          </div>
          <div className={styles.groupsInputs}>
            <Input
              label="Nombre(s)"
              width="300px"
              name="t100_name"
              id="t100_name"
              value={form.t100_name}
              onChange={handleChange}
            />
            <Input
              label="Primer Apellido"
              name="t100_last_name"
              id="t100_last_name"
              value={form.t100_last_name}
              onChange={handleChange}
            />
            <Input
              label="Segundo Apellido"
              name="t100_second_surname"
              id="t100_second_surname"
              value={form.t100_second_surname}
              onChange={handleChange}
            />
          </div>
          <h2
            style={{
              fontSize: "1.2rem",
              fontFamily: "sans-serif",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: ".4rem",
              marginBottom: '1rem'
            }}
          >
            <HiOutlineLocationMarker style={{color: 'red'}} /> Ubicacion
          </h2>
          <div className={styles.groupsInputs}>
            <Input
              label="Codigo Postal"
              onChange={handleLocality}
              width="260px"
            />
            <WrapperSelect>
              <Select
                name="c222_id_locality"
                id="c222_id_locality"
                value={place}
                width="450px"
                onChange={(e) => set_locality(e.target.value)}
                //sx={{ width:300, padding:1}}
              >
                <option value="" disabled>
                  Seleccione una Colonia
                </option>
                {localities &&
                  localities?.map((township) => (
                    <option
                      key={crypto.randomUUID()}
                      value={[township.c222_id, township.c222_locality]}
                    >
                      {township.c222_locality}
                    </option>
                  ))}
              </Select>
            </WrapperSelect>
            <Input
              label="Calle y numero"
              name="t100_residence"
              id="t100_residence"
              value={form.t100_residence}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <Input label="Estado" value={state} width="450px" />
            <Input
              label="Ciudad/Municipio/Alcadia"
              value={municipality}
              width="460px"
            />
            {/*/<Input label="Colonia" width="450px" />*/}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Switch
              label="Disponible para reubicarte"
              name="t100_travel"
              id="t100_travel"
              value={form.t100_travel}
              onChange={handleChecked}
            />
            <ButtonFile
              onChange={uploadCV}
              value={form.t100_cv}
              id="t100_cv"
              name="t100_cv"
              text="Subir CV"
              icon={<BsFileEarmarkImage />}
              bgColor="#116BFE"
              color="#fff"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <input
              type="submit"
              value="Actualizar Informacion"
              style={{
                backgroundColor: "#116BFE",
                color: "#FFF",
                outline: "none",
                border: "none",
                width: "200px",
                textAlign: "center",
                fontWeight: "600",
                borderRadius: "4px",
                padding: ".5rem",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdateDataStudent;
