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
  // eslint-disable-next-line
  const [rand, setRand] = useState(1);
  const { loading, error, data } = useQuery(GET_LAUNCH(selectedLaunchID));

  useEffect(() => {
    setRand(1 + Math.floor(Math.random() * Math.floor(106)));
  }, []);

  const mainDivClasses = classNames(
    "w-screen h-screen",
    "absolute top-0 left-0",
    "pt-20",
    "z-10",
    "font-questrial"
  );

  return (
    <div className={mainDivClasses}>
      {!loading && !error && (
        <div className="w-full h-full flex flex-col items-center overflow-y-auto">
          <Description description={data.launch.details} />
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${data.launch.links.flickr_images[0]})`,
            }}
          >
            <div
              className="w-full h-full"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <div className="w-full h-full grid grid-cols-12">
                <Details data={data} />
                <Pictures pictures={data.launch.links.flickr_images} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaunchInfo;
