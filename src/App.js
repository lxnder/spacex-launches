import { useQuery } from "@apollo/react-hooks";
import React from "react";
import Background from "./components/Background";
import LaunchInfo from "./components/launchInfo/LaunchInfo";
import DynamicButtonFilter from "./components/overlay/DynamicButtonFilter";
import LaunchList from "./components/overlay/LaunchList";
import { GET_LAUNCHES } from "./lib/queries";
import { useStore } from "./stores/global";

const App = () => {
  // Prefetching for speed purposes
  useQuery(GET_LAUNCHES);
  const { overlayIsActive } = useStore();

  return (
    <>
      <DynamicButtonFilter />
      {overlayIsActive && <LaunchList />}
      <div className="absolute w-screen h-screen flex flex-col items-center pt-32 p-12  z-10">
        <div className="w-full h-full grid grid-cols-12 row-gap-12 grid-rows-6 max-w-screen-xl">
          <div
            className="col-span-3 row-span-5 h-full  bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(assets/ships/left.png)" }}
          />
          <div
            className="col-span-6 row-span-5 h-full  bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(assets/ships/mid.png)" }}
          />
          <div
            className="col-span-3 row-span-5 h-full  bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(assets/ships/right.png)" }}
          />
          <div className="col-span-12 row-span-1 flex flex-col items-center space-y-4">
            <img
              className="w-6/12 h-auto"
              src="assets/unofficial_logo_spaced.png"
              alt="unofficial_logo"
            />
            <div className="w-5/12 border-t border-gray-700 p-2">
              <p className="text-center text-base xxs:text-xl sm:text-2xl font-questrial text-gray-700">
                UNOFFICIAL LAUNCHES SITE
              </p>
            </div>
          </div>
        </div>
      </div>
      <LaunchInfo />
      <Background />
    </>
  );
};

export default App;
