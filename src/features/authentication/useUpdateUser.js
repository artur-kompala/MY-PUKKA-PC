import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";
import { t } from "i18next";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success(t("Successfully update user"));
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(t('Error during update')),
  });

  return { updateUser, isUpdating };
}