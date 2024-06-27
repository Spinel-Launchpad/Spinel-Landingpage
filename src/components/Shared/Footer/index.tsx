import { dataMenuFooter, dataMenuSocialMediaFooter, IMenuFooter } from "@/constants/dataFooter";
import logo from "@assets/images/logo.svg";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#3D00A6]">
      <div className="max-w-1920  mx-auto p-[40px] ">
        <div
          className="flex items-center justify-between pb-2"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer w-[60px] md:w-[121px] h-[30px] md:h-[57px]"
            onClick={() => {
              navigate("/");
            }}
          />

          <div className="flex items-center justify-between">
            {dataMenuFooter.map((item: IMenuFooter, _) => {
              return (
                <div key={item.id}>
                  <a
                    href={item.href}
                    className=" py-[16px] md:py-[32px] px-2 xs:px-4 md:px-[24px] lg:px-[48px] text-neutral-0150 text-8 xs:text-12 font-semibold leading-[20px] text-center text-center font-source tracking-[0.42px] uppercase cursor-pointer"
                  >
                    {item.content}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-[40px]">
          <p className="text-14 non-italic font-normal leading-[20px] text-neutral-04100 font-sora">© 2023 UI8</p>
          <div className="flex items-center space-x-4 md:space-x-8 ">
            {dataMenuSocialMediaFooter.map((item, _) => {
              return (
                <a href={item.href} key={item.id} className=" w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] p-[11px] bg-white rounded-[56px] cursor-pointer">
                  <img src={item.image} alt={`image social media ${item.id}`}/>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
