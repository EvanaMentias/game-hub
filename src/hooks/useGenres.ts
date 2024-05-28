import genres from "../Data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => ({ data: genres, isloading: false, error: null });

export default useGenres;
