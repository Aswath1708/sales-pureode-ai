import { useContext } from "react";
import { SettingsContext } from "./settingsContext";

const useSettings = () => useContext(SettingsContext);

export default useSettings;