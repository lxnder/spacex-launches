import React from "react";
import moment from "moment";
import classNames from "classnames";

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

  const mainDivClasses = classNames(
    "col-span-5",
    "flex",
    "flex-col",
    "justify-center",
    "h-auto",
    "text-gray-800",
    "p-4"
  );

  return (
    <div id="details" className={mainDivClasses}>
      <p className="text-lg font-bold text-blue-900">INFORMATION</p>
      <p>Launch date: {formatLaunchDate(launch_date_unix)}</p>
      <p>Result: {launch_success ? "SUCCESS" : "FAILURE"}</p>
      <p>Site name: {site_name_long}</p>
      <p className="text-lg font-bold text-blue-900">ROCKET - {name}</p>
      <p>{description}</p>
      <p>Wikipedia: {wikipedia}</p>
      <p>Cost per launch: ${cost_per_launch}</p>
      <p>
        Height: {height.feet}ft/{height.meters}m
      </p>
      <p>Boosters: {boosters}</p>
      <p>
        Diameter: {diameter.feet}ft/{diameter.meters}m
      </p>
      <p>Number of engines: {engines.number}</p>
      <p>Thrust (vacuum): {engines.thrust_vacuum.kN}/kN</p>
      <p>Stages: {stages}</p>
      <p>Success rate: {success_rate_pct}%</p>
      <p>
        Mass: {mass.lb}lbs/{mass.kg}kgs
      </p>
      <p className="text-lg font-bold text-blue-900">MEDIA</p>
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
