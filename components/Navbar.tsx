import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import { Button } from "./Buttons";
import { ConnectionButton } from "./ConnectionButton";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>PolyBond</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex justify-between items-center py-4 px-4 md:px-8 nav__bar">
        <div className="text-white flex items-center font-medium text-xl">
          <Link href={"/"}>
            <div className="product__logo flex items-center">
              <img src="icon.png" width={"15%"} className="mr-2" />
              <p className="font-mono font-semibold">PolyBond</p>
            </div>
          </Link>
          <Link href="/market" className="">
            <a className="navbar__market">Markets</a>
          </Link>
          <Link href="/partners">
            <a className="ml-4 navbar___partner">Partners</a>
          </Link>
        </div>

        <div className="flex items-center">
          <ConnectionButton></ConnectionButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
