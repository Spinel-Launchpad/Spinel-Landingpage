import Team1 from "@assets/images/team-1.svg";
import Team2 from "@assets/images/team-2.svg";
import Team3 from "@assets/images/team-3.svg";
export interface IDataOurTeam {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
  social: {
    twitter: string;
    linkedin: string;
    hoop: string;
  };
}

export const dataOurTeam: IDataOurTeam[] = [
  {
    id: 1,
    image: Team1,
    name: "Benjamin Tran",
    position: "CFO",
    description:
      "Prior to founding United System Capital, he served as president of an Asia-based joint venture with Brean Murray Carret & Co., a New York-based investment bank that has raised over $4B.\n Currently, he is Chairman & CEO at Bitech Technologies",
    social: {
      twitter: "",
      linkedin: "",
      hoop: "",
    },
  },
  {
    id: 2,
    image: Team2,
    name: "Jee Nguyen",
    position: "CEO/Founder Sofin Network",
    description:
      "He has over 10 years of experience in IT, entertainment, and over 8 years of experience in blockchain/cryptocurrency development, financial technology, and Web3 crypto, from ideation to market launch.",
    social: {
      twitter: "",
      linkedin: "",
      hoop: "",
    },
  },
  {
    id: 3,
    image: Team3,
    name: "KV Nguyen",
    position: "Co-Founder/CTO",
    description:
      "He is a highly experienced expert in the field of Web3 coordination systems, specialising in the creation and management of DAOs. He is also a technology advisory expert and technology solutions architect for Web3 projects, with 05 years of blockchain system security experience.",
    social: {
      twitter: "",
      linkedin: "",
      hoop: "",
    },
  },
];
