import React, { useEffect, useState } from "react";
import { Col, OverlayTrigger, Row } from "react-bootstrap";
import "react-tooltip/dist/react-tooltip.css";
import { ReactComponent as AntDIcon } from '../../Assets/antDIcon.svg'
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiRedux,
  SiMobxstatetree,
  SiMaterialui,
  SiApacheecharts,
  SiReduxsaga,
} from "react-icons/si";
import { Tooltip as ReactTooltip } from "react-tooltip";
import style from './style.css'

import {
  BsFillBootstrapFill
} from "react-icons/bs";


const Techstack = () => {
  const [active, setActive] = useState(null)
  const getTooltipId = (val) => {
    setActive(val)
  }
  const handleMouseLeave = () => {
    setActive(null)
  }

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)} >
          <DiJavascript1 color="white" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(2)}>
          <DiReact color="#5ad1f6" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>React JS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          <SiRedux color="#7649be" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}> React Redux</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          <SiReduxsaga color="#7649be" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}> React Redux</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          < FaVuejs color="green" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Vue JS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMobxstatetree color="#e96d03" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Mobx</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          <SiMaterialui color="#4180ff" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Material UI</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          <BsFillBootstrapFill color="#7911f1" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Bootstrap</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          <SiApacheecharts color="#dc375e" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Apache Echarts</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseLeave={handleMouseLeave} onMouseEnter={() => getTooltipId(1)}>
          <DiGit color="#e84e31" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>GIT</p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
