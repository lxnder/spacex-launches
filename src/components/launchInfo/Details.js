import React from "react";
import moment from "moment";

const Details = ({ data }) => {
  const { launch_date_unix, launch_success } = data.launch;
  const { site_name_long } = data.launch.launch_site;
  const { article_link } = data.launch.links;
  const {
    name,
    description,
    wikipedia,
    cost_per_launch,
    height,
    boosters,
    diameter,
    engines,
    stages,
    success_rate_pct,
    mass,
  } = data.launch.rocket.rocket;

  const formatLaunchDate = launchTimeUnix => {
    return moment.unix(launchTimeUnix).format("MMMM Do YYYY");
  };

  return (
    <div id="details" className="col-span-1 h-auto space-y-2 text-gray-800">
      <p>GENERAL</p>
      <p>Launch date: {formatLaunchDate(launch_date_unix)}</p>
      <p>Launch result: {launch_success ? "SUCCESS" : "FAILURE"}</p>
      <p>Site name: {site_name_long}</p>
      <p>ROCKET</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Wikipedia: {wikipedia}</p>
      <p>Cost per launch: {cost_per_launch}</p>
      <p>
        Height: {height.feet}ft/{height.meters}mt
      </p>
      <p>Boosters: {boosters}</p>
      <p>
        Diameter: {diameter.feet}ft/{diameter.meters}mt
      </p>
      <p>Number of engines: {engines.number}</p>
      <p>Thrust (vacuum): {engines.thrust_vacuum.kN}/kN</p>
      <p>Stages: {stages}</p>
      <p>Success rate: {success_rate_pct}%</p>
      <p>
        Mass: {mass.lb}lbs/{mass.kg}kgs
      </p>
      <p>MEDIA</p>
      <a href={article_link}>
        <p>Article</p>
      </a>
      <a href={data.launch.links.wikipedia}>
        <p>Wikipedia</p>
      </a>
    </div>
  );
};

export default Details;
