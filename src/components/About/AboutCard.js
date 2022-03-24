import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Bruno Borges </span>
            from <span className="blue"> São Paulo, Brazil but living in Dublin, Ireland.</span>
            <br />I am a graduate of Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading, learning, documentaries, podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Community-based activities like church, clubs, sports teams
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “First, solve the problem. Then, write the code.”{" "}
          </p>
          <footer className="blockquote-footer">John Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
