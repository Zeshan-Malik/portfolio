import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJira } from "react-icons/fa";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fill="#4aa6ea"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fill="#f06c38"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJira fill="#4081f6" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku fill="#383bab"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
