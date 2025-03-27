import { Developer } from "./Developer";
import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";
import { Tag } from "./Tag";

export type Game = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  parent_platforms: {
    platform: Platform;
  }[];
  released: string;
  genres: Genres[];
  developers: Developer[];
  publishers: Publisher[];
  tags: Tag[];
  esrb_rating: { name: string };
  website: string;
};
