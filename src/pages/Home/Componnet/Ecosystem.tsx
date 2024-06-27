import { Carousel, CarouselProps } from "antd";
import { DataEcosystem, IDataEcosystem } from "@/constants/dataEcosystem";
import { useRef } from "react";
import NextIcon from "@assets/images/next-icon.svg";
import PrevIcon from "@assets/images/prev-icon.svg";
import Slider from "react-slick";

const Ecosystem = () => {
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
    className: "ecosystem-carousel ",
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
            SPINEL <span className="text-60 font-extrabold gradient-text">ECOSYSTEM</span>
          </p>

          <div className="mt-8 slider-container">
            <Slider  {...settingCarousel} ref={sliderRef}>
              {DataEcosystem.map((item: IDataEcosystem, _) => {
                return (
                  <div key={item.id} className="px-4">
                    <div className="relative w-[283px] mx-auto overflow-visible">
                      <img src={item.image} alt={`image ${item.id}`} className="h-[381px] w-[283px] object-contain rounded-[20px]" />
                      <div className="absolute top-[350px] right-0 left-0">
                        <div className="w-[90%] mx-auto bg-white flex flex-col p-[20px] h-[20px] rounded-[20px] h-[250px]"
                        style={{
                          boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                        >
                          <img src={item.logo} alt={`logo ${item.id}`} className="w-[117px] h-[33px]" />
                          <p className="mt-[20px] text-primary-dark">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider >
            <div className="flex justify-end space-x-8">
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

export default Ecosystem;
