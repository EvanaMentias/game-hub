import { Platform } from "./Platform";

export interface Game {
  slug: string;
  id: number;
  description: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
