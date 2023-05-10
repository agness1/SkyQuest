import axios from "axios";
import { useState, useEffect } from "react";

interface FlightData {
  [x: string]: any;
  icao24: string;
  callsign: string;
  longitude: number;
  latitude: number;
}

export default function useFlightData() {
  const [flightData, setFlightData] = useState<FlightData[]>([]);

  useEffect(() => {
    const url = `https://opensky-network.org/api/states/all?lamin=50.5&lamax=54.2&lomin=14.9&lomax=23.1`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data.states;
        const flightData: FlightData[] = data.map((flight: any) => ({
          icao24: flight[0],
          callsign: flight[1],
          longitude: flight[5],
          latitude: flight[6],
          baro_altitude: flight[7],
        }));
        setFlightData(flightData);
      })
      .catch((error) => console.error(error));

    return;
  }, []);

  return flightData;
}
