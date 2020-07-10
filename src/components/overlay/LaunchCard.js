import classNames from "classnames";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { useStore } from "../../stores/global";

const LaunchCard = ({ launch }) => {
  const {
    setOverlayIsActive,
    setSelectedLaunchID,
    setSelectedLaunchName,
  } = useStore();

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

  const onCardClick = (launchID, launchName) => {
    setSelectedLaunchID(launchID);
    setSelectedLaunchName(launchName);
    setOverlayIsActive(false);
  };

  const cardClasses = classNames(
    "h-auto",
    "grid grid-cols-12 col-span-1",
    "z-50",
    "p-2",
    "font-questrial",
    "cursor-pointer",
    "border-b border-subtle-10",
    "transition-all duration-50",
    "hover:shadow-xl hover:border-transparent hover:bg-clear-40"
  );

  const infoClasses = classNames(
    "flex flex-col justify-center items-center col-span-7"
  );

  const imgClasses = classNames("flex items-center justify-center col-span-5");

  const textClasses = attributes =>
    classNames("text-center", "text-sm", attributes);

  // TODO: clean up styles
  return (
    <div
      className={cardClasses}
      onClick={() => onCardClick(launch.id, launch.mission_name)}
    >
      <div className={infoClasses}>
        <p className={textClasses("font-bold text-blue-900 xxs:text-lg")}>
          {launch.mission_name}
        </p>

        <p className={textClasses("text-gray-800 xxs:text-lg")}>
          {formatLaunchDate(launch.launch_date_unix)}
        </p>
        {launch.upcoming ? (
          <p className={textClasses("text-gray-700 xxs:text-base")}>
            {formatRemainingTime(launch.launch_date_unix)}
          </p>
        ) : (
          <p className={textClasses("text-gray-700 xxs:text-base")}>
            Status:{" "}
            {launch.launch_success ? (
              <span className="text-green-600">SUCCESS</span>
            ) : (
              <span className="text-red-500">FAILURE</span>
            )}
          </p>
        )}
      </div>
      <div className={imgClasses}>
        {launch.links.mission_patch_small !== null ? (
          <img
            src={launch.links.mission_patch_small}
            alt="small_patch"
            className="h-16 xxs:h-24"
          />
        ) : (
          <img
            src="assets/no_patch_text.png"
            alt="no_patch"
            className="h-16 xxs:h-24"
          ></img>
        )}
      </div>
    </div>
  );
};

LaunchCard.propTypes = {
  launch: PropTypes.object.isRequired,
};

export default LaunchCard;
