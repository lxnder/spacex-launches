import { useQuery } from "@apollo/react-hooks";
import React from "react";
import Background from "./components/Background";
import LaunchInfo from "./components/launchInfo/LaunchInfo";
import DynamicButtonFilter from "./components/overlay/DynamicButtonFilter";
import LaunchList from "./components/overlay/LaunchList";
// eslint-disable-next-line
import WelcomeScreen from "./components/welcomeScreen/WelcomeScreen";
import { GET_LAUNCHES } from "./lib/queries";
import { useStore } from "./stores/global";

const App = () => {
  // Prefetching for speed purposes
  useQuery(GET_LAUNCHES);
  // eslint-disable-next-line
  const { overlayIsActive, selectedLaunchID } = useStore();

  return (
    <>
      <DynamicButtonFilter />
      {overlayIsActive && <LaunchList />}
      {/* {!selectedLaunchID && <WelcomeScreen />} */}
      <LaunchInfo />
      <Background />
    </>
  );
};

export default App;
