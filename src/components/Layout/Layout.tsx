import logo from "@assets/images/logo.svg";
import profile from "@assets/images/profile.svg";

import menuItem2 from "@assets/images/menu-item2.svg";

// import dot from "@assets/images/dot.svg";
import wallet from "@assets/images/wallet.svg";

import { useWeb3Modal } from "@web3modal/wagmi/react";

import { Button } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { HEADER_HEIGHT } from "../../constants/dimensions";
import { disconnectWagmi } from "../WagmiProvider/WagmiProviderContext";
import "./Layout.css";
import Footer from "../Shared/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Shared/Header";
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
     <Header />
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
    <Footer />
    </main>
  );
}

export default Layout;
