import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink} from 'react-router-dom';

import PotBnb from '../../../assets/images/pot-bnb.png';
import PotBusd from '../../../assets/images/pot-busd.png';
import PotSolana from '../../../assets/images/pot-solana.png';
import PotQuin from '../../../assets/images/pot-quin.png';
import PotRipple from '../../../assets/images/pot-ripple.png';
import BtnBG from '../../../assets/images/btn-bg.png';

const MinerList = () => {
  return (
    <>
      <Container className="miner-list">
        <div className="flex-wrapper">
          <div className="text-center miner">
            <img src={PotBusd} />
            <div className="text-center">
              <NavLink to="/busd" className="btn btn-transparent text-brown default-btn" style={{ backgroundImage: `url(${BtnBG})` }}>Plant BUSD</NavLink>
            </div>
          </div>
          <div className="text-center miner">
            <img src={PotBnb} />
            <div className="text-center">
              <NavLink to="/busd" className="btn btn-transparent text-brown default-btn launching-soon" style={{ backgroundImage: `url(${BtnBG})` }}>opening soon</NavLink>
            </div>
          </div>
          <div className="text-center miner">
            <img src={PotRipple} />
            <div className="text-center">
              <NavLink to="/busd" className="btn btn-transparent text-brown default-btn launching-soon" style={{ backgroundImage: `url(${BtnBG})` }}>coming 2022</NavLink>
            </div>
          </div>
          <div className="text-center miner">
            <img src={PotSolana} />
            <div className="text-center">
              <NavLink to="/busd" className="btn btn-transparent text-brown default-btn text-sm" style={{ backgroundImage: `url(${BtnBG})` }}>coming late NOV</NavLink>
            </div>
          </div>
          <div className="text-center miner">
            <img src={PotQuin} />
            <div className="text-center">
              <NavLink to="/busd" className="btn btn-transparent text-brown default-btn launching-soon" style={{ backgroundImage: `url(${BtnBG})` }}>coming 2022</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MinerList;