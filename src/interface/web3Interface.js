import Web3 from 'web3';

import { busdMinerAbi, busdMinerAddr, busdTokenAbi, busdTokenAddr } from '../constants/contract';
import { numberWithCommas, parseIntDecimal } from '../utility';

const {ethereum} = window;
let web3 = new Web3(ethereum);

const busdMinerContract = new web3.eth.Contract(
    busdMinerAbi,
    busdMinerAddr
);
const busdContract = new web3.eth.Contract(
    busdTokenAbi,
    busdTokenAddr
);
    
const getContractBalance = async (contractAddress) => {
    return new Promise(async (resolve, reject) => {
        
        busdMinerContract.methods.getBalance().call().then(result => {
            var amt = parseIntDecimal(web3.utils.fromWei(result), 3);
            resolve(amt);
        }).catch((err) => {
            return reject(err);
        });
    });
}

const getUserBusdBalance = async (userAddress) => {
    return new Promise(async (resolve, reject) => {
        busdContract.methods.balanceOf(userAddress).call().then(res => {
            var amt = web3.utils.fromWei(res)
            resolve(amt);
        }).catch((err) => {
            return reject(err);
        });
    });
}

const approveBusd = async (userAddress, amount) => {
    return new Promise(async (resolve, reject) => {
        busdContract.methods.approve(busdMinerAddr, web3.utils.toWei(amount)).send({ from: userAddress })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            return reject(err);
        })
    });
}

const getApprovedBusd = async (userAddress) => {
    return new Promise(async (resolve, reject) => {
        busdContract.methods.allowance(userAddress, busdMinerAddr).call().then(res => {
            let amount = web3.utils.fromWei(res);
            resolve(amount);
        }).catch((err) => {
            return reject(err);
        });
    });
}

const hireBusdMiner = async (ref, userAddress, amount) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.hire(ref, web3.utils.toWei(amount)).send({ from: userAddress }).then(res => {
            resolve(res)
        }).catch((err) => {
            return reject(err);
        });
    });
}

const compoundBusdMiner = async (ref, userAddress) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.compound(ref).send({from:userAddress}).then(res => {
            resolve(res);
        }).catch((err) => {
            return reject(err)
        });
    });
}

const collectBusdMiner = async (userAddress) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.collect().send({from:userAddress}).then(res => {
            resolve(res);
        }).catch((err) => {
            return reject(err)
        });
    });
}

const getMyBusdMiners = async (userAddress) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.getMyMiners().call({from:userAddress}).then(result => {
            if (result == '0x') {
                result = 0;
            }
            resolve(result);
        }).catch((err) => {
            return reject(err)
        });
    });
}

const getMyBusdEggs = async (userAddress) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.getMyEggs().call({from:userAddress}).then(result => {
            resolve(result);
        }).catch((err) => {
            return reject(err)
        });
    });
}

const busdDevFee = async (amount) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.devFee(amount).call().then(result => {
            resolve(result);
        }).catch((err) => {
            return reject(err)
        });
    });
}

const calculateBusdEggSell = (eggs) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.calculateEggSell(eggs).call().then(result => {
            resolve(result);
        }).catch((err) => {
            return reject(err)
        });
    });
}

const calculateBusdEggBuy = (amount) => {
    return new Promise(async (resolve, reject) => {
        busdMinerContract.methods.calculateEggBuySimple(web3.utils.toWei(amount)).call().then(result => {
            resolve(result);
        }).catch((err) => {
            return reject(err)
        });
    });
}

export {
    getUserBusdBalance,
    getContractBalance,
    approveBusd,
    getApprovedBusd,
    hireBusdMiner,
    compoundBusdMiner,
    collectBusdMiner,
    getMyBusdMiners,
    getMyBusdEggs,
    busdDevFee,
    calculateBusdEggSell,
    calculateBusdEggBuy
};