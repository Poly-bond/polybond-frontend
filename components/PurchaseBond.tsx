import { ethers } from "ethers";
import { useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { CUSTOM_BOND_ABI, TOKEN_ABI } from "../config";
import { useContractFactoryStorageRead } from "../hooks/usePiggyFactoryRead";

export const PurchaseModal = ({ setOpenPurchase, createBond }) => {
    const {address} = useAccount()
    const [amount, setAmount] = useState("");

  const {
    data: bondDetails,
    isError,
    isLoading,
  } = useContractFactoryStorageRead("fetchBondDetails");

  const bondAddress = createBond.bondAddress;
  
  // approves ERC20 TOKEN TO DEPOSIT
  const { data: approveData, write: approveERC20Token, isLoading: approveLoading, isError: approveERC20Error } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: createBond.principalToken,
    contractInterface: TOKEN_ABI.abi,
    functionName: 'approve',
    args: [bondAddress, ethers.utils.parseEther("1")],
  });

  // call DEPOSIT erc20 token function after apporve function is successful
  const { isError: approvalError, isLoading: approvalLoading } = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess(data) {
      depositBond();
      console.log("IT WORKED!!!", data);
    },
    onError(error) {
      console.log("Encountered Error!");
    },
  })

  const { data, isError: createBondError, isLoading: createBondLoading, write: depositBond, writeAsync } =
    useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: bondAddress,
        contractInterface: CUSTOM_BOND_ABI.abi,
        functionName: "deposit",
        args: [ethers.utils.parseEther("0.1"), 10000000, address]
    });

    const handleBond = () => {
        approveERC20Token();
        
    }  
     const handleBondAndStake = () => {
        console.log("OKAYYYYYY");
        
    }
    

  return (
    <div className="the__modal__wrapper">
      <div className="the__modal__item">
        <div className="the__modal__item__header">
          <button onClick={() => setOpenPurchase(false)}>
            <i className="ri-close-line"></i>
          </button>

          <p className="the__modal__item__header__title">UNI-ETH SLP Bond</p>

          <div className="the__plain"></div>
        </div>

        <div className="the__modal__display">
          <div className="the__modal__display__bond__price the__modal__display__bond__item">
            <p>Bond Price</p>
            <h2>$0.566</h2>
          </div>

          <div className="the__modal__display__market__price the__modal__display__bond__item">
            <p>Market Price</p>
            <h2>$0.534</h2>
          </div>
        </div>
        {/* <div className="text-white">{JSON.stringify(createBond)}JJJJJJJ</div> */}

        <div className="the__modal__details">
          <div className="the__modal__details__pair">
            <div className="the__modal__details__pair__item">
              <span>UNI</span>/<span>ETH</span>
            </div>
            <div className="the__modal__details__pair__text">
              <span>You Provide</span>
            </div>
          </div>

          <div className="the__modal__details__time">
            <div className="the__modal__details__time__item">
              <i className="ri-time-line"></i>
            </div>
            <div className="the__modal__details__time__text">
              <span>7 days vesting period</span>
            </div>
          </div>

          <div className="the__modal__details__percent">
            <div className="the__modal__details__percent__item">
              <span>8.07%</span>
            </div>
            <div className="the__modal__details__percent__text">
              <span>You would receive</span>
            </div>
          </div>
        </div>

        <div className="the__modal__input">
          <div className="the__modal__input__item">
            <input type="text" onChange={(e) => setAmount(e.target.value)} placeholder="Amount of UNI/ETH SLP token" />
            <button>MAX</button>
          </div>
          <div className="the__modal__input__cta">
            <button onClick={handleBond}>Bond</button>
            <button onClick={handleBondAndStake} className="ml-3">Bond &amps; Stake</button>
          </div>
        </div>
      </div>
    </div>
  );
};
