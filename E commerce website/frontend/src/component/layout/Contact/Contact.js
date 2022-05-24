import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:satyam.gla_cs19@gla.ac.in">
        <Button>Contact: satyam.gla_cs19@gla.ac.in</Button>
      </a>
    </div>
  );
};

export default Contact;
