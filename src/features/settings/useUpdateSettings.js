import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn: updateSetting,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Settings successfully updated");
    },

    onError: (err) => {
      toast.error(`error updating setting: ${err.message}`);
      console.log(`error updating setting: ${err.message}`);
    },
  });

  return { mutate, error, isPending };
}
