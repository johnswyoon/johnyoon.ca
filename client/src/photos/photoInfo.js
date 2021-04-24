import { portraits } from "./portraits";
import { automotive } from "./automotive";
import { street } from "./street";
import { film } from "./film";
import { architecture } from "./architecture";

export const genreList = [
  {
    id: "automotive",
    title: "Automotive",
    description: "A Collection of Cars I Encounter",
    images: automotive,
  },
  {
    id: "street",
    title: "Street Photography",
    description: `"The documentation of human existance" - Pat Kay`,
    images: street,
  },
  {
    id: "portrait",
    title: "Portraits",
    description: "Capturing the personalities of people around me",
    images: portraits,
  },
  {
    id: "film",
    title: "Film",
    description: "Shot on Pentax Spotmatic & Super Takumar 50mm f/1.4",
    images: film,
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Symmetry, Patterns, and Shape",
    images: architecture,
  },
];
