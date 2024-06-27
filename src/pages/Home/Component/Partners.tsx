import Binance from "@assets/images/binance.svg";
import Polygon from "@assets/images/polygon.svg";
import Nodereal from "@assets/images/nodereal.svg";
import CyberConnect from "@assets/images/cyber-connect.svg";
import Gianty from "@assets/images/gianty.svg";
import Kyber from "@assets/images/kyber.svg";
import Unicorn from "@assets/images/unirorn.svg";
import GoldenPhoenix from "@assets/images/golden-phoenix.svg";
const listPartners = [Binance, Polygon, Nodereal, CyberConnect, Gianty, Kyber, Unicorn, GoldenPhoenix];
const Partners = () => {
  return (
    <div className="bg-partners">
      <div className="max-w-1920 mx-auto px-5 xs:px-[40px] md:px-[80px] xl:px-[160px] py-[32px]">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3">
            <h3 className="gradient-text text-48 not-italic tracking-[0.96px] uppercase leading-[41px] font-extrabold">
              Trusted by Partners
            </h3>
            <p className="text-black leading-[41px] font-normal tracking-[1.56px] text-12">Helping people create beautiful content at</p>
          </div>
          <div className="w-full lg:w-2/3 ">
            <div className="flex flex-wrap space-y-4  items-center justify-center">
              {
              listPartners.map((item, index)=>{
              return <div className="w-1/3 sm:w-[25%] flex items-center justify-center lg:justify-end"><img key={index} src={item} alt={`icon ${index}`} className="w-[130px] h-[40px]"/></div> 
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
