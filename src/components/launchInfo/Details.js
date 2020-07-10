import classNames from "classnames";
import moment from "moment";
import React from "react";

const Details = ({ data }) => {
  const { launch_date_unix, launch_success } = data.launch;
  const { site_name_long } = data.launch.launch_site;
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
  const { mission_patch } = data.launch.links;

  const formatLaunchDate = launchTimeUnix => {
    return moment.unix(launchTimeUnix).format("MMMM Do YYYY");
  };

  const mainDivClasses = classNames(
    "overflow-y-auto",
    "col-span-5",
    "flex flex-col items-center space-y-6",
    "text-gray-800",
    "bg-clear-85",
    "py-4 px-40"
  );

  // TODO: format lines
  // TODO: conditionals (image exists, launch is future...)
  return (
    <div id="details" className={mainDivClasses}>
      <div className="w-full h-auto mt-6 flex items-center justify-center">
        <img src={mission_patch} alt="mission_patch" className="w-3/12" />
      </div>
      <div>
        <p className="text-lg font-bold text-blue-900 pt-6">INFORMATION</p>
        <p
          className={
            "font-bold pt-2 " +
            (launch_success ? "text-green-600" : "text-red-500")
          }
        >
          <span className="font-bold text-gray-700">Result:</span>{" "}
          {launch_success ? "SUCCESS" : "FAILURE"}
        </p>
        <p>
          <span className="font-bold text-gray-700">Launch Date:</span>{" "}
          {formatLaunchDate(launch_date_unix)}
        </p>
        <p>
          <span className="font-bold text-gray-700">Launch Site:</span>{" "}
          {site_name_long}
        </p>
        <a
          href={data.launch.links.wikipedia}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-700 underline">Wikipedia Link</p>
        </a>
        <p className="text-lg font-bold text-blue-900 pt-6">ROCKET - {name}</p>
        <p className="py-2 font-bold text-blue-800">{description}</p>
        <p>
          <span className="font-bold text-gray-700">Success Rate:</span>{" "}
          {success_rate_pct}%
        </p>
        <p>
          <span className="font-bold text-gray-700">Cost per Launch:</span> $
          {cost_per_launch}
        </p>
        <p>
          <span className="font-bold text-gray-700">Height:</span> {height.feet}
          ft/{height.meters}m
        </p>
        <p>
          <span className="font-bold text-gray-700">Boosters:</span> {boosters}
        </p>
        <p>
          <span className="font-bold text-gray-700">Diameter:</span>{" "}
          {diameter.feet}ft/{diameter.meters}m
        </p>
        <p>
          <span className="font-bold text-gray-700">Number of Engines:</span>{" "}
          {engines.number}
        </p>
        <p>
          <span className="font-bold text-gray-700">Thrust (vacuum):</span>{" "}
          {engines.thrust_vacuum.kN}/kN
        </p>
        <p>
          <span className="font-bold text-gray-700">Stages:</span> {stages}
        </p>
        <p>
          <span className="font-bold text-gray-700">Mass:</span> {mass.lb}lbs/
          {mass.kg}kg
        </p>
        <a href={wikipedia} target="_blank" rel="noopener noreferrer">
          <p className="text-blue-700 underline">Wikipedia Link</p>
        </a>
      </div>
    </div>
  );
};

export default Details;
