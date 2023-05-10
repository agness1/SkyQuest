import passengerInfo from "./passengerInfo.json";

export interface PassengerInfoTypesData {
  type: {
    name: string;
    history: {
      title: string;
      content: string;
    };
    production_end: string | null;
    total_flights: string;
    worst_accident: {
      title: string;
      description: string;
    };
    images: {
      header_img: string;
      history_img: string;
      technical_img: string;
      facts_img: string;
      worst_accident_img: string;
    };
    technical_data: {
      weight: {
        empty: string;
        max_takeoff: string;
      };
      dimensions: {
        length: string;
        height: string;
        wingspan: string;
      };
      engines: string[];
    };
    interesting_facts: {
      title: string;
      content: string;
    };
  }[];
}

export const PassengerInfoTypes: PassengerInfoTypesData = passengerInfo;
