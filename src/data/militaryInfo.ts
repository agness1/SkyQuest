import militaryInfo from "./militaryInfo.json";

export interface militaryInfodata {
  type: {
    name: string;
    history: string;
    year: string;
    purpose: string[];
    technologies_used: {
      first_technology: {
        name: string;
        description: string;
      };
      second_technology: {
        name: string;
        description: string;
      };
      third_technology: {
        name: string;
        description: string;
      };
    };
    images: {
      history_img: string;
      facts_img: string;
      header_img: string;
    };
    engine_type: string;
    fun_fact: string;
  }[];
}

export const military: militaryInfodata = militaryInfo;
