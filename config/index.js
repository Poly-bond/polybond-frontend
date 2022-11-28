import OLYMPUS_PRO_FACTORY_STORAGE_ABI from "../utils/OlympusProFactoryStorage.json";
import TOKEN_ABI from "../utils/BondPayoutToken.json";
import CUSTOM_BOND_ABI from "../utils/CustomBond.json";

export const OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT_ADDRESS="0x49a0954Df032800F3A8CfE952f18bD61f3493e0E"

export const OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT = {
    addressOrName: OLYMPUS_PRO_FACTORY_STORAGE_CONTRACT_ADDRESS,
    contractInterface: OLYMPUS_PRO_FACTORY_STORAGE_ABI.abi,
}


export { OLYMPUS_PRO_FACTORY_STORAGE_ABI, TOKEN_ABI, CUSTOM_BOND_ABI };

