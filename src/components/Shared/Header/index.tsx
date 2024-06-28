import logo from "@assets/images/logo.svg";
// import profile from "@assets/images/profile.svg";
// import menuItem2 from "@assets/images/menu-item2.svg";
// import wallet from "@assets/images/wallet.svg";
// import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
// import { useAccount } from "wagmi";
// import { disconnectWagmi } from "@/components/WagmiProvider/WagmiProviderContext";
// import Explore from "@assets/images/explore-icon.svg";
const Header = () => {
  const navigate = useNavigate();
  // const { open } = useWeb3Modal();
  // const { address: userAddress } = useAccount();

  // const handleConnect = () => {
  //   if (!userAddress) open({ view: "Networks" });
  //   else disconnectWagmi();
  // };
  return (
    <header>
      <div
        className="h-[90px]  fixed top-0 right-0 left-0 bg-[#EFF2F4] shadow-xs shadow-neutral-100 z-20 flex flex-col  justify-center"
      >
        <div className="flex items-center  justify-between w-full px-5 lg:px-10 2xl:px-20 max-w-1920 w-full mx-auto">
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer h-[50px] xs:w-auto xs:h-auto"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="flex gap-8 items-center">
            {/* <div className="flex gap-2 items-end cursor-pointer">
            <img src={Explore} alt="item" />
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
            {/* <div className="flex gap-2 items-end cursor-pointer">
            <img src={menuItem2} alt="item" />
            <div>
              <div>
                <div className="text-xs text-[#625DF5] font-semibold">Coming</div>
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
          </div> */}

            {/* <Button as="button" className=" rounded-full text-xs text-white px-10 font-medium py-3 bg-[#625DF5]" onClick={handleConnect}>
            {userAddress ? (
              <div className="flex gap-2 items-center">
                <img src={profile} alt="profile" className="w-4" />
                {userAddress.slice(0, 8)}...{userAddress.slice(38, 42)}
              </div>
            ) : (
              "Connect wallet"
            )}
          </Button> */}
            <Button
              as="button"
              className=" rounded-full text-xs text-white px-10 font-medium py-3 bg-[#625DF5]"
              onClick={() => {
                if(typeof window === undefined){
                  return;
                }
                window.location.href ="https://nft-presale.spinel.finance"
              }}
            >
              Get Spinel NFT
            </Button>
          </div>
        </div>
        {/* <div className=" flex lg:hidden items-center h-[90px] justify-between w-full px-4 fixed top-0 right-0 left-0 bg-[#EFF2F4] shadow-xs shadow-neutral-100 z-20">
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
      </div> */}
      </div>
    </header>
  );
};

export default Header;
