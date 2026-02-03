import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newCabinData) => createEditCabin(newCabinData),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      console.log("error creating cabin", error.message);
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
}
