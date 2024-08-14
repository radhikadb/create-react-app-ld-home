import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevron } from "@fortawesome/free-solid-svg-icons";

export default function formbtn() {
  return (
    <>
      <div className="form-btn">
        <button type="button" className="back-btn action back">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />Back
        </button>
        <button type="button" className="action next">
          Next
        </button>
        <button className="action submit btn btn-success">Submit</button>
      </div>
    </>
  );
}
