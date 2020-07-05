import create from "zustand";

export const [useStore] = create(set => ({
  selectedLaunchID: null,
  setSelectedLaunchID: launchID =>
    set(() => ({
      selectedLaunchID: launchID,
    })),
  selectedLaunchName: "",
  setSelectedLaunchName: launchName =>
    set(() => ({
      selectedLaunchName: launchName,
    })),
  overlayIsActive: false,
  setOverlayIsActive: bool =>
    set(() => ({
      overlayIsActive: bool,
    })),
  launchFilterName: "",
  setLaunchFilterName: name =>
    set(() => ({
      launchFilterName: name,
    })),
}));
