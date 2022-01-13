import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import { FaqStyle, DescriptionStyle } from '../../style';
import BG from '../../assets/images/bg.png';
import Papan3 from '../../assets/images/papan3.png';
import Papan4 from '../../assets/images/papan4.png';

const Faq = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className='main-content' style={{ backgroundImage: `url(${BG})` }}>
      <FaqStyle>
        <Container>
          <Row className="notification">
            <Col md="1">
            </Col>
            <Col md="10">
              <div className="papan" style={{ backgroundImage: `url(${Papan3})` }}>
                <h3 className="extra-bold text-brown">FAQ:<br/>
                Please also be sure to read<br/>
                our instructions page</h3>
              </div>
            </Col>
          </Row>
          <Row className="content">
            <Col md="1"></Col>
            <Col md="10">
              <p className="text-brown bold text-center">
              1. Can I take my BNB - BUSD back or sell my Gardners or transfer to another wallet?<br/><br/>

              (A) No! Gardners are not bought, Gardners are hired therefore they can't be sold or transferred . Once Gardners are hired they work for you indefinitely, providing you with an unlimited amount of BNB at a starting rate of 5% daily - or BUSD at a starting rate of 10% daily<br/><br/>

              2. What happens when the Jars becomes full?<br/><br/>

              (A) Don't worry, your Gardners will continue to harvest BNB & BUSD for you non stop.<br/><br/>

              3. How much are my fees?<br/><br/>

              (A) BNBOB: The only fee that users personally incur is their transaction gas fees. A 5% development fee is paid to the developer but this fee is not paid by you as a user, this fee is paid to the developer by the contract as a whole.<br/><br/>

              (A) BUSDBIKER: The only fee that users personally incur is their transaction gas fees.  A 5% development fee is paid to the developer but this fee is not paid by you as a user, this fee is paid to the developer by the contract as a whole.<br/><br/>

              4.When is the best time to Hire Gardners?<br/><br/>

              (A) Always!<br/><br/>

              5. How often should I compound?<br/><br/>

              (A) We recommend that you compound at least once per day but you are free to do so as often as you wish.<br/><br/>

              6. How is THE HEMPIRE GAME sustainable?<br/><br/>

              (A) THE HEMPIRE GAME is sustainable due to many factors: community support happy vibes positive attitude  and our algorithmic intelligent contract and upcoming projects. <br/><br/>

              7. How to use THE HEMPIRE GAME on IPhone?<br/><br/>

              (A) Due to TrustWallet closing it's Dapp browser to IOS users. You will need MetaMask or an equivalent browser extension.<br/><br/>

              8. Is it better to hire more Gardners or Bank?<br/><br/>

              (A) Hiring more Gardners will be more profitable than banking in the long-term.<br/><br/>
              </p>
            </Col>


          </Row>
          <DescriptionStyle>
          <Container className="text-center">
            <div className="text-center">
              <h3 className="title text-brown bold" style={{ backgroundImage: `url(${Papan4})` }}>DEFI HARVESTING</h3>
              <p className="text-brown">
              Our algorithm allows every user to profit handsomely, no matter their farming thinking (harvesting). It will not allow any single user to have an unfair advantage over other users. We believe it is a truly beautiful thing.
              </p>
            </div>
            <div className="text-center">
              <h3 className="title text-brown bold" style={{ backgroundImage: `url(${Papan4})` }}>THE CONTRACT’S</h3>
              <p className="text-brown">
              The contract is open source and visible here on Bscscan. Is rug free and immutable, meaning there are no functions that the dev's can use to drain or change the contract’s operations. The provability THE HEMPIRE GAME contracts draining is highly unlikely due to our BNB 5%  daily return and BUSD 10% daily return considering that many users are compounding their daily returns for larger future profits. 
              </p>
            </div>
            <div className="text-center">
              <h3 className="title text-brown bold" style={{ backgroundImage: `url(${Papan4})` }}>TIPS:</h3>
              <p className="text-brown">
              The best strategy for increasing your earnings is to hire more Gardners sooner and more often than other users. This in turn rewards you with more BNB - BUSD at a faster rate.
              Hiring more Gardners every day using your BNB earnings will 5x the number of Gardens  you have within 30 days or less ! Or using your BUSD earnings will 10x the number of Gardens  you have within 30 days or less:
              </p>
            </div>
            <div className="text-center">
              <h3 className="title text-brown bold verify" style={{ backgroundImage: `url(${Papan4})` }}>YIELD HARVESTING RETURNS</h3>
              <p className="text-brown">
              BNBOB: Pays 5%  daily, according to the current harvesting efficiency rate. The harvesting efficiency rate rises and falls as you and other players hire planters, compound earnings and Collect BNB
              <br/>
              BUSDBIKER: Pays 10% daily, according to the current harvesting efficiency rate. The harvesting efficiency rate rises and falls as you and other players hire planters, compound earnings and Collect BUSD.
              </p>
            </div>
            <div className="text-center">
              <h3 className="title text-brown bold" style={{ backgroundImage: `url(${Papan4})` }}>FEES:</h3>
              <p className="text-brown">
              BNBOB: The only fee that users personally incur is their transaction gas fees. A 5% development fee is paid to the developer but this fee is not paid by you as a user, this fee is paid to the developer by the contract as a whole.
              <br />
                BUSDBIKER :The only fee that users personally incur is their transaction gas fees. A 5% development fee is paid to the developer but this fee is not paid by you as a user, this fee is paid to the developer by the contract as a whole.
              
              </p>
            </div>
            <div className="text-center">
              <h3 className="title text-brown bold" style={{ backgroundImage: `url(${Papan4})` }}> REFERRALS:</h3>
              <p className="text-brown">
              Earn 10% of the BUSD or BNB used to hire Farmers by anyone who starts farming using your referral link.
              </p>
            </div>
            <div className="text-center">
              <h3 className="title text-brown bold verify" style={{ backgroundImage: `url(${Papan4})`, paddingTop: 12 }}> STRAEGIES & ADDITIONAL
                INFORMATION</h3>
              <p className="text-brown">
              THE HEMPIRE GAME is for users who want long term profits and sustainability. It is not for people who want instant profits that ultimately Rekt others.
              </p>
            </div>
          </Container>
          </DescriptionStyle>
        </Container>
      </FaqStyle>
    </div>
    </>
);
}

export default Faq;