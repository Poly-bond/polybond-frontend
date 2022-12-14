import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "rc-tooltip/assets/bootstrap.css";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const alchemyId = process.env.POLYGON_ALCHEMY_ID;

const { provider, chains } = configureChains(
  [chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://polygon-mumbai.g.alchemy.com/v2/x0ZzMscIDWG7MBSytHxYPqp6sF2jFBBe`,
        webSocket: `wss://polygon-mumbai.g.alchemy.com/v2/x0ZzMscIDWG7MBSytHxYPqp6sF2jFBBe`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "PolyBond",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()}>
        <ToastContainer />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
