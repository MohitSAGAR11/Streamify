import { login } from "../lib/api.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useLogin = () => {
    const queryClient = useQueryClient();
    const {
        mutate,
        isPending,
        error,
    } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });
    return {
        login: mutate,
        isPending,
        error,
    };
};
