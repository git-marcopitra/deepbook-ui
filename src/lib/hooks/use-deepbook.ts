import { DeepBookClient } from '@mysten/deepbook';
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';

const suiClient = new SuiClient({ url: getFullnodeUrl('mainnet') });
const deepbook = new DeepBookClient(suiClient);

const useDeepbook = () => deepbook;

export default useDeepbook;
