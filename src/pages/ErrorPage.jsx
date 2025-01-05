import React from "react";

const ErrorPage = () => {
  return (
    <div className="centered h-screen">
      <span className="text-7xl">404</span>
      <div className="mt-7">
        Are you looking for this{" "}
        <a className="text-blue-700" href="/">
          Link
        </a>{" "}
      </div>
    </div>
  );
};

export default ErrorPage;
