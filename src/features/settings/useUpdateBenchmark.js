import { useMutation} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBench} from "../../services/apiAuth"

export function useUpdateBenchmark() {
  const { mutate: updateBenchmark, isLoading: isUpdating } = useMutation({
    mutationFn: updateBench,
    onSuccess: () => {
      toast.success("Benchmark successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBenchmark, isUpdating };
}