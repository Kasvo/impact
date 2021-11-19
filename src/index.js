import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css"

import SpecificBook from "./Candidate";



function CandidateList() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    ).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  }, []);
  console.warn(users);
  
  return (
    <section className="candidatelist">
      {users.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
      {console.log(users)}
    </section>
  );
}
ReactDom.render(<CandidateList />, document.getElementById('root'))