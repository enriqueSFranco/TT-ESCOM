import React from "react";
import { useModal } from "hooks";
import LayoutAdmin from "Layout/LayoutAdmin";
import ModalPortal from "components/Modal/ModalPortal";
import CardCollaborator from "components/Card/CardCollaborator";

const ListCollaborators = () => {
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false);
  const [isOpenModalDelete, openModalDelete, closeModalDelete] =
    useModal(false);

  return (
    <>
      <LayoutAdmin>
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
    </>
  );
};

export default ListCollaborators;
