import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import React from "react";
import { GET_LAUNCH } from "../../lib/queries";
import { useStore } from "../../stores/global";
import Description from "./Description";
import Details from "./Details";
import Pictures from "./Pictures";
import { motion } from "framer-motion";

const LaunchInfo = () => {
  const { selectedLaunchID } = useStore();
  const { loading, error, data } = useQuery(GET_LAUNCH(selectedLaunchID));

  const mainDivClasses = classNames(
    "w-screen h-auto",
    "absolute top-0 left-0",
    "pt-20",
    "z-10",
    "font-questrial"
  );

  return (
    <motion.div
      className={mainDivClasses}
      key={"launch_info"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1.5,
        ease: "easeOut",
      }}
      exit={{ opacity: 0 }}
    >
      {!loading && !error && (
        <div className="w-full h-full flex flex-col items-center overflow-y-auto">
          <Description description={data.launch.details} />
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={
              data.launch.links.flickr_images.length > 0
                ? {
                    backgroundImage: `url(${data.launch.links.flickr_images[0]})`,
                  }
                : {
                    backgroundImage: `url(assets/no_image.png)`,
                  }
            }
          >
            <div
              className="w-full h-full"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <div className="w-full h-auto lg:h-screen grid grid-cols-12">
                <Details data={data} />
                <Pictures pictures={data.launch.links.flickr_images} />
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LaunchInfo;
