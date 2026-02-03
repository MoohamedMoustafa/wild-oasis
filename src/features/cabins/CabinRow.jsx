import styled from "styled-components";

import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { formatCurrency } from "../../utils/helpers";

import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";

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
  const [showUpdateForm, setShowUpdateForm] = useState(false);
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

  const toggleUpdateForm = () => {
    setShowUpdateForm((prev) => !prev);
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
            onClick={toggleUpdateForm}
            disabled={isWorking}
          >
            <HiPencil />
          </Button>

          <Button
            variation="secondary"
            size="small"
            onClick={handleDuplicateCabin}
            disabled={isWorking}
          >
            <HiSquare2Stack />
          </Button>
          <Button
            variation="danger"
            size="small"
            onClick={handleDeleteCabin}
            disabled={isWorking}
          >
            <HiTrash />
          </Button>
        </div>
      </TableRow>

      {showUpdateForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
