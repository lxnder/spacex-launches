import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import LaunchCard from "./LaunchCard";

const LaunchList = ({
  launchesData: { data, loading, error },
  disableOverlay,
  launchNameFilter,
}) => {
  const [launchesByDate, setLaunchesByDate] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("name");

  const launchPassesFilter = name => {
    if (launchNameFilter === "") {
      return true;
    } else {
      return name.toLowerCase().match(launchNameFilter.toLowerCase()) !== null;
    }
  };

  const getSelectedLaunches = () => {
    if (selectedFilter === "name") {
      return data.launches;
    } else if (selectedFilter === "date") {
      return launchesByDate;
    }
  };

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
    "w-full",
    "h-full",
    "px-20",
    "transition-all",
    "ease-in",
    "duration-500",
    "flex",
    "flex-col",
    "justify-center",
    "space-y-4"
  );

  // TODO: Fix container sizing
  const containerClasses = classNames(
    "container",
    "mx-auto",
    "max-h-80",
    "h-full",
    "p-4",
    "overflow-y-auto",
    "shadow-2xl"
  );

  const gridWrapperClasses = classNames(
    "grid",
    "grid-cols-2",
    "col-gap-4",
    "h-auto"
  );

  const filterSelectionClasses = classNames(
    "container",
    "mx-auto",
    "flex",
    "justify-center",
    "w-full",
    "h-10",
    "px-4"
  );

  const buttonClasses = name =>
    classNames(
      "flex",
      "items-center",
      "justify-center",
      "w-64",
      "h-full",
      "cursor-pointer",
      "transition-all",
      "duration-200",
      "ease-in-out",
      "font-questrial",
      {
        "shadow-inner bg-subtle-5 font-bold text-blue-900":
          selectedFilter === name,
        "shadow-xl bg-clear-10 border border-subtle-5 text-gray-800 hover:bg-clear-50":
          selectedFilter !== name,
      }
    );

  // TODO: Loading and error status
  return (
    <div className={mainDivClasses} onClick={disableOverlay}>
      <div className={filterSelectionClasses}>
        <div
          className={buttonClasses("name")}
          onClick={() => setSelectedFilter("name")}
        >
          NAME
        </div>
        <div
          className={buttonClasses("date")}
          onClick={() => setSelectedFilter("date")}
        >
          DATE
        </div>
      </div>
      <div className={containerClasses}>
        <div className={gridWrapperClasses}>
          {data &&
            getSelectedLaunches().map(launch => (
              <React.Fragment key={launch.id}>
                {launchPassesFilter(launch.mission_name) && (
                  <LaunchCard launch={launch} />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

LaunchList.propTypes = {
  launchesData: PropTypes.object.isRequired,
  disableOverlay: PropTypes.func.isRequired,
  launchNameFilter: PropTypes.string,
};

export default LaunchList;
