import { useContractFactoryStorageRead } from "../hooks/usePiggyFactoryRead";

export const bondDetailsArray = () => {
  
    const {
        data: bondDetails,
        isError,
        isLoading,
      } = useContractFactoryStorageRead("fetchBondDetails");


    bondDetails.map(bond. i) = (
      console.log(bond, i)
    )
    // =
}

bondDetailsArray();
