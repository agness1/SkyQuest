import Link from "next/link";
import classes from "./planeList.module.css";
import React, { FC } from "react";
import { Passenger } from "@component/src/data/passengerTypes";
import { Military } from "@component/src/data/militaryTypes";
interface onTypeProps {
  typeData: { type?: string };
}

const TypesPage: FC<onTypeProps> = ({ typeData }) => {
  const { type } = typeData;
  const planes = type === "passenger" ? Passenger.planes : Military.planes;

  console.log(planes);

  return (
    <main className={classes.container}>
      {planes.map((item) => (
        <div key={item.name} className={classes.type_container}>
          <Link
            className={classes.link}
            href={{
              pathname: `/models/${item.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`,
              query: { name: `${item.name}` },
            }}
            
          >
            <div className={classes.title}>
              <h1>{item.name}</h1>
            </div>
            <div>
              <img
                src={item.image}
                width={350}
                height={250}
                alt="plane"
                className={classes.img}
              />
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default TypesPage;
