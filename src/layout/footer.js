import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { FooterStyle } from './style';
import { FaClipboardList } from "react-icons/fa";
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import LogoImage from '../assets/images/logo.png';
import BtnFAQ from '../assets/images/btn-faq.png';
import FooterFlower from '../assets/images/footer-flower.png';

const Footer = () => {
  return (
    <FooterStyle>
      <footer> 
        <Container>
          <div className="footer-flower text-center ">
            <Row className="margin-0">
              <Col md={3}>
              </Col>
              <Col md={6}>
                <img src={FooterFlower} />
              </Col>
            </Row>
          </div>
          <div className="flex-wrapper space-between">
            <NavLink to="/"><img src={LogoImage} className="footer-logo"/></NavLink> 
            <NavLink to="/faq"><img src={BtnFAQ} className="footer-faq"/></NavLink> 
          </div>
          <Row className="require-wallet">
            <p className="text-center text-light-brown">
              The Hempire Mining Game requires a browser extention Binance Smart Coin or MetaMask
            </p>
            <p className="text-center text-light-brown">
              To play on mobile devices, use Binance Smart Coin or MetaMask
            </p>
          </Row>
          <Row className="smart-contract text-center">
            <a href="https://bscscan.com/address/0x955E7650fCC4A8Ba3dc63FB0410CfFc58779E754" className="text-light-brown" target="_blink"><FaClipboardList icon={faWallet} />SMART CONTRACT</a>
          </Row>
          <p className="copyright text-light-brown text-center">Hempire 420 Game @2021</p>
        </Container>
      </footer>
    </FooterStyle>
  );
}

export default Footer;