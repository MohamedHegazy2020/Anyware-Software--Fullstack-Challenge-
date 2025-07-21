import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import api from "../api";
import { type   ApiResponse, type Announcement } from "../types/types.d";

export function useAnnouncements() : UseQueryResult<ApiResponse<Announcement[]>, Error> {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await api.get("/announcements");
      return res.data;
    },
  });
} 