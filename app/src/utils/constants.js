import {
  snow,
  magnet,
  water,
  chevronDark,
  chevronLight,
  silverwareDark,
  silverwareLight,
  cakeDark,
  cakeLight,
  crownDark,
  crownLight,
  boatDark,
  boatLight,
  snorkelDark,
  snorkelLight,
  lightningDark,
  lightningLight,
  skullDark,
  skullLight
} from "../assets";

export const NAV_ITEMS = [
  {
    alt: "snow",
    label: "SNOWFLAKES",
    path: "/snowflakes",
    src: snow
  },
  {
    alt: "magnet",
    label: "MAGNETS",
    path: "/magnets",
    src: magnet
  },
  {
    alt: "liquids",
    label: "LIQUIDS",
    path: "/liquids/flammable",
    src: water
  }
];

export const TALENT_PATH_1 = [
  {
    deselected_src: chevronDark,
    isSelected: false,
    name: "chevron",
    selected_src: chevronLight
  },
  {
    deselected_src: silverwareDark,
    isSelected: false,
    name: "silverware",
    selected_src: silverwareLight
  },
  {
    deselected_src: cakeDark,
    isSelected: false,
    name: "cake",
    selected_src: cakeLight
  },
  {
    deselected_src: crownDark,
    isSelected: false,
    name: "crown",
    selected_src: crownLight
  }
];

export const TALENT_PATH_2 = [
  {
    deselected_src: boatDark,
    isSelected: false,
    name: "boat",
    selected_src: boatLight
  },
  {
    deselected_src: snorkelDark,
    isSelected: false,
    name: "snorkel",
    selected_src: snorkelLight
  },
  {
    deselected_src: lightningDark,
    isSelected: false,
    name: "lightning",
    selected_src: lightningLight
  },
  {
    deselected_src: skullDark,
    isSelected: false,
    name: "skull",
    selected_src: skullLight
  }
];
