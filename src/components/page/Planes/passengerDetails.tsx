import React, { FC } from "react";
import classes from "./planeDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerVertical,
  faWeightHanging,
  faPlaneDeparture,
  faArrowsUpDown,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";

interface onDetails {
  onDetails: any;
}
const PassengerDetails: FC<onDetails> = ({ onDetails }) => {
  return (
    <>
      <div className={classes.model_name}>
        <img src={onDetails.images.header_img} className={classes.header_img} />
        <h1>{onDetails.name}</h1>
      </div>
      <div className={classes.technical_data_container}>
        <div className={classes.technical_data}>
          <h3 className={classes.technical_data_content_title}>
            Maximum takeoff weight{" "}
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faWeightHanging}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>
            {" "}
            {onDetails.technical_data.weight.max_takeoff}{" "}
          </p>
          <h3 className={classes.technical_data_content_title}>
            Empty{" "}
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faWeightHanging}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>
            {onDetails.technical_data.weight.empty}
          </p>
        </div>
        <div className={classes.technical_data}>
          <h3 className={classes.technical_data_content_title}>
            Length{" "}
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faRulerVertical}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>
            {onDetails.technical_data.dimensions.height}
          </p>
          <h3 className={classes.technical_data_content_title}>
            Height{" "}
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faArrowsUpDown}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>
            {" "}
            {onDetails.technical_data.dimensions.length}
          </p>
          <h3 className={classes.technical_data_content_title}>
            Wingspan{" "}
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faPlaneUp}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>
            {onDetails.technical_data.dimensions.wingspan}
          </p>
        </div>
        <div className={classes.technical_data}>
          <h3 className={classes.technical_data_content_title}>
            Total number of flights{" "}
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faPlaneDeparture}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>
            {onDetails.total_flights}
          </p>
        </div>
      </div>
      <main className={classes.container}>
        <div className={classes.inner_container}>
          <div className={classes.content}>
            <h1>{onDetails.history.title}</h1>
            <p>{onDetails.history.content}</p>
          </div>
          <img src={onDetails.images.history_img} className={classes.img}></img>
        </div>
        <div className={classes.inner_container}>
          <img src={onDetails.images.facts_img} className={classes.img}></img>
          <div className={classes.content}>
            <h1>{onDetails.interesting_facts.title}</h1>
            <p>{onDetails.interesting_facts.content}</p>
          </div>
        </div>
        <div className={classes.inner_container}>
          <div className={classes.content}>
            <h1>{onDetails.worst_accident.title}</h1>
            <p>{onDetails.worst_accident.description}</p>
          </div>
          <img
            src={onDetails.images.worst_accident_img}
            className={classes.img}
          ></img>
        </div>
      </main>
    </>
  );
};

export default PassengerDetails;
