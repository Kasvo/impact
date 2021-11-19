import React from "react";

const Candidate = ({ Image, name}) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  return (
    <article className="book">
      <div>
        <img src={Image} alt="" />
        <h1>{name}</h1>
      </div>
    </article>
  );
};

export default Candidate;
