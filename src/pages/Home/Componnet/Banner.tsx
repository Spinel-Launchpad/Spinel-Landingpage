import { HEADER_HEIGHT } from "@/constants/dimensions";
import ButtonStart from "@assets/images/button-start.svg";
const Banner = () => {
  return (
    <div
      className="text-white"
      style={{
        marginTop: -HEADER_HEIGHT,
      }}
    >
      <div className="max-w-1920 w-full h-[700px] xs:h-[900px] bg-banner bg-cover bg-center mx-auto">
        <div className="mx-auto px-2 xs:px-4 xl:px-[160px] pt-[68px] pb-[45px]">
         <div className="flex justify-end">
          <div  className=" w-full sm:w-2/3 lg:w-1/2 mt-[150px] xs:mt-[300px]">
          <h1 className="text-[48px] xs:text-[62px] 2xl:text-[70px] font-black leading-[72px] ">Spinel Universe</h1>
          <p className="my-6 text-[20px] xs:text-[24px] 2xl:text-[28px] font-bold leading-[32px]">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
          <img src={ButtonStart} alt="button start"/>
          </div>
         </div>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
