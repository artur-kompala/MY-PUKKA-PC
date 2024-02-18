import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBench} from "../../services/apiAuth"

export function useUpdateBenchmark() {
  const queryClient = useQueryClient();

  const { mutate: updateBenchmark, isLoading: isUpdating } = useMutation({
    mutationFn: updateBench,
    onSuccess: ({ benchmark }) => {
      toast.success("Benchmark successfully updated");
      queryClient.setQueryData(["benchmark"], benchmark);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBenchmark, isUpdating };
}