import React from "react";
import { useModal } from "hooks";
import Button from "components/Button/Button"
import LayoutAdmin from "Layout/LayoutAdmin";
import FormAddCollaborator from 'components/Form/FormAddCollaborator'
import ModalPortal from "components/Modal/ModalPortal";
import CardCollaborator from "components/Card/CardCollaborator";
import { MdAddCircleOutline } from "react-icons/md"

const ListCollaborators = () => {
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false);
  const [isOpenModalDelete, openModalDelete, closeModalDelete] =
    useModal(false);
  const [isOpenModalAdd, openModalAdd, closeModalAdd] = useModal(false)

  return (
    <>
      <LayoutAdmin>
        <div>
          <Button onClick={openModalAdd} text={<MdAddCircleOutline style={{fontSize: '2rem'}} />} bgColor="transparent" color="#000" />
        </div>
        <div>
          <CardCollaborator
            openModalDelete={openModalDelete}
            openModalEdit={openModalEdit}
          />
        </div>
      </LayoutAdmin>
      <ModalPortal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
        <h1>Editar Informacion de colaborador</h1>
      </ModalPortal>

      <ModalPortal isOpen={isOpenModalDelete} closeModal={closeModalDelete}>
      <h1>Eliminar colaborador</h1>

      </ModalPortal>


      <ModalPortal isOpen={isOpenModalAdd} closeModal={closeModalAdd}>
        <h2 style={{textAlign: 'center'}}>Agregar colaborador</h2>
        <FormAddCollaborator />
      </ModalPortal>
    </>
  );
};

export default ListCollaborators;
