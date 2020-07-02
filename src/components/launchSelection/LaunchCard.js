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

  return (
    <div className="grid h-32 grid-cols-12 col-span-1 p-2 bg-gray-100">
      <div className="col-span-7">
        <p>{launch.mission_name}</p>
        <p>{formatLaunchDate(launch.launch_date_unix)}</p>
        {launch.upcoming ? (
          <p>{formatRemainingTime(launch.launch_date_unix)}</p>
        ) : (
          <p>Status: {launch.launch_success ? "Success" : "Failure"}</p>
        )}
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
