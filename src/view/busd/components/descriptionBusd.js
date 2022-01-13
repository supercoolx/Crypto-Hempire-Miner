import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';

import { DescriptionStyle } from '../../../style';
import Papan2 from '../../../assets/images/papan2.png'

const Description = ({ contractBalance, myMiners }) => {
  const userAddress = useSelector(state => state.userAddress);
  const [contractBal, setContractBal] = useState(0);
  useEffect(() => {
    setContractBal(contractBalance)
  }, [contractBalance]);

  return (
    <>
      <DescriptionStyle>
        <Container className="text-center">
          <div className="text-center">
            <h3 className="title text-white" style={{ backgroundImage: `url(${Papan2})` }}>THE VAULT</h3>
            <p className="text-brown">
            Contract balance: <span className="text-red">{contractBal} BUSD</span><br/><br/>
            Use your Referral Link and earn 10% of your referred users.<br /><br />
            {myMiners > 0 ? 
              <span className="text-red">https://thehempireminegame.live/busd?ref={userAddress}</span>
            : 'You should have miner for getting Referral link.'
            }

            </p>
          </div>
          <div className="text-center">
            <h3 className="title text-white verify" style={{ backgroundImage: `url(${Papan2})` }}>BUSDBIKER INSTRUCTIONS</h3>
            <p className="text-brown">
            - Decide how much BUSD you want to invest. <br /><br />

            - Type in amount and click "Approve Spending"<br /><br />

            - After amount is approved, click "Hire Gardeners"<br /><br />

            Your Gardeners will plant your BUSD seeds and then "harvest" the plants, placing the BUSD weed into your jars .<br /><br /><br />

            <span className="text-green">What do you do with your Harvested BUSD?</span><br /><br />

            <span className="text-green">You can either COMPOUND your BUSD or you can WITHDRAW your BUSD.</span><br /><br />

            - Click the "COMPOUND" button to increase your BUSD harvesting rate.<br/>
            - Click the "COLLECT BUSD" button to withdraw the BUSD to your wallet.<br/><br/>
            <span className="text-green">After you select either COMPOUND or COLLECT,<br/> your Gardeners will begin to fill your jars again.</span><br/><br/>

            The Gardeners you hire are yours to keep for the entire life of the mine!<br/><br/>

            Your Gardeners will fill your jars with BUSD weed non-stop 24hours a day.<br/><br/>

            It is highly recommended that you either COMPOUND or WITHDRAW the busd harvest in your jars at least once every 24hours.<br/><br/>

            <span className="text-green">Remember, every time you compound, you receive more Gardeners!<br/>
            And more Gardeners means more plants,<br/> and more plants mean more HARVESTING!!! </span>

            </p>
          </div>
        </Container>
      </DescriptionStyle>
    </>
  );
}

export default Description;