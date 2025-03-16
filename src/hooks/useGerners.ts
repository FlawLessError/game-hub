import useData from "./useData";

type Genres = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => {
  return useData<Genres>("/genres");
};

export default useGenres;
