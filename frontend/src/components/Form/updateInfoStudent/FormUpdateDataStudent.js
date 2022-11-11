import { useState } from "react";
import { uploadPhotoStudent, uploadCVStudent } from "services";
import Input from "components/Input/Input";
import Switch from "components/Switch/Switch";
import CustomAvatar from "components/Avatar/Avatar";
import ButtonFile from "components/Button/ButtonFile";
import { BsFileEarmarkImage } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {getLocality} from "services/catalogs";
import {Select, WrapperSelect} from "./UpdateCandidateComponents";

const FormUpdateDataStudent = ({ id, username, candidate }) => {
  const [previewImage, setPreviewImage] = useState(username);
  const [localities, setLocalities] = useState(null);
  const [state,setState] = useState("");
  const [municipality,setMunicipality] = useState("");
  const [cp,setCP] = useState("");
  const [place,setPlace] = useState("");

  const handleLocality = (e) => {
    const { value } = e.target;
    setCP(value);
  
    if (value !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
          console.log(response[0]['c222_state']);
          setState(response[0]['c222_state']);
          setMunicipality(response[0]['c222_municipality'])
        })
        .catch((error) => console.error(error));
    }
  };

  const set_locality = (e) => {
    const locality = e.split(',');
    console.log(locality);
    //form.c222_id_locality = locality[0];    
    setPlace(locality[1])
  }

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
        }}
      >
        Editar datos personales
      </h1>
      <form onSubmit={(e) => update(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
            marginBottom: "1rem",
          }}
        >
          {typeof previewImage === "undefined" ? (
            <CustomAvatar username={username} width="100px" height="100px" />
          ) : (
            <CustomAvatar
              picture={candidate?.t100_profile_picture}
              width="100px"
              height="100px"
            />
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ButtonFile
              onChange={updateImage}
              text="Subir foto"
              icon={<BsFileEarmarkImage />}
              color="#116BFE"
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Input
            label="Nombre(s)"
            width="300px"
            defaultValue={candidate?.t100_name}
          />
          <Input
            label="Primer Apellido"
            defaultValue={candidate?.t100_last_name}
          />
          <Input
            label="Segundo Apellido"
            defaultValue={candidate?.t100_second_surname}
          />
        </div>
        <div>
          <h2
            style={{
              fontSize: "1.3rem",
              fontFamily: "sans-serif",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: ".4rem",
            }}
          >
            Donde te ubicas <HiOutlineLocationMarker />
          </h2>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <Input label="Calle y numero" />
            <Input 
              label="CP" 
              onChange={handleLocality}
              width="300px" />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Input label="Estado" value={state} width="450px" />
            <Input label="Ciudad/Municipio/Alcadia" value ={municipality} width="460px" />
            {/*/<Input label="Colonia" width="450px" />*/}
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
                      value={[township.c222_id,township.c222_locality]}
                    >
                      {township.c222_locality}
                    </option>
                  ))}
              </Select>
            </WrapperSelect>
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
              defaultValue={candidate?.t100_travel}
            />
            <ButtonFile
              onChange={uploadCV}
              text="Subir CV"
              icon={<BsFileEarmarkImage />}
              bgColor="#116BFE"
              color="#fff"
            />
          </div>
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
            value="Aceptar"
            style={{
              backgroundColor: "#116BFE",
              color: "#FFF",
              outline: "none",
              border: "none",
              width: "120px",
              borderRadius: "4px",
              padding: ".5rem",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default FormUpdateDataStudent;
