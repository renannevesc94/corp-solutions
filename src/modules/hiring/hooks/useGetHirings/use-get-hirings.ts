import { useQuery } from "@tanstack/react-query";
import { getHirings } from "../../../../services/apiCorp";

const CACHE_KEY = "hirings";

export const useGetHirings = () => {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: async () => {
      const { data } = await getHirings();
      return data;
    },
    enabled: true,
  });
};
