import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {SiStackoverflow} from "react-icons/si"; 
import { SiUpwork, SiFiverr,SiFreelancer,SiLinkedin } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Zeshan Malik</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Zeshan Malik</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~0132d5ab05e75a9d40"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiUpwork color={'#14a800'} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fiverr.com/zeshan_5055?up_rollout=true"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiFiverr color={'#14a800'} size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.freelancer.com/u/Zeshanmalik5055"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiFreelancer color={'#29b3fe'} size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zeshanmalik5055/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLinkedin color={'#0a66c2'}/>
                </a>
              </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
