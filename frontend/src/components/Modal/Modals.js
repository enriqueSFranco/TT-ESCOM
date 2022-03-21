import Modal from './Modal';
import { useModal } from "../../hooks/useModal";
const Modals = () => {
  const [isOpenModal,openModal,closeModal] =useModal(false);
  return (
    <div>
      <button onClick={openModal}>Modal 1</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <h2>Modal 2</h2>
      </Modal>
    </div>
  )
  
};

export default Modals;
