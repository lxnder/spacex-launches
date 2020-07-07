import React from "react";
import { useStore } from "../../stores/global";
import { GET_LAUNCH } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import Details from "./Details";
import Description from "./Description";
import Pictures from "./Pictures";

const LaunchInfo = () => {
  const { selectedLaunchID } = useStore();
  const { loading, error, data } = useQuery(GET_LAUNCH(30));

  const mainDivClasses = classNames(
    "absolute",
    "top-0",
    "left-0",
    "w-screen",
    "pt-20",
    "h-screen",
    "bg-green-200",
    "font-questrial"
  );

  const gridWrapperClasses = classNames(
    "bg-green-300",
    "w-full",
    "h-full",
    "grid",
    "grid-cols-2",
    "py-8",
    "px-16",
    "space-y-8",
    "overflow-y-auto"
  );

  return (
    <div className={mainDivClasses}>
      {!loading && !error && (
        <div className={gridWrapperClasses}>
          <Description description={data.launch.details} />
          <Details data={data} />
          <Pictures pictures={data.launch.links.flickr_images} />
        </div>
      )}
    </div>
  );
};

export default LaunchInfo;
