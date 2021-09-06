import React, {useContext} from "react";
import { useIsFetching } from "react-query";
import HashLoader from "react-spinners/HashLoader";
import { ThemeContext } from "../contexts/ThemeContext";

const GlobalFetchingSpinner = () => {
  const {isBlueTheme} = useContext(ThemeContext)
  const isFetching = useIsFetching();

  return isFetching ? (
    <div className="fetching-spinner">
      <HashLoader color={isBlueTheme ? "#0d6efd" : "#343a40"} size={90} />
    </div>
  ) : null;
};

export default GlobalFetchingSpinner;
