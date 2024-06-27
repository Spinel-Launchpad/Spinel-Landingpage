import { useRef } from "react";
import NextIcon from "@assets/images/next-icon.svg";
import PrevIcon from "@assets/images/prev-icon.svg";
import Slider from "react-slick";
import { IDataFeature, dataFeature } from "@/constants/dataFeature";

const Feature = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  const settingCarousel = {
    dots: false,
    arrows: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    speed: 500,
    draggable: true,
    effect: "scrollx",
    className: "ecosystem-feature",
    responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#EEE] ">
      <div className="max-w-1920 w-full mx-auto px-2 xs:px-4 xl:px-[160px] pt-[68px] pb-[45px]">
        <div>
          <p className="text-center text-60 font-extralight text-black leading-[68px] uppercase">
            KEY <span className="text-60 font-extrabold gradient-text">FEATURE</span>
          </p>

          <div className="mt-8 ">
            <Slider {...settingCarousel} ref={sliderRef}>
              {dataFeature.map((item: IDataFeature, _) => {
                return (
                  <div>
                    <div className=" flex flex-col justify-center px-4">
                      <div
                        key={item.id}
                        // min-h-[450px] sm:min-h-[550px] md:min-h[400px] lg:min-h[500px]
                        className="p-6 h-[520px] relative"
                        style={{
                          borderRadius: "16px",
                          border: "1px solid #3100E7",
                          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #9664FF 180%)",
                          backdropFilter: "blur(16px)",
                        }}
                      >
                        <div className="bg-white mx-auto  rounded-[14px]">
                          <img src={item.image} alt={item.title} className="w-[200px] h-[200px] mx-auto" />
                        </div>
                        <h3 className="gradient-text text-[26px] font-extrabold leading-[28px] not-italic my-[20px] uppercase">{item.title}</h3>
                        <p className="mb-[30px] text-black font-[11px] not-italic font-normal leading-[17px]">{item.description}</p>
                        <a href={item.href} className="rounded-[17px] py-[8px] px-[16px] w-[115px] h-[30px] text-center text-[#3E008A] text-10 not-italic font-bold absolute bottom-[20px] left-[20px]" style={{
                            border:"0.5px solid #6C38D9",
                            background:"rgba(255, 255, 255, 0.63)",
                            backdropFilter:"blur(4.5px)",
                        }}>CONNECT NOW</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="flex justify-end space-x-8 mt-8">
              <button onClick={prev} className="w-[42px] h-[42px] bg-white rounded-full flex justify-center items-center">
                <img src={PrevIcon} alt="prev icon" className="w-[28px] h-[28px]" />
              </button>
              <button onClick={next} className="w-[42px] h-[42px] bg-white rounded-full  flex justify-center items-center">
                <img src={NextIcon} alt="next icon" className="w-[28px] h-[28px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
