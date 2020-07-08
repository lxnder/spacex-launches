import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { GET_LAUNCH } from "../../lib/queries";
import { useStore } from "../../stores/global";
import Description from "./Description";
import Details from "./Details";
import Pictures from "./Pictures";

const LaunchInfo = () => {
  const { selectedLaunchID } = useStore();
  const [rand, setRand] = useState(1);
  const { loading, error, data } = useQuery(
    GET_LAUNCH(selectedLaunchID || 110)
  );

  useEffect(() => {
    setRand(1 + Math.floor(Math.random() * Math.floor(50)));
  }, []);

  const mainDivClasses = classNames(
    "absolute",
    "top-0",
    "left-0",
    "w-screen",
    "pt-20",
    "h-screen",
    "font-questrial",
    "z-10",
    "flex flex-col items-center"
  );

  const gridWrapperClasses = classNames(
    "w-full",
    "h-full",
    "grid",
    "grid-cols-12",
    "px-16",
    "pb-8",
    "col-gap-8",
    "overflow-y-auto"
    // "max-w-screen-xl"
  );

  return (
    <div className={mainDivClasses}>
      {!loading && !error && (
        <>
          <Description description={data.launch.details} />
          <div className={gridWrapperClasses}>
            <Details data={data} />
            <Pictures pictures={data.launch.links.flickr_images} />
          </div>
        </>
      )}
    </div>
  );
};

export default LaunchInfo;
