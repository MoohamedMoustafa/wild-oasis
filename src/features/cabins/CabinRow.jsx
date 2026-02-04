import styled from "styled-components";

import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { formatCurrency } from "../../utils/helpers";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const { mutate: createCabin, isPending: isCreating } = useCreateCabin();
  const { mutate: deleteCabin, isPending: isDeleting } = useDeleteCabin();
  const isWorking = isCreating || isDeleting;

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const handleDeleteCabin = () => {
    deleteCabin(cabinId);
  };

  const handleDuplicateCabin = () => {
    const newCabin = {
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    };

    createCabin(newCabin);
  };

  return (
    <>
      <TableRow role="row">
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div>up to {maxCapacity} people</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount > 0 ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash; </span>
        )}

        <div>
          <Button
            variation="secondary"
            size="small"
            onClick={handleDuplicateCabin}
            disabled={isWorking}
          >
            <HiSquare2Stack />
          </Button>

          <Modal>
            <Modal.Open opens={"edit-form"}>
              <Button variation="secondary" size="small" disabled={isWorking}>
                <HiPencil />
              </Button>
            </Modal.Open>
            <Modal.Window name="edit-form">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open opens="delete-modal">
              <Button variation="danger" size="small" disabled={isWorking}>
                <HiTrash />
              </Button>
            </Modal.Open>
            <Modal.Window name="delete-modal">
              <ConfirmDelete
                resourceName={name}
                onConfirm={handleDeleteCabin}
                disabled={isWorking}
              />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}
