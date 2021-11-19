import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css"

import CandidateList from "./CandidateList";

import Navbar from "./Navbar";

function Candidate() {
  return (
   
      
      <section >
        <CandidateList></CandidateList>
      </section>

  );
}

ReactDom.render(<Candidate/>, document.getElementById('root'))