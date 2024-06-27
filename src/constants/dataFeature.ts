import Feature1 from "@assets/images/feature-1.svg";
import Feature2 from "@assets/images/feature-2.svg";
import Feature3 from "@assets/images/feature-3.svg";
import Feature4 from "@assets/images/feature-4.svg";
import Feature5 from "@assets/images/feature-5.svg";

export interface IDataFeature {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

export const dataFeature: IDataFeature[] = [
  {
    id: 1,
    image: Feature1,
    title: "DIVERSE FUNDRAISING MODEL",
    description:
      "We offer a diverse fundraising model for start-ups or projects in the blockchain/Web3 space, including LBP, IDO, INO, ICO, and more. Our approach ensures a high level of trust and credibility through a curated flow.",
    href: "",
  },
  {
    id: 2,
    image: Feature2,
    title: "Community First",
    description:
      "The majority of projects on SPINEL Launchpad commence at a high initial price, creating an opportunity for the community to have fair access to potential projects as soon as possible and allowing the community to invest at a lower price point.",
    href: "",
  },
  {
    id: 3,
    image: Feature3,
    title: "DAO COUNCIL",
    description:
      "Establing through SPINEL Launchpad's established governance process. The DAO Council is empowered to act independently, proposing measures that serve the interests of the DAO and operate with the consent of the community.",
    href: "",
  },
  {
    id: 4,
    image: Feature4,
    title: "DAO POOL",
    description:
      "This model has been designed with the objective of protecting individual investors. In accordance with their rights, investors are entitled to monitor the status of their contributed funds with the fund managers. They have the right to vote and select the projects in which they wish to invest.",
    href: "",
  },
  {
    id: 5,
    image: Feature5,
    title: "Affiliate Fundraising Piorneer",
    description:
      "A premier affiliate network distinguished by its unparalleled quality and excellence. With a community of over 50,000 dedicated members, we set the standard for innovation and success in affiliate fundraising",
    href: "",
  },
];
