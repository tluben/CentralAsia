import React from "react";
import { Link, Route } from "react-router-dom";


function Contact(props) {
  return (
    <div className="container">
      <form method="post" action="tluben@gmail.com" >
          <textarea id="w3mission" rows="4" cols="50">
             Send Me and Email
          </textarea>
        <input type="submit" value="Send Email" />
      </form>
    </div>
  );
}

export default Contact;
