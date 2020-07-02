import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const LaunchCard = ({ launch }) => {
  const formatLaunchDate = launchTimeUnix => {
    return moment.unix(launchTimeUnix).format("MMMM Do YYYY");
  };

  const formatRemainingTime = launchTimeUnix => {
    let now = moment().unix();
    if (now > launchTimeUnix) {
      return "Launched " + moment.unix(launchTimeUnix).fromNow();
    } else {
      return "Launching " + moment.unix(launchTimeUnix).fromNow();
    }
  };

  // TODO: Clear up styles + colored status
  // TODO: Add onClick action + global store
  // TODO: Lazy load images
  return (
    <div className="grid h-32 grid-cols-12 col-span-1 p-2 hover:shadow-xl hover:border-transparent cursor-pointer font-questrial transition-all duration-150 border-b border-subtle-10 hover:bg-clear-40">
      <div className="col-span-7 flex flex-col justify-center items-center">
        <p className="font-bold text-blue-900 text-lg text-center">
          {launch.mission_name}
        </p>

        {launch.upcoming ? (
          <p className="text-gray-800 text-sm">
            {formatRemainingTime(launch.launch_date_unix)}
          </p>
        ) : (
          <p className="text-sm text-gray-800">
            Status: {launch.launch_success ? "SUCCESS" : "FAILURE"}
          </p>
        )}
        <p className="text-gray-600">
          {formatLaunchDate(launch.launch_date_unix)}
        </p>
      </div>
      <div className="flex items-center justify-center col-span-5">
        {launch.links.mission_patch_small !== null ? (
          <img
            src={launch.links.mission_patch_small}
            alt=""
            className="h-24"
          ></img>
        ) : (
          <img src="assets/no_patch_red.png" alt="" className="h-24"></img>
        )}
      </div>
    </div>
  );
};

LaunchCard.propTypes = {
  launch: PropTypes.object.isRequired,
};

export default LaunchCard;
