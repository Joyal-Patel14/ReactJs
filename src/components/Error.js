import React from "react";
import { useRouteError } from "react-router-dom"; // Its inbuilt hook which gives more info about error

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Ooops!!</h1>
      <h3>Something went wrong!</h3>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
