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
    <div className="grid h-32 grid-cols-4 col-span-1 p-2 bg-gray-100">
      <div className="col-span-3">
        <p>{launch.mission_name}</p>
        <p>{formatLaunchDate(launch.launch_date_unix)}</p>
        {launch.upcoming ? (
          <p>{formatRemainingTime(launch.launch_date_unix)}</p>
        ) : (
          <p>Status: {launch.launch_success ? "Success" : "Failure"}</p>
        )}
      </div>
      <div className="col-span-1">
        {launch.links.mission_patch_small !== null && (
          <img src={launch.links.mission_patch_small} alt=""></img>
        )}
      </div>
    </div>
  );
};

LaunchCard.propTypes = {
  launch: PropTypes.object.isRequired,
};

export default LaunchCard;
