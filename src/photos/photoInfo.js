import { portraits } from "./portraits";
import { automotive } from "./automotive";
import { street } from "./street";
import { architecture } from "./architecture";

export const genreList = [
  {
    id: "automotive",
    title: "Automotive",
    description: "A Collection of Cars",
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
    description: "Capturing the personality of people around me",
    images: portraits,
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Symmetry, Patterns, and Shape",
    images: architecture,
  },
];
