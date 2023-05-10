import militaryTypes from "./militaryTypes.json";
export interface MilitaryTypesData {
  planes: {
    name: string;
    image: string;
  }[];
}

export const Military: MilitaryTypesData = militaryTypes;
