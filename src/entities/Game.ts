import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  slug: string;
  id: number;
  description: string;
  genres: Genre[];
  publishers: Publisher[];
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
