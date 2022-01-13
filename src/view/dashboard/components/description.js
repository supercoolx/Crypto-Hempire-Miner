import React from 'react';
import { Container, Row } from 'reactstrap';

import { DescriptionStyle } from '../../../style';
import Papan2 from '../../../assets/images/papan2.png'

const Description = () => {
  return (
    <>
      <DescriptionStyle>
        <Container className="text-center">
          <div className="text-center">
            <h3 className="title text-white" style={{ backgroundImage: `url(${Papan2})` }}>SUSTAINABILITY</h3>
            <p className="text-brown">
            Unlike it's predecessors which paid 100% daily, causing instant and massive inflation. Hempire pays a modest 5% BNB - 10% BUSD daily, allowing investors to rest easy knowing that their investments have unlimited growth potential and a maximum, improbable risk of less than 5%.-10%
            </p>
          </div>
          <div className="text-center">
            <h3 className="title text-white verify" style={{ backgroundImage: `url(${Papan2})` }}>VERIFIED PUBLIC CONTRACT</h3>
            <p className="text-brown">
            The Hempire  contracts is public, verified and can be viewed here on <a href="https://bscscan.com/address/0x955E7650fCC4A8Ba3dc63FB0410CfFc58779E754" target="_blink">Contract</a>
            </p>
          </div>
          <div className="text-center">
            <h3 className="title text-white" style={{ backgroundImage: `url(${Papan2})` }}>GARDNER INFO</h3>
            <p className="text-brown">
              Hempire pays 10% daily, according to the current harvesting efficiency rate. The harvesting efficiency rate rises and falls as you and other players hire planters,<br /> compound earnings and pocket BNB-BUSD.<br/>
              The object of the game is hiring more Gardners, sooner and more often than other players. This in turn earns you more BNB-BUSD faster. Hiring more Gardners using your daily BNB-BUSD  earnings will your BNB Gardners within 30 days or less or 10x your BUSD Gardners within 30 days or less.
            </p>
          </div>
        </Container>
      </DescriptionStyle>
    </>
  );
}

export default Description;