import platforms from "../Data/platforms";
import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: Platforms } = usePlatforms();
  return platforms.results.find((p) => p.id === id);
};
export default usePlatform;
