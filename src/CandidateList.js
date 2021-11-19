import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

import SpecificBook from "./Candidate";

import Navbar from "./Navbar";

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
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="navbar">
        <a href="">Home</a>
        <a href="">Shortlisted</a>
        <a href="">Rejected</a>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <section className="candidatelist">
        {users
          .filter((book) => {
            if (searchTerm == "") {
              return book;
            } else if (
              book.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return book;
            }
          })
          .map((book, index) => {
            return <SpecificBook key={book.id} {...book}></SpecificBook>;
          })}
        {console.log(users)}
      </section>
    </div>
  );
}

export default CandidateList