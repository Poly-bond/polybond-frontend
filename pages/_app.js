import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import 'rc-tooltip/assets/bootstrap.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const nahmiiChain = {
  id: 5554,
  name: 'Nahmii 3 testnet (Early)',
  network: 'nahmii',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: 'https://ngeth.n3g0.nahmii.net',
  },
  blockExplorers: {
    default: { name: 'Nahmii Scan', url: 'https://explorer.n3g0.nahmii.net' },
  },
  testnet: false,
}

const { chains, provider } = configureChains(
  [nahmiiChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://ngeth.n3g0.nahmii.net`,
      }),
    }),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Nahmii Olympus Pro",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp;
