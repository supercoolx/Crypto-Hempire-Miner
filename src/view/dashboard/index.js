import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';

import Miners from './components/miner';
import Description from './components/description';
import { DashboardStyle } from '../../style';

import BG from '../../assets/images/bg.png';
import PapanGetWeed from '../../assets/images/papan-get-weed.png';
import Play from '../../assets/images/btn-play.png';
import People from '../../assets/images/people.png';
import Papan1 from '../../assets/images/papan1.png';

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-content' style={{ backgroundImage: `url(${BG})` }}>
      <DashboardStyle>
        <Container>
          <Row className="text-center" style={{ padding: '0 50px' }}>
            <Col md="2"></Col>
            <Col md="8" className="text-center">
              <Row className="get-weed">
                <img src={PapanGetWeed}/>
              </Row>
              <Row>
                <Col xs="4"></Col>
                <Col xs="4" className="text-center">
                  <NavLink to="/busd" className="btn-transparent padding-0"><img src={Play} /></NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center people">
            <Col md="2"></Col>
            <Col md="8">
              <img src={People}/>
            </Col>
          </Row>
          <Row className="text-center" style={{ padding: '0 50px' }}>
            <Col md="3"></Col>
            <Col md="6" className="notification text-brown" style={{ backgroundImage: `url(${Papan1})` }}>
              <h3 className="title">HIRE GARDNERS</h3>
              <p>The game has 5 gardners and each of them can produce 5 kind of weed, which is BNB, BUSD, USDT, SOL, and XRP</p>
            </Col>
          </Row>
          <Miners />
          <Row className="text-center" style={{ padding: '0 50px' }}>
            <Col md="3"></Col>
            <Col md="6" className="notification text-brown" style={{ backgroundImage: `url(${Papan1})` }}>
              <h3 className="title">EARN MORE!</h3>
              <p>The more Gardners you hired, the more plants you’ll harvest and get BNB, BUSD, USDT, SOL, and XRP to straight to your wallet </p>
            </Col>
          </Row>
          <Description />
        </Container>
      </DashboardStyle>
    </div>
  );
}

export default Dashboard;