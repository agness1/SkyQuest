import React, { FC } from "react";
import { useEffect, useState } from "react";
import { PassengerInfoTypes } from "@component/src/data/passengerInfo";
import { military } from "@component/src/data/militaryInfo";
import MilitaryDetails from "./militaryDetails";
import { useRouter } from "next/router";
import PassengerDetails from "./passengerDetails";

const PlaneDetails: FC = ({}) => {
  const [selectedModelsPassenger, setSelectedModelPassenger] = useState<any>();
  const [selectedModelsMilitary, setSelectedModelMilitary] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const data = router.query;
      const selectedModelPassenger = PassengerInfoTypes.type.find(
        (model) => model.name.toLowerCase().replace(/\s+/g, "-") === data.name
      );
      const selectedModelMilitary = military.type.find(
        (model) => model.name.toLowerCase().replace(/\s+/g, "-") === data.name
      );
      setSelectedModelPassenger(selectedModelPassenger);
      setSelectedModelMilitary(selectedModelMilitary);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      {!selectedModelsPassenger && !selectedModelsMilitary && <h1>Loading</h1>}
      {selectedModelsPassenger && (
        <PassengerDetails onDetails={selectedModelsPassenger} />
      )}
      {selectedModelsMilitary && (
        <MilitaryDetails onDetails={selectedModelsMilitary} />
      )}
    </>
  );
};

export default PlaneDetails;
