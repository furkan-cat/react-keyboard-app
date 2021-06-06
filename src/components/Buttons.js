import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Map from "./Map";

const Buttons = () => {
  const keyPressHandler = (e) => {
    if (document.getElementById(e.keyCode)) {
      document.getElementById(e.keyCode).style.background = "red";
      console.log(e.code);
      console.log(e.keyCode);
    } 
  };

  const keyDownHandler = (e) => {
    if (document.getElementById(e.keyCode)) {
      document.getElementById(e.keyCode).style.background = "";
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", keyDownHandler);
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keyup", keyDownHandler);
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  // console.log(key1, key2, key3, key4, key5, key6);

  return (
    <div className="container d-flex justify-content-center align-items-center concenter">
      <div className="rounded-3">
        <Map />
      </div>
    </div>
  );
};

export default Buttons;
