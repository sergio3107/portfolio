import React from "react";
import me from "./me.jpg";

function home() {
  return (
    <div>
      <div className="card">
        <h1>Welcome to my portfolio</h1>
        <br />
        <h2>Contact Me</h2>
        <p>Email: pillaysergio@gmail.com</p>
        <p>LinkedIn:https://www.linkedin.com/in/sergio-pillay-9abbaa1aa/</p>
        <p>GitHub:sergio3107</p>
        <br />
      </div>
      <div className="container">
        <img src={me} alt="img" />
        <p>Hi im Sergio Pillay,a junior Frontend Developer.</p>
      </div>
      <br />
      <br />
      <br />
      <h3>Created by: Sergio Pillay</h3>
    </div>
  );
}

export default home;
