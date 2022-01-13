import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import Web3 from 'web3';

import { getContractBalance, getApprovedBusd, getMyBusdMiners, getMyBusdEggs, calculateBusdEggSell, busdDevFee } from '../../interface/web3Interface';
import { secondsToString, formatTrxValue } from '../../utility';
import { eggstohatch1 } from '../../constants/constants';

import FaqButton from './components/faqButton';
import MinerList from './components/minerList';
import HireBusd from './components/hire';
import { busdMinerAddr, busdMinerAbi } from '../../constants/contract';
import DescriptionBusd from './components/descriptionBusd';
import { BusdStyle } from '../../style';
import BG from '../../assets/images/bg.png';
import { toast } from 'react-toastify';

const {ethereum} = window;
let web3 = new Web3(ethereum);
let lastNumEggs = -1;

const BusdHire = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector(state => state.userAddress);
  const busdMinerContract = new web3.eth.Contract(
    busdMinerAbi,
    busdMinerAddr
  );

  const [ref, setRef] = useState("");
  const [approvedAmount, setApprovedAmount] = useState(0);
  const [myMiners, setMyMiners] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);
  const [myEggs, setMyEggs] = useState(0);
  const [myMinedBusd, setMyMinedBusd] = useState(0);
  const [fillTime, setFillTime] = useState('0h 0m');
  let lastNumEggs = 0;

  let timer;

  const getInfo = () => {
    if (userAddress !== '') {
      /** get spend limit */
      getApprovedBusd(userAddress)
      .then(res => {
        setApprovedAmount(res)
      }).
      catch(err => {

      });
        
        /** get contract balance */
      getContractBalance(userAddress)
      .then(res => {
        setContractBalance(res)
      })
      .catch(err => {
        console.log(err)
      })

      /** get my miners */
      getMyBusdMiners(userAddress)
      .then(res => {
        setMyMiners(res)
      })
      .catch(err => {
        console.log(err);
      })

      /** get till time */
      getMyBusdEggs(userAddress)
      .then(res => {
        setMyEggs(res);
      })
      .catch(err => {
        toast.error("Something is wrong")
      })
    }
  }

  useEffect(() => {
    let secondsuntilfull = eggstohatch1 - myEggs/myMiners;
    if (myMiners != 0) {
      setFillTime(secondsToString(secondsuntilfull));
    }
  }, [myMiners, myEggs]);

  useEffect(async () => {
    const defaultAccounts = await web3.eth.getAccounts();
    if (defaultAccounts.length > 0) {
      const queryParams = new URLSearchParams(window.location.search);
      const ref = queryParams.get("ref") === null ? defaultAccounts[0] : queryParams.get("ref");
      setRef(ref)
    }
    timer = setInterval(getInfo, 2000);
  }, [userAddress]);

  useEffect(async () => {
    calculateBusdEggSell(myEggs)
    .then(async res => {
      busdDevFee(res)
      .then(fee => {
        setMyMinedBusd(formatTrxValue(web3.utils.fromWei(res) - web3.utils.fromWei(fee)))
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, [myEggs]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className='main-content' style={{ backgroundImage: `url(${BG})` }}>
      <BusdStyle>
        <Container>
          <FaqButton />
          <MinerList />
          <HireBusd approvedAmount={approvedAmount} refAddr={ref} myMiners={myMiners} fillTime={fillTime} myMinedBusd={myMinedBusd}/>
          <DescriptionBusd contractBalance={contractBalance}  myMiners={myMiners}/>
        </Container>
      </BusdStyle>
    </div>
    </>
  );
}

export default BusdHire;