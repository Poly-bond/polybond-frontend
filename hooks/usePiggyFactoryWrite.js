import { ethers } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT } from "../config";

export const useContractFactoryWrite = (functionName = "") => {
  const { config } = usePrepareContractWrite({
    ...OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT,
    functionName,
    // args: []
  });

  const { data, isError, isLoading, write, writeAsync } =
    useContractWrite(config);

  return { data, isError, isLoading, write, writeAsync };
};

