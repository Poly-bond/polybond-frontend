import { useContractRead, useContractReads } from "wagmi";
import { OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT } from "../config";

export const useContractFactoryStorageRead = (functionName = "") => {
  const { data, isError, isLoading } = useContractRead({
    ...OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT,
    functionName,
  });

  return { data, isError, isLoading };
};

export const useContractFactoryStorageReads = (init_tx_data = []) => {
  const { data, isError, isLoading } = useContractReads({
    contracts: init_tx_data,
  });

  return { data, isError, isLoading };
};
