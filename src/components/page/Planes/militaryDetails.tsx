import React, { FC } from "react";
import classes from "./planeDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJetFighterUp,
  faComputer,
  faIndustry,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
interface onDetails {
  onDetails: any;
}
const MilitaryDetails: FC<onDetails> = ({ onDetails }) => {
  return (
    <>
      <div className={classes.model_name}>
        <img
          src={onDetails.images.header_img}
          className={classes.header_img}
        ></img>
        <h1>{onDetails.name}</h1>
      </div>
      <div className={classes.technical_data_container}>
        <div className={classes.technical_data}>
          <h3 className={classes.technical_data_content_title}>
            Production year
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faIndustry}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>
          <p className={classes.technical_data_content}>{onDetails.year}</p>
        </div>

        <div className={classes.technical_data}>
          <h3 className={classes.technical_data_content_title}>
            Purpose
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faJetFighterUp}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 10 }}
            />
          </h3>

          {onDetails.purpose.map((purpose: string, index: number) => (
            <p className={classes.technical_data_content} key={index}>
              {purpose}
              <br />
            </p>
          ))}
        </div>

        <div className={classes.technical_data}>
          <h3 className={classes.technical_data_content_title}>
            Engine type
            <FontAwesomeIcon
              className={classes.fontawesome}
              icon={faPowerOff}
              style={{ fontSize: 30, color: "#537FE7", paddingInlineStart: 20 }}
            />
          </h3>

          <p className={classes.technical_data_content}>
            {onDetails.engine_type}
          </p>
        </div>
      </div>
      <section className={classes.container}>
        <h1 className={classes.tech_title}>
          Technologies{" "}
          <FontAwesomeIcon
            className={classes.fontawesome}
            icon={faComputer}
            style={{ fontSize: 30, color: "#537FE7", marginTop: 10 }}
          />{" "}
        </h1>
        <div className={classes.technologies_container}>
          <div className={classes.technology_container}>
            <h2 className={classes.technology_title}>
              {onDetails.technologies_used.first_technology.name}{" "}
              <FontAwesomeIcon
                className={classes.fontawesome}
                icon={faJetFighterUp}
                style={{ fontSize: 30, color: "#537FE7" }}
              />
            </h2>
            <p className={classes.technology_conetnt}>
              {onDetails.technologies_used.first_technology.description}
            </p>
          </div>
          <div className={classes.technology_container}>
            <h2 className={classes.technology_title}>
              {onDetails.technologies_used.second_technology.name}{" "}
              <FontAwesomeIcon
                className={classes.fontawesome}
                icon={faJetFighterUp}
                style={{
                  fontSize: 30,
                  color: "#537FE7",
                  paddingInlineStart: 10,
                }}
              />
            </h2>
            <p className={classes.technology_conetnt}>
              {onDetails.technologies_used.second_technology.description}
            </p>
          </div>
          <div className={classes.technology_container}>
            <h2 className={classes.technology_title}>
              {onDetails.technologies_used.third_technology.name}{" "}
              <FontAwesomeIcon
                className={classes.fontawesome}
                icon={faJetFighterUp}
                style={{ fontSize: 30, color: "#537FE7" }}
              />
            </h2>
            <p className={classes.technology_conetnt}>
              {onDetails.technologies_used.third_technology.description}
            </p>
          </div>
        </div>
        <div className={classes.inner_container}>
          <div className={classes.content}>
            <h1>History</h1>
            <p>{onDetails.history}</p>
          </div>
          <img className={classes.img} src={onDetails.images.history_img}></img>
        </div>
        <div className={classes.inner_container}>
          <img className={classes.img} src={onDetails.images.facts_img}></img>
          <div className={classes.content}>
            <h1>Interesting facts</h1>
            <p>{onDetails.fun_fact}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MilitaryDetails;
