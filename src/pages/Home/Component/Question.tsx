import { dataQuestion } from "@/constants/dataQuestion";
import { Collapse, type CollapseProps } from "antd";
import Minus from "@assets/images/minus.svg";
import Plus from "@assets/images/plus.svg";
import { useState } from "react";

const Question = () => {
  const [activeCollapse, setActiveCollapse] = useState<string | string[]>(["1"]);

  const items: CollapseProps["items"] = dataQuestion.map((item) => {
    return {
      key: item.id.toString(),
      label: (
        <div className="flex items-center justify-between">
          <h5 className="text-20 not-italic font-bold text-neutral-90 font-body">{item.question}</h5>
          <img
            src={activeCollapse.includes(item.id.toString()) ? Minus : Plus}
            alt={activeCollapse.includes((item.id).toString()) ? "minus icon" : "plus icon"}
          />
        </div>
      ),
      children: <p className="text-16 text-neutral-50 leading-[24px] font-body not-italic font-normal">{item.answer}</p>,
    };
  });
  const onChange = (key: string | string[]) => {
    setActiveCollapse(key);
  };

  return (
    <div className="bg-white">
      <div className="max-w-1920 mx-auto px-5 xs:px-[40px] md:px-[80px] xl:px-[160px] pt-[80px] pb-[40px]">
        <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-6">
          <div className=" w-full lg:w-1/2 py-[32px]">
            <h3 className="gradient-text text-[48px] font-extrabold leading-[68px] mb-[24px]">Frequently asked questions</h3>
            <p className="text-16 font-normal leading-[24px] text-neutral-50">
              Haven’t found what you’re looking for?{" "}
              <a href="#" className="text-neutral-90">
                Contact us
              </a>
            </p>
          </div>
          <div className=" w-full lg:w-1/2">
            {/* <div className=""> */}
            <Collapse items={items} onChange={onChange} defaultActiveKey={["1"]} className="collapse-question" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
