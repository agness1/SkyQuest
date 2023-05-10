import passengerTypes from "./passengerTypes.json";

export interface PassengerTypesData {
  planes: {
    name: string;
    image: string;
  }[];
}

export const Passenger: PassengerTypesData = passengerTypes;
