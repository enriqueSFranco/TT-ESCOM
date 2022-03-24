import ModalForm from './Modal';
import { useModal } from "../../hooks/useModal";
const Modals = () => {
  const [isOpenModal,openModal,closeModal] =useModal(false);
  return (
    <div>
      <button onClick={openModal}>Modal 1</button>
      <ModalForm isOpen={isOpenModal} closeModal={closeModal}>
      <h2>Modal 2</h2>
      </ModalForm>
    </div>
  )
  
};

export default Modals;
