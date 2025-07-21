import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import api from "../api";
    import { type ApiResponse, type Quiz } from "../types/types.d";

export function useQuizzes(): UseQueryResult<
  ApiResponse<Quiz[]>,
  Error
> {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: async () => {
      const res = await api.get("/quizzes");
      return res.data;
    },
  });
}
