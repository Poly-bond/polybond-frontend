import { ethers } from "ethers";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { CUSTOM_BOND_ABI, TOKEN_ABI } from "../config";

export const PurchaseModal = ({ setOpenPurchase, createBond }) => {
  const { address } = useAccount();
  const [amount, setAmount] = useState("");
  const bondAddress = createBond?._bondAddress;

  console.log(createBond);

  const {
    data: approveData,
    write: approveERC20Token,
    isLoading: approveLoading,
    isError: approveERC20Error,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: createBond?._principalToken?.address,
    contractInterface: TOKEN_ABI.abi,
    functionName: "approve",
    args: [bondAddress, ethers.utils.parseEther(amount || "0")],
  });

  
  const {
    data: createBondData,
    isError: createBondError,
    isLoading: depositBondLoading,
    write: depositBond,
    writeAsync,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: bondAddress,
    contractInterface: CUSTOM_BOND_ABI.abi,
    functionName: "deposit",
    args: [
      ethers.utils.parseEther(amount || "0"),
      address,
      createBond?._principalToken?.address,
    ],
  });

  const { isError: approvalError, isLoading: approvalLoading } =
    useWaitForTransaction({
      hash: approveData?.hash,
      onSuccess(data) {
        depositBond?.();
      },
      onError(error) {
        toast.error("Encountered Error!");
      },
    });

  const { isError: createBondWaitError, isLoading: depositBondWaitLoading } =
    useWaitForTransaction({
      hash: createBondData?.hash,
      onSuccess(data) {
        toast.success("Successful!");
        setOpenPurchase(false);
      },
      onError(error) {
        toast.error("Encountered Error!");
      },
    });

  const handleBond = () => {
    approveERC20Token();
  };

  const handleBondAndStake = () => {
    console.log("OKAYYYYYY");
  };

  return (
    <div className="the__modal__wrapper">
      <div className="the__modal__item">
        <div className="the__modal__item__header">
          <button onClick={() => setOpenPurchase(false)}>
            <i className="ri-close-line"></i>
          </button>

          <p className="the__modal__item__header__title">
            {createBond?._principalToken?.name} Bond
          </p>

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

        <div className="the__modal__details">
          <div className="the__modal__details__pair">
            <div className="the__modal__details__pair__item">
              {createBond?._principalToken?.name}
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
              {createBond?._discount}
            </div>
            <div className="the__modal__details__percent__text">
              <span>You would receive</span>
            </div>
          </div>
        </div>

        <div className="the__modal__input">
          <div className="the__modal__input__item">
            <input
              required
              type="number"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount of UNI/ETH SLP token"
            />
            <button>MAX</button>
          </div>
          <div className="the__modal__input__cta">
            <button disabled={amount < "1"} onClick={handleBond}>
              {approveLoading || depositBondLoading || approvalLoading || depositBondWaitLoading ? "Bonding" : "Bond"}
            </button>
            <button disabled onClick={handleBondAndStake} className="ml-3">
              Bond &amp; Stake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
