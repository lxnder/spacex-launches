import classNames from "classnames";
import moment from "moment";
import React from "react";
import TextLine from "./elements/TextLine";
import Link from "./elements/Link";

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
    return moment.unix(launchTimeUnix).format("MMMM Do YYYY, h:mm a");
  };

  const mainDivClasses = classNames(
    "col-span-12 lg:col-span-4 xl:col-span-5",
    "flex flex-col items-center space-y-6",
    "overflow-y-auto",
    "text-gray-800",
    "bg-clear-85",
    "px-8 xs:px-16 sm:px-24 md:px-32 lg:px-12 xxl:px-24",
    "py-8"
  );

  const imgContainerClasses = classNames(
    "w-full h-auto",
    "flex items-center justify-center"
  );

  const imgClasses = classNames(
    "h-24 xs:h-32 lg:h-24 xl:h-32",
    "w-24 xs:w-32 lg:w-24 xl:w-32",
    "bg-contain bg-center bg-no-repeat"
  );

  // TODO: conditionals (image exists, launch is future...)
  return (
    <div id="details" className={mainDivClasses}>
      <div className={imgContainerClasses}>
        <div
          className={imgClasses}
          style={{ backgroundImage: `url(${mission_patch})` }}
        />
      </div>
      <div>
        <div id="INFO" className="pt-4">
          <TextLine value="INFORMATION" isHeader={true} />
          <TextLine
            title={"Result"}
            value={launch_success ? "SUCCESS" : "FAILURE"}
          />
          <TextLine
            title={"Launch Date"}
            value={formatLaunchDate(launch_date_unix)}
          />
          <TextLine title={"Launch Site"} value={site_name_long} />
          <Link link={data.launch.links.wikipedia} text={"Wikipedia Link"} />
        </div>
        <div id="ROCKET" className="pt-6">
          <TextLine value={"ROCKET - " + name} isHeader={true} />
          <TextLine isDescription={true} value={description} />
          <TextLine title={"Success Rate"} value={success_rate_pct + "%"} />
          <TextLine title={"Cost per launch"} value={cost_per_launch} />
          <TextLine
            title={"Height"}
            value={height.feet + "ft/" + height.meters + "m"}
          />
          <TextLine title={"Boosters"} value={boosters} />
          <TextLine
            title={"Diameter"}
            value={diameter.feet + "ft/" + diameter.meters + "m"}
          />
          <TextLine title={"Number of Engines"} value={engines.number} />
          <TextLine
            title={"Thrust (vacuum)"}
            value={engines.thrust_vacuum.kN + "kN"}
          />
          <TextLine title={"Stages"} value={stages} />
          <TextLine title={"Mass"} value={mass.lb + "lbs/" + mass.kg + "kg"} />
          <Link link={wikipedia} text={"Wikipedia Link"} />
        </div>
      </div>
    </div>
  );
};

export default Details;
