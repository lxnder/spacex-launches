import React from "react";

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

  return (
    <div id="details" className="col-span-1 h-auto bg-green-700">
      {/* Launch date */}
      <p>{launch_date_unix}</p>
      {/* Launch site */}
      <p> {site_name_long}</p>
      {/* Launch Success */}
      <p> {launch_success}</p>
      {/* Article */}
      <p> {article_link}</p>
      {/* Wikipedia */}
      <p> {data.launch.links.wikipedia}</p>
      {/* Rocket */}
      <p> {name}</p>
      <p>{description}</p>
      <p>{wikipedia}</p>
      <p>{cost_per_launch}</p>
      <p>{height.feet}</p>
      <p>{height.meters}</p>
      <p>{boosters}</p>
      <p>{diameter.meters}</p>
      <p>{diameter.feet}</p>
      <p>{engines.number}</p>
      <p>{engines.thrust_vacuum.kN}</p>
      <p>{stages}</p>
      <p>{success_rate_pct}</p>
      <p>{mass.kg}</p>
      <p>{mass.lb}</p>
    </div>
  );
};

export default Details;
