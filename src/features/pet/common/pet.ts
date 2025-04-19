import { IPetKind } from "../../me/hooks/usePet";

export type IOptionItem = {
  thumbnail: any;
  value: number;
};

const DOG_COLORS = ["#E6E6E6", "#E9CC95", "#C68D42", "#7B6850", "#000000"];
const DOG_SHAPES: IOptionItem[] = [
  { thumbnail: require("@images/pet/dog-shape-1.png"), value: 1 },
  { thumbnail: require("@images/pet/dog-shape-2.png"), value: 2 },
  { thumbnail: require("@images/pet/dog-shape-3.png"), value: 3 },
  { thumbnail: require("@images/pet/dog-shape-4.png"), value: 4 },
  { thumbnail: require("@images/pet/dog-shape-5.png"), value: 5 },
];
const DOG_PATTERNS: IOptionItem[] = [
  { thumbnail: require("@images/pet/dog-pattern-1.png"), value: 1 },
  { thumbnail: require("@images/pet/dog-pattern-2.png"), value: 2 },
  { thumbnail: require("@images/pet/dog-pattern-3.png"), value: 3 },
  { thumbnail: require("@images/pet/dog-pattern-4.png"), value: 4 },
  { thumbnail: require("@images/pet/dog-pattern-5.png"), value: 5 },
];
const DOG_FACES: IOptionItem[] = [
  { thumbnail: require("@images/pet/dog-face-1.png"), value: 1 },
  { thumbnail: require("@images/pet/dog-face-2.png"), value: 2 },
];

const CAT_COLORS = ["#E6E6E6", "#FFC75B", "#D78100", "#969696", "#2B2B2B"];
const CAT_SHAPES: IOptionItem[] = [
  { thumbnail: require("@images/pet/cat-shape-1.png"), value: 1 },
  { thumbnail: require("@images/pet/cat-shape-2.png"), value: 2 },
  { thumbnail: require("@images/pet/cat-shape-3.png"), value: 3 },
];
const CAT_PATTERNS: IOptionItem[] = [
  { thumbnail: require("@images/pet/cat-pattern-1.png"), value: 1 },
  { thumbnail: require("@images/pet/cat-pattern-2.png"), value: 2 },
  { thumbnail: require("@images/pet/cat-pattern-3.png"), value: 3 },
];
const CAT_FACES: IOptionItem[] = [
  { thumbnail: require("@images/pet/cat-face-1.png"), value: 1 },
];

export const PET_CUSTOM_OPTION_MAP: Record<
  IPetKind,
  {
    colors: string[];
    shapes: IOptionItem[];
    patterns: IOptionItem[];
    face: IOptionItem[];
  }
> = {
  dog: {
    colors: DOG_COLORS,
    shapes: DOG_SHAPES,
    patterns: DOG_PATTERNS,
    face: DOG_FACES,
  },
  cat: {
    colors: CAT_COLORS,
    shapes: CAT_SHAPES,
    patterns: CAT_PATTERNS,
    face: CAT_FACES,
  },
};
