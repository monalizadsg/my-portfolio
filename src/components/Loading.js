import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = (props) => {
  return (
    <div
      style={{
        zIndex: "1000",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {props.isLoading && (
        <CircularProgress size={props.size} style={{ color: "#b78ec2" }} />
      )}
    </div>
  );
};

export default Loading;
