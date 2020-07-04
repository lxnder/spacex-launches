import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import classNames from "classnames";
import { useStore } from "../../stores/global";

const LaunchCard = ({ launch }) => {
  const setOverlayIsActive = useStore(state => state.setOverlayIsActive);
  const setSelectedLaunchID = useStore(state => state.setSelectedLaunchID);

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

  const onCardClick = launchID => {
    setSelectedLaunchID(launchID);
    setOverlayIsActive(false);
  };

  const cardClasses = classNames(
    "grid",
    "h-auto",
    "grid-cols-12",
    "col-span-1",
    "p-2",
    "hover:shadow-xl",
    "hover:border-transparent",
    "cursor-pointer",
    "font-questrial",
    "transition-all",
    "duration-100",
    "border-b",
    "border-subtle-10",
    "hover:bg-clear-40",
    "z-50"
  );

  const infoClasses = classNames(
    "col-span-7",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  const imgClasses = classNames(
    "flex",
    "items-center",
    "justify-center",
    "col-span-5"
  );

  const textClasses = attributes =>
    classNames("text-center", "text-sm", attributes);

  // TODO: Lazy load images
  return (
    <div className={cardClasses} onClick={() => onCardClick(launch.id)}>
      <div className={infoClasses}>
        <p className={textClasses("font-bold text-blue-900 xxs:text-lg")}>
          {launch.mission_name}
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
        <p className={textClasses("text-gray-800 xxs:text-lg")}>
          {formatLaunchDate(launch.launch_date_unix)}
        </p>
      </div>
      <div className={imgClasses}>
        {launch.links.mission_patch_small !== null ? (
          <img
            src={launch.links.mission_patch_small}
            alt="small_patch"
            className="h-16 xxs:h-24"
          ></img>
        ) : (
          <img
            src="assets/no_patch_text.png"
            alt=""
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
