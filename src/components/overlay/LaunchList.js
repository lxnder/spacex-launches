import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useStore } from "../../stores/global";
import LaunchCard from "./LaunchCard";

const LaunchList = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  const {
    setOverlayIsActive,
    launchFilterName,
    sortType,
    setSortType,
  } = useStore();
  const [launchesByDate, setLaunchesByDate] = useState([]);

  const launchPassesFilter = name => {
    if (launchFilterName === "") {
      return true;
    } else {
      return name.toLowerCase().match(launchFilterName.toLowerCase()) !== null;
    }
  };

  const getSelectedLaunches = () => {
    if (sortType === "name") {
      return data.launches;
    } else if (sortType === "date") {
      return launchesByDate;
    }
  };

  const disableOverlay = e => {
    if (e.target === e.currentTarget) {
      setOverlayIsActive(false);
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

  //TODO: clear up styles
  const mainDivClasses = classNames(
    "h-screen",
    "w-screen",
    "fixed",
    "flex",
    "flex-col",
    "top-0",
    "left-0",
    "z-20",
    "bg-transp-90"
  );

  const containerClasses = classNames(
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "items-center",
    "px-4 sm:px-12 md:px-12 lg:px-20 xl:px-20",
    "space-y-4",
    "mt-20 min-h-0",
    "min-h-0",
    "pb-8",
    "pt-4"
  );

  const launchesClasses = classNames(
    "w-full",
    "max-w-screen-xl",
    "h-full",
    "px-4 md:p-4",
    "overflow-y-auto",
    "shadow-2xl",
    "gradient-bg-card"
  );

  const gridWrapperClasses = classNames(
    "grid",
    "xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1",
    "col-gap-4",
    "h-auto"
  );

  const filterSelectionClasses = classNames(
    "flex",
    "justify-center",
    "w-full sm:w-3/4 md:w-1/2 lg:w-1/3",
    "h-8 xxs:h-10"
  );

  const buttonClasses = isActive =>
    classNames(
      "flex",
      "items-center",
      "justify-center",
      "w-1/2",
      "h-full",
      "cursor-pointer",
      "transition-all",
      "duration-200",
      "ease-in-out",
      "font-questrial",
      {
        "shadow-inner bg-gray-300 font-bold text-blue-900": isActive,
        "shadow-xl bg-clear-95 border border-subtle-5 text-gray-800 hover:bg-blue-100": !isActive,
      }
    );

  // TODO: Loading and error status
  // TODO: No results

  return (
    <div className={mainDivClasses}>
      <div className={containerClasses} onClick={e => disableOverlay(e)}>
        <div className={filterSelectionClasses}>
          <div
            className={buttonClasses(sortType === "name")}
            onClick={() => setSortType("name")}
          >
            NAME
          </div>
          <div
            className={buttonClasses(sortType === "date")}
            onClick={() => setSortType("date")}
          >
            DATE
          </div>
        </div>
        <div className={launchesClasses}>
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
    </div>
  );
};

export default LaunchList;
