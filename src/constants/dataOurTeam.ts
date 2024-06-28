import Team1 from "@assets/images/team-1.svg";
import Team2 from "@assets/images/team-2.svg";
import Team3 from "@assets/images/team-3.svg";
export interface IDataOurTeam {
  id: number;
  image: string;
  name: string;
  positions: string[];
  descriptions: string[];
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
    positions: ["CFO"],
    descriptions: [
      "Prior to founding United System Capital, he served as president of an Asia-based joint venture with Brean Murray Carret & Co., a New York-based investment bank that has raised over $4B.",
      "Currently, he is Chairman & CEO at Bitech Technologies",
    ],
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
    positions: ["CEO/Founder Sofin Network"],
    descriptions: [
      "He has over 10 years of experience in IT, entertainment, and over 8 years of experience in blockchain/cryptocurrency development, financial technology, and Web3 crypto, from ideation to market launch.",
    ],
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
    positions: ["Co-Founder/CTO", "Ex-Gemini Singapore"],
    descriptions: [
      "He is a highly experienced expert in the field of Web3 coordination systems, specialising in the creation and management of DAOs.He used to be the lead software engineer responsible for the wallet transaction system at Gemini Singapore (the third-largest crypto exchange in the U.S.). ",
      "He is also a technology advisory expert and technology solutions architect for Web3 projects, with 05 years of blockchain system security experience.",
    ],
    social: {
      twitter: "",
      linkedin: "",
      hoop: "",
    },
  },
];
