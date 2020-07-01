import React, { useState, useEffect } from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import DynamicButton from "./DynamicButton";
import moment from "moment";

const LaunchSelector = () => {
  const [overlayIsActive, setOverlayIsActive] = useState(true);
  const [launchesByDate, setLaunchesByDate] = useState([]);

  const { loading, error, data } = useQuery(GET_LAUNCHES);

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

  const onChange = e => {};

  const mainDivClasses = classNames(
    "h-screen",
    "w-screen",
    "fixed",
    "top-0",
    "left-0",
    "z-10",
    "flex",
    "flex-col"
  );

  const topBarClasses = classNames(
    "z-30",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "content-center",
    "w-screen",
    "h-16",
    "bg-gray-800"
  );

  return (
    <div className={mainDivClasses}>
      <div className={topBarClasses}>
        <DynamicButton
          onClick={() => setOverlayIsActive(true)}
          onChange={onChange}
          overlayIsActive={overlayIsActive}
        />
      </div>
      {overlayIsActive ? (
        <div
          className="bg-gray-500 w-full h-full px-20 transition-all ease-in duration-500 flex flex-col justify-center items-center"
          onClick={disableOverlay}
        >
          <div className="container max-h-80 h-full bg-gray-300 grid grid-cols-2 gap-4 p-4 overflow-y-auto">
            {data &&
              launchesByDate.map(launch => (
                <div className="col-span-1 bg-gray-100 p-2 grid grid-cols-4">
                  <div className="col-span-3">
                    <p>{launch.mission_name}</p>
                    <p>
                      {moment
                        .unix(launch.launch_date_unix)
                        .format("MMMM Do YYYY")}
                    </p>
                    <p>
                      Status: {launch.launch_success ? "Success" : "Failure"}
                    </p>
                  </div>
                  <div className="col-span-1">
                    {launch.links.mission_patch_small !== null && (
                      <img src={launch.links.mission_patch_small}></img>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="z-20 w-full h-full transition-all ease-in duration-500"></div>
      )}
    </div>
  );
};

export default LaunchSelector;
