import React, { FC } from "react";
import Link from "next/link";
import classes from "./planeTypeSelector.module.css";
const ModelsPage: FC = ({}) => {
  return (
    <main className={classes.container}>
      <Link
        href={{ pathname: "/models/military", query: { type: "military" } }}
        as="/models/military"
        className={`${classes.military_img} ${classes.button}`}
      >
        <span>Military</span>
      </Link>

      <Link
        href={{ pathname: "/models/passenger", query: { type: "passenger" } }}
        as="/models/passenger"
        className={`${classes.button} ${classes.passenger_img}`}
      >
        <span>Passenger</span>
      </Link>
    </main>
  );
};

export default ModelsPage;
