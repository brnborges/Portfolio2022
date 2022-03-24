import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Professional recently graduated in BSc Science in Computing & Multimedia, passionate about technology, 
            with a good understanding of web development and IT infrastructure. 
              <br />
              <br />Practical knowledge of software development using 
              <i>
                <b className="blue"> JavaScript, TypeScript and React, 
              HTML and CSS &nbsp;</b>
              </i>
              with exposure to software development lifecycle and the principles of an Agile environment. 
              Knowledge of back-end and front-end technologies, frameworks, and services, with a good understanding of relational databases.
              <br />
              <br />
              Excellent communication and relationship skills with the ability to contribute and work effectively within a team, 
              demonstrating strong analytical and problem-solving abilities.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/brnborges"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brnborges"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
