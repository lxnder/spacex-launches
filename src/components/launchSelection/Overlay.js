import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import moment from "moment";

const Overlay = ({
  launchesData: { data, loading, error },
  disableOverlay,
  launchNameFilter,
}) => {
  const [launchesByDate, setLaunchesByDate] = useState([]);

  // Duplicates list of launches ordered by date for performance reasons after data change
  useEffect(() => {
    if (!loading && !error) {
      setLaunchesByDate(
        [...data.launches].sort((a, b) => {
          return parseInt(b.launch_date_unix) - parseInt(a.launch_date_unix);
        })
      );
    } else {
      setLaunchesByDate([]);
    }
  }, [data, loading, error]);

  const mainDivClasses = classNames(
    "bg-gray-500",
    "w-full",
    "h-full",
    "px-20",
    "transition-all",
    "ease-in",
    "duration-500",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  const containerClasses = classNames(
    "container",
    "max-h-80",
    "h-full",
    "bg-gray-300",
    "grid",
    "grid-cols-2",
    "gap-4",
    "p-4",
    "overflow-y-auto"
  );

  // TODO: check if upcoming + remaining time
  // TODO: Regex filtering
  // TODO: Sort by name and date buttons
  // TODO: Abstract launch card component
  return (
    <div className={mainDivClasses} onClick={disableOverlay}>
      <div className={containerClasses}>
        {data &&
          launchesByDate.map(launch => (
            <div
              className="col-span-1 bg-gray-100 p-2 grid grid-cols-4"
              key={launch.id}
            >
              <div className="col-span-3">
                <p>{launch.mission_name}</p>
                <p>
                  {moment.unix(launch.launch_date_unix).format("MMMM Do YYYY")}
                </p>
                <p>Status: {launch.launch_success ? "Success" : "Failure"}</p>
              </div>
              <div className="col-span-1">
                {launch.links.mission_patch_small !== null && (
                  <img src={launch.links.mission_patch_small} alt=""></img>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Overlay.propTypes = {
  launchesData: PropTypes.object.isRequired,
  disableOverlay: PropTypes.func.isRequired,
  launchNameFilter: PropTypes.string,
};

export default Overlay;
