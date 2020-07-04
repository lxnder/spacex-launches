import create from "zustand";

export const [useStore] = create(set => ({
  selectedLaunchID: null,
  setSelectedLaunchID: launchID =>
    set(state => ({
      selectedLaunchID: launchID,
    })),
  overlayIsActive: false,
  setOverlayIsActive: bool =>
    set(state => ({
      overlayIsActive: bool,
    })),
}));
