import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={toggleModal}>Add new cabin</Button>
      {isOpenModal && (
        <Modal onClose={toggleModal}>
          <CreateCabinForm onCloseModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
}
