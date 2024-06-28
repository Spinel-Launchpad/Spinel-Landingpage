// twitter: "",
// linkedin: "",
// hoop: "",
import Twitter from "@assets/images/twitter.svg";
import Linkedin from "@assets/images/linkedin.svg";
import Hoop from "@assets/images/hook.svg";
import { IDataOurTeam, dataOurTeam } from "@/constants/dataOurTeam";

const OurTeam = () => {
  return (
    <div className="bg-white">
      <div className="max-w-1920 mx-auto px-5 xs:px-[40px] md:px-[80px] xl:px-[160px] pt-[94px] pb-5">
        <div className="mb-[78px]">
          {" "}
          <h3 className="gradient-text text-center font-extrabold text-48 leading-[60px] uppercase mb-6">OUR TEAM</h3>
          <p className="text-center text-12 not-italic font-medium leading-[16px] tracking-[1.8px]  uppercase text-neutral-95/50">
            Helping people create beautiful content at
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap space-x-0 md:space-x-8 justify-center ">
          {dataOurTeam.map((item: IDataOurTeam, _) => {
            return (
              <div key={item.id} className={`flex flex-col items-center justify-start w-full md:w-[45%] lg:w-1/3 mt-8 lg:mt-8`}>
                <img
                  src={item.image}
                  alt={`image ${item.name}`}
                  className="w-[96px] h-[96px]"
                  style={{
                    borderRadius: "58px",
                    border: "0.5px solid #5D57FF",
                  }}
                />
                <h3
                  className="mt-5 text-center text-gray-900 text-20 not-italic font-extrabold leading-[28px]"
                  style={{
                    fontVariantNumeric: "lining-nums proportional-nums",
                    fontFeatureSettings: "'ss03' on, 'liga' off",
                  }}
                >
                  {item.name}
                </h3>
                {item.positions.map((position, index) => {
                  return (
                    <h5 key={index} className="text-center text-primary-700 not-italic font-extrabold leading-[24px]">
                      {position}
                    </h5>
                  );
                })}
                {item.descriptions.map((description, index) => {
                  return (
                    <p
                      key={index}
                      className="text-center text-gray-600 text-[13px] not-italic font-normal leading-[20px] tracking-[-0.13px] mb-2"
                      style={{
                        fontVariantNumeric: "lining-nums proportional-nums",
                        fontFeatureSettings: "'ss03' on, 'liga' off",
                      }}
                    >
                      {description}
                    </p>
                  );
                })}

                <div className="flex items-center justify-center mt-4 space-x-4">
                  <a href={item.social.twitter}>
                    <img src={Twitter} alt="icon twitter" />
                  </a>
                  <a href={item.social.linkedin}>
                    <img src={Linkedin} alt="icon linkedin" />
                  </a>
                  <a href={item.social.hoop}>
                    <img src={Hoop} alt="icon hoop" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
