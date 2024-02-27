import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProduct } from "../../services/apiAuth";

export function useDeleteDatabase(){
    
  const { mutate: deleteDatabase, isLoading: isDeleting } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success("Product successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteDatabase, isDeleting };
}