import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import Web3 from 'web3';

import { busdMinerAddr, busdMinerAbi } from '../../../constants/contract';
import { eggstohatch1 } from '../../../constants/constants';
import { translateQuantityBusd } from '../../../utility';
import { approveBusd, hireBusdMiner, compoundBusdMiner, collectBusdMiner, calculateBusdEggBuy, busdDevFee, getMyBusdMiners  } from '../../../interface/web3Interface';

/* images */
import BtnBG from '../../../assets/images/btn-bg.png';
import BusdMiner from '../../../assets/images/busd-miner.png';
import Papan1 from '../../../assets/images/papan1.png';
import Flower from '../../../assets/images/weed.gif';
import Leap from '../../../assets/images/leap.png';
import {toast} from 'react-toastify';

const {ethereum} = window;
let web3 = new Web3(ethereum);

const HireBusd = ({ approvedAmount, refAddr, myMiners, fillTime, myMinedBusd }) => {
  const dispatch = useDispatch();
  const userAddress = useSelector(state => state.userAddress);
  const userBusdBalance = useSelector(state => state.userBusdBalance);
  const [approveAmount, setApproveAmount] = useState(0);
  const [hireAmount, setHireAmount] = useState(approvedAmount);
  const [myBalance, setMyBalance] = useState(0);
  const [myBusdMinerNum, setMyBusdMinerNum] = useState(myMiners);
  const [myBusdProductRate, setMyBusdProductRate] = useState(myMiners);
  const [myBusdFillHour, setMyBusdFillHour] = useState('00h');
  const [myBusdFillMin, setMyBusdFillMin] = useState('00m');
  const [myBusd, setMyBusd] = useState(myMinedBusd);
  const [hireEggs, setHireEggs] = useState(0);

  useEffect(() => {
    setHireAmount(approvedAmount);
  }, [approvedAmount])

  useEffect(() => {
    setMyBusdMinerNum(myMiners);
    let productRate = translateQuantityBusd(myMiners * 60 * 60/eggstohatch1,3);
    setMyBusdProductRate(productRate);
  }, [ myMiners ]);

  useEffect(() => {
    if (fillTime.trim() !== '0h 0m') {
      const arr = fillTime.split(' ');
      setMyBusdFillHour(arr[0]);
      setMyBusdFillMin(arr[1]);
    }
  }, [fillTime]);

  useEffect(() => {
    setMyBusd(myMinedBusd);
  }, [myMinedBusd]);

  useEffect(() => {
    calculateBusdEggBuy(hireAmount + "")
    .then(res => {
      busdDevFee(res)
      .then(fee => {
        let eggs = res - fee;
        setHireEggs(translateQuantityBusd(eggs/eggstohatch1,3));
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, [hireAmount]);

  const hire = async () => {
    // check the referral link is avaiable
    if (refAddr !== userAddress) {
      let refererMiners = await getMyBusdMiners(refAddr);
      if (refererMiners * 1 === 0) {
        toast.warning(`You should use Other referral link. current referer didn't have miner.`);
        return;
      }
    }

    if (hireAmount <= 25) {
      toast.warning(`The minimum value is 26BUSD`);
      return;
    }
    if (hireAmount >= 2000) {
      toast.warning(`The maxmum value is 2000BUSD`);
      return;
    }
    console.log(userBusdBalance);
    if (hireAmount * 1 > userBusdBalance * 1) {
      toast.warning(`You don't have ${hireAmount} BUSD in your wallet`);
      return;
    }
    if (hireAmount > approvedAmount) {
      return toast.warning(`Approve spending ${hireAmount}BUSD first`);
    }

    

    hireBusdMiner(refAddr, userAddress, hireAmount + "")
    .then(res => {
      if (res.status) {
        toast.success("Successfully Done");
      }
    })
    .catch(err => {
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error("Something is wrong");
      }
    })
  }

  const approve = () => {
    approveBusd(userAddress, approveAmount + "")
    .then(res => {
      if (res.status) {
        toast.success("Successfully Approved");
      }
    })
    .catch(err => {
      if (err.message) {
        toast.error(err.message)
      } else {
        toast.error("Something is wrong");
      }
    })
  }

  const compound = () => {
    compoundBusdMiner(refAddr, userAddress)
    .then(res => {
      toast.success("Successfully Compounded");
    })
    .catch(err => {
      toast.error("Something is wrong");
    })
  }

  const collect = () => {
    collectBusdMiner(userAddress)
    .then(res => {
      toast.success("Successfully Collected");
    })
    .catch(err => {
      toast.error("Something is wrong");
    })
  }

  return (
    <>
      <Container className="hire-busd">
        <Row className="buy">
          <Col md="6" className="left-panel text-center">
            <img src={BusdMiner} />
            <h3 className="text-brown">Enter BUSD Amount and Click Approve</h3>
            <Input value={approveAmount} onChange={(e) => setApproveAmount(e.target.value)}/>
            <Button className="btn-transparent text-brown default-btn large" style={{ backgroundImage: `url(${BtnBG})` }} onClick={approve}>Approve Spend</Button>
            <h3 className="text-brown">YOUR BUSD SPEND LIMIT IS <span className="text-red">{approvedAmount}</span></h3>
            <Input value={hireAmount} onChange={e => setHireAmount(e.target.value)} />
            <h3 className="text-brown">Hires <span className="text-red">{hireEggs}</span> Gardeners</h3>
            <Button className="btn-transparent text-brown default-btn large" style={{ backgroundImage: `url(${BtnBG})` }} onClick={hire}>HIRE GARDENER</Button>
          </Col>
          <Col md="6" className="right-panel text-center">
            <div className="notify" style={{ backgroundImage: `url(${Papan1})` }}>
              <h3 className="text-brown extra-bold">
                Our BUSDBIKER sells you Gardeners who will plant your BUSD seeds. The more Gardeners you have, the more plants you will grow.
                The more plants you grow, the more BUSD weed you will harvest!
              </h3>
              <p>Reward: 10% Daily BUSD</p>
            </div>
            <img src={Flower} />
          </Col>
        </Row>
        <Row className="text-center compound">
          <h3 className="text-brown">Right now you have <span className="text-red">{myBusdMinerNum}</span> Gardeners producing your BUSD Weed</h3>
          {/* <h3 className="text-brown">Your Gardeners  are harvesting at <span className="text-red">{myBusdProductRate}</span> BUSD weeds per hour</h3> */}
          <Col md="4"></Col>
          {/* <h3 className="text-brown">Hires 153.03 More Gardeners</h3> */}
          <div className="text-center">
            <Button className="btn-transparent text-brown default-btn large" style={{ backgroundImage: `url(${BtnBG})` }} onClick={compound}>COMPOUND</Button>
          </div>
        </Row>
        <Row className="text-center withdraw">
          <h3 className="text-brown extra-bold">Harvested so far, you have <span className="text-red">{myBusd}</span> BUSD</h3>
          <h3 className="text-brown extra-bold">Your jars will be full in</h3>
          <Col md="4"></Col>
          <Col md="4" className="flex-wrapper space-between">
            <div className="leap" style={{ backgroundImage: `url(${Leap})` }}>
              <h3 className="text-white">{myBusdFillHour}</h3>
            </div>
            <div className="leap" style={{ backgroundImage: `url(${Leap})` }}>
              <h3 className="text-white">{myBusdFillMin}</h3>
            </div>
          </Col>
          <div className="text-center">
            <Button className="btn-transparent text-brown default-btn large" style={{ backgroundImage: `url(${BtnBG})` }} onClick={collect}>COLLECT BUSD</Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default HireBusd;
