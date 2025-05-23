import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi';
import { createActor } from "../utils/CanisterConfig";
import BigNumber from 'bignumber.js';

type Result_3 = { Ok: bigint | number } | { Err: string };

type NetworkTVL = {
  value: string;
  loading: boolean;
  error: string | null;
};

const GetNetworkTVL = () => {
  const { chain } = useAccount();
  const [networkTVL, setNetworkTVL] = useState<NetworkTVL>({
    value: "",
    loading: true,
    error: null
  });

  const ETH_DECIMALS = 18;

  const networks = [
    {
      name: "Merlin Network TVL",
      rpcUrl: "https://testnet-rpc.merlinchain.io",
      chainId: 686868,
      nickname: "merlin"
    },
    {
      name: "BSC Network TVL",
      rpcUrl: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      nickname: "bscTest"
    }
  ];

  const getCurrentNetwork = () => {
    const chainNickname = (chain as any)?.chainNickName || 'bscTest';
    return networks.find(network => network.nickname === chainNickname);
  };

  const fetchNetworkTVL = async (network: typeof networks[0]) => {
    if (!network) return;

    setNetworkTVL(prev => ({
      ...prev,
      loading: true,
      error: null
    }));

    try {
      const actor = await createActor();
      if (!actor || typeof actor.getNetworkTVL !== "function") {
        throw new Error("The method 'getNetworkTVL' does not exist on the canister actor.");
      }

      const result = await actor.getNetworkTVL(network.rpcUrl, network.chainId) as Result_3;
      console.log(`${network.name} TVL Result:`, result);

      if ("Ok" in result) {
        // Convert wei to ether
        const weiValue = new BigNumber(result.Ok.toString());
        const etherValue = weiValue.dividedBy(new BigNumber(10).pow(ETH_DECIMALS));
        
        // Format with 6 decimal places
        const formattedValue = etherValue.toFormat(6) + " BTC";
        
        setNetworkTVL({
          value: formattedValue,
          loading: false,
          error: null
        });
      } else {
        setNetworkTVL({
          value: "Error",
          loading: false,
          error: result.Err
        });
      }
    } catch (error) {
      console.error(`Error fetching ${network.name} TVL:`, error);
      setNetworkTVL({
        value: "Error",
        loading: false,
        error: "Failed to fetch network TVL. Please check your configuration."
      });
    }
  };

  useEffect(() => {
    const currentNetwork = getCurrentNetwork();
    if (currentNetwork) {
      fetchNetworkTVL(currentNetwork);
    }
  }, [chain]); // Re-fetch when chain changes

  const currentNetwork = getCurrentNetwork();
  
  if (!currentNetwork) {
    return <div className="text-red-500">Unsupported network</div>;
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col items-center py-4 rounded-[36px] bg-zinc-800 px-40">
        <h2 className="text-m font-semibold text-teal-400 mb-2">
          {currentNetwork.name}
        </h2>
        <div className="flex flex-row items-center gap-3">
          <span className="font-semibold text-lg bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
          </span>
          {networkTVL.loading ? (
            <div className="flex items-center">
              <div className="h-20 w-20 my-2 border-2 border-t-teal-400 border-r-teal-400 border-b-transparent border-l-transparent rounded-full animate-spin mr-2"></div>
            </div>
          ) : (
            <span className="font-bold text-2xl text-white ml-2">
              {networkTVL.value}
            </span>
          )}
        </div>
        {networkTVL.error && (
          <p className="text-red-500 mt-2">
            {networkTVL.error}
          </p>
        )}
      </div>
    </div>
  );
};

export default GetNetworkTVL;