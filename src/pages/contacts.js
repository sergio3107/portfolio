import React from "react";
import Button from "react-bootstrap/Button";

function contacts() {
  return (
    <div className="card">
      <form action="https://formspree.io/mnqglzrd" method="POST">
        <h1>Hello</h1>
        <p>Enter your Fullname:</p>
        <input type="text" name="fullname" />
        <p>Enter your Email:</p>
        <input type="text" name="email" />
        <p>Enter your Message:</p>
        <input type="text" name="message" />
        <Button>Send</Button>
      </form>
    </div>
  );
}

export default contacts;
