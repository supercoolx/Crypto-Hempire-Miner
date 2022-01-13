import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';
import {
  Navbar,
  NavbarBrand,
  Spinner,
  Container,
  Button,
} from 'reactstrap';
import { toast } from 'react-toastify';
import { CHAIN_ID } from '../constants/constants';
import { getUserBusdBalance } from '../interface/web3Interface';

import { FaTwitter, FaTelegram } from "react-icons/fa";
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { HeaderStyle } from './style';
import LogoImage from '../assets/images/logo.png';
import SocialLinkBG from '../assets/images/social-link-bg.png';
import ConnectBtnBG from '../assets/images/connect-btn.png';

const {ethereum} = window;
const web3 = new Web3(ethereum);

const Header = () => {
  const dispatch = useDispatch();
  const {userAddress} = useSelector((state) => {
    return {
      userAddress: state.userAddress
    }
  })

  const [showAddress, setShowAddress] = useState("connect");
  const [processingConnect, setProcessingConnect] = useState(false);
  
  const connectWallet = async () => { 
    setProcessingConnect(true)
    
    ethereum.request({method: 'eth_requestAccounts'})
    .then(async result => {
      const defaultAccounts = await web3.eth.getAccounts();
      const userBusdBalance = await getUserBusdBalance(defaultAccounts[0]);
      dispatch({ type: "set", userAddress: defaultAccounts[0] });
      dispatch({ type: "set", userBusdBalance: userBusdBalance });
      setProcessingConnect(false)
    })
    .catch((err) => {
      setProcessingConnect(false);
      return;
    });
  }

  useEffect(async () => {
    const chainId = await web3.eth.getChainId();
    if (chainId !== CHAIN_ID) {
      toast.warning("please check the network!. this is working on only BSC network.");
    }
    const defaultAccounts = await web3.eth.getAccounts();
    if (defaultAccounts.length > 0) {
      const userBusdBalance = await getUserBusdBalance(defaultAccounts[0]);
      dispatch({ type: "set", userBusdBalance: userBusdBalance });
      dispatch({ type: "set", userAddress:defaultAccounts[0] });
    }
  }, []);

  useEffect(() => {
    if (userAddress !== '') {
      setShowAddress(userAddress.substr(0, 4) + "..." + userAddress.substr(userAddress.length - 3))
    }
  }, [userAddress]);

  return (
    <HeaderStyle>
      <Container className="text-center">
        <Navbar light expand="md">
          <NavLink to="/"><img src={LogoImage} /></NavLink> 
        </Navbar>
        <div className="link">
          <a href="https://twitter.com/hempireminegame?s=21" target="_blink" className="btn btn-social" style={{ backgroundImage: `url(${SocialLinkBG})` }}>
            <span>
              <FaTwitter icon={faWallet} />
            </span>
          </a>
          <a href="https://t.me/Thehempireminegame" target="_blink" className="btn btn-social" style={{ backgroundImage: `url(${SocialLinkBG})` }}>
            <span>
              <FaTelegram icon={faWallet} />
            </span>
          </a>
          <Button onClick={connectWallet} className="btn-connect text-brown" style={{ backgroundImage: `url(${ConnectBtnBG})` }}>
            <span>
              {processingConnect ? <Spinner color="dark" /> : <>{showAddress!==''?showAddress:`CONNECT WALLET`}</>}
            </span>
          </Button>
        </div>
      </Container>
    </HeaderStyle>
  );
}

export default Header;