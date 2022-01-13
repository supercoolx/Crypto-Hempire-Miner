import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink} from 'react-router-dom';

import Papan2 from '../../../assets/images/papan2.png';
import BusdMiner from '../../../assets/images/busd-miner.png';
import BnbMiner from '../../../assets/images/bnb-miner.png';
import QuinMiner from '../../../assets/images/quin-miner.png';
import SolanaMiner from '../../../assets/images/solana-miner.png';
import RippleMiner from '../../../assets/images/ripple-miner.png';
import BtnBG from '../../../assets/images/btn-bg.png';
import PotBnb from '../../../assets/images/pot-bnb.png';
import PotBusd from '../../../assets/images/pot-busd.png';
import PotSolana from '../../../assets/images/pot-solana.png';
import PotQuin from '../../../assets/images/pot-quin.png';
import PotRipple from '../../../assets/images/pot-ripple.png';

const Miners = () => {
  return (
    <>
      <Container className="miners">
          <Row>
            <Col md="2"></Col>
            <Col md="4" className="miner">
              <img src={BusdMiner} />
              <Row className="flex-wrapper detail">
                <Col xs="2" className="pot">
                  <img src={PotBusd} />
                </Col>
                <Col xs="8" className="text-center content">
                  <p>Reward: 10% Daily BUSD</p>
                  <p>Brings: 300%/Month</p>
                </Col>
                <Col xs="2" className="pot">
                  <img src={PotBusd} />
                </Col>
              </Row>
              <div className="text-center">
                <NavLink to="/busd" className="btn btn-transparent text-brown default-btn" style={{ backgroundImage: `url(${BtnBG})` }}>plant</NavLink>
              </div>
            </Col>
            <Col md="4" className="miner">
              <img src={BnbMiner} />
              <Row className="flex-wrapper detail">
                <Col xs="2" className="pot">
                  <img src={PotBnb} />
                </Col>
                <Col xs="8" className="text-center content">
                  <p>Reward: 5% Daily BNB</p>
                  <p>Brings: 150%/Month</p>
                </Col>
                <Col xs="2" className="pot">
                  <img src={PotBnb} />
                </Col>
              </Row>
              <div className="text-center">
                <NavLink to="/busd-hire" className="btn btn-transparent text-brown default-btn" style={{ backgroundImage: `url(${BtnBG})`, fontSize: 12, padding: 10 }}>LAUNCHING SOON</NavLink>
              </div>
            </Col>
            
            <Col md="4" className="miner">
              <img src={RippleMiner} />
              <Row className="flex-wrapper detail">
                <Col xs="2" className="pot">
                  <img src={PotRipple} />
                </Col>
                <Col xs="8" className="text-center content">
                  <p>Reward: ?% Daily XRP</p>
                  <p>Brings: ??%/Month</p>
                </Col>
                <Col xs="2" className="pot">
                  <img src={PotRipple} />
                </Col>
              </Row>
              <div className="text-center">
                <NavLink to="/" className="btn btn-transparent text-brown default-btn" style={{ backgroundImage: `url(${BtnBG})`, fontSize: 12, padding: 10 }}>LAUNCHING SOON</NavLink>
              </div>
            </Col>
            <Col md="4" className="miner">
              <img src={SolanaMiner} />
              <Row className="flex-wrapper detail">
                <Col xs="2" className="pot">
                  <img src={PotSolana} />
                </Col>
                <Col xs="8" className="text-center content">
                  <p>Reward: ?% Daily SOL</p>
                  <p>Brings: ??%/Month</p>
                </Col>
                <Col xs="2" className="pot">
                  <img src={PotSolana} />
                </Col>
              </Row>
              <div className="text-center">
                <NavLink to="/" className="btn btn-transparent text-brown default-btn" style={{ backgroundImage: `url(${BtnBG})`, fontSize: 12, padding: 10 }}>LAUNCHING SOON</NavLink>
              </div>
            </Col>
            <Col md="4" className="miner">
              <img src={QuinMiner} />
              <Row className="flex-wrapper detail">
                <Col xs="2" className="pot">
                  <img src={PotQuin} />
                </Col>
                <Col xs="8" className="text-center content">
                  <p>Reward: ?% Daily USDT</p>
                  <p>Brings: ??%/Month</p>
                </Col>
                <Col xs="2" className="pot">
                  <img src={PotQuin} />
                </Col>
              </Row>
              <div className="text-center">
                <NavLink to="/" className="btn btn-transparent text-brown default-btn" style={{ backgroundImage: `url(${BtnBG})`, fontSize: 12, padding: 10 }}>LAUNCHING SOON</NavLink>
              </div>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default Miners;