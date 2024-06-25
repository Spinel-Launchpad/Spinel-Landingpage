import logo from "@assets/images/logo.svg";
import profile from "@assets/images/profile.svg";

import menuItem2 from "@assets/images/menu-item2.svg";

import dot from "@assets/images/dot.svg";
import wallet from "@assets/images/wallet.svg";

import { useWeb3Modal } from "@web3modal/wagmi/react";

import { Button } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { HEADER_HEIGHT } from "../../constants/dimensions";
import { disconnectWagmi } from "../WagmiProvider/WagmiProviderContext";
import "./Layout.css";

function Layout() {
  const navigate = useNavigate();
  const { open } = useWeb3Modal();
  const { address: userAddress } = useAccount();

  const handleConnect = () => {
    if (!userAddress) open({ view: "Networks" });
    else disconnectWagmi();
  };
  return (
    <main className="bg-white ">
      <header className="hidden lg:flex items-center h-[90px] justify-between w-full px-20 fixed top-0 right-0 left-0 bg-[#EFF2F4] shadow-xs shadow-neutral-100 z-20">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="flex gap-8 items-center">
          {/* <div className="flex gap-2 items-end cursor-pointer">
            <img src={menuItem} alt="item" />
            <div>
              <div className="text-xs text-[#625DF5] font-semibold">Coming</div>
              <div
                className="text-[16px] text-[#222425] font-extrabold"
                onClick={() => {
                  navigate("/");
                }}
              >
                Explore
              </div>
            </div>
          </div> */}
          <div className="flex gap-2 items-end cursor-pointer">
            <img src={menuItem2} alt="item" />
            <div>
              <div
                className="text-[16px] text-[#222425] font-extrabold"
                onClick={() => {
                  navigate("/my-nft");
                }}
              >
                My NFT
              </div>
            </div>
          </div>

          <Button as="button" className=" rounded-full text-xs text-white px-10 font-medium py-3 bg-[#625DF5]" onClick={handleConnect}>
            {userAddress ? (
              <div className="flex gap-2 items-center">
                <img src={profile} alt="profile" className="w-4" />
                {userAddress.slice(0, 8)}...{userAddress.slice(38, 42)}
              </div>
            ) : (
              "Connect wallet"
            )}
          </Button>
        </div>
      </header>
      <header className=" flex lg:hidden items-center h-[90px] justify-between w-full px-4 fixed top-0 right-0 left-0 bg-[#EFF2F4] shadow-xs shadow-neutral-100 z-20">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="flex gap-8 items-center">
          <Button as="button" className=" rounded-md text-xs text-white px-3 font-medium py-3 bg-[#625DF5]" onClick={handleConnect}>
            {userAddress ? (
              <div className="flex gap-2 items-center">
                <img src={profile} alt="profile" className="w-4" />
                {userAddress.slice(0, 8)}...{userAddress.slice(38, 42)}
              </div>
            ) : (
              <img src={wallet} alt="wallet" />
            )}
          </Button>
        </div>
      </header>
      <article
        className="mt-0 pb-8 mx-auto bg-main"
        style={{
          paddingTop: HEADER_HEIGHT,
        }}
      >
        <div className="px-0 ">
          <Outlet />
        </div>
      </article>
      <div className="footer bg-[#DCDEE0] block lg:flex text-center items-center justify-between px-4 lg:px-8 py-4 cursor-pointer text-[#222425] font-extrabold text-sm w-full mb-12 lg:mb-0">
        <div>© 2023 NAME. All rights reserved.</div>
        <div className="flex gap-1 lg:gap-2 items-center justify-between mt-2 lg:mt-0 w-[350px] lg:w-auto mx-auto lg:mx-0">
          <div>Documentation</div>
          <div>
            <img src={dot} alt="dot" />
          </div>
          <div>Privacy policy</div>
          <div>
            <img src={dot} alt="dot" />
          </div>
          <div>Terms of use</div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-white  grid-cols-1 py-4 z-20 grid lg:hidden">
        {/* <div className="flex gap-2 items-center justify-center">
          <img src={menuItem} alt="item" />
          <div>
            <div className="text-[16px] text-[#222425] font-extrabold">Explore</div>
          </div>
        </div> */}
        <div
          className="flex gap-2 items-center justify-center"
          onClick={() => {
            navigate("/my-nft");
          }}
        >
          <img src={menuItem2} alt="item" />
          <div>
            <div className="text-[16px] text-[#222425] font-extrabold">My NFT</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
