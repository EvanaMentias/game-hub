import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../Data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
