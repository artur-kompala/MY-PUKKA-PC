import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateData} from "../../services/apiAuth"

export function useUpdateDatabase() {
  const queryClient = useQueryClient();

  const { mutate: updateDatabase, isLoading: isUpdating } = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      toast.success("Database successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateDatabase, isUpdating };
}