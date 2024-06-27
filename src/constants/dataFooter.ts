import Discord from "@assets/images/discord.svg";
import Facebook from "@assets/images/facebook.svg";
import Ig from "@assets/images/ig.svg";
import Telegram from "@assets/images/telegram.svg";
import Twitter from "@assets/images/twitter.svg";


export interface IMenuFooter {
  id: number;
  content: string;
  href: string;
}

export interface IMenuSocialMediaFooter {
  id: number,
  image:string,
  href: string,
}
export const dataMenuFooter: IMenuFooter[] = [
  {
    id: 1,
    content: "features",
    href: "features",
  },

  {
    id: 2,
    content: "pricing",
    href: "pricing",
  },
  {
    id: 3,
    content: "how to use",
    href: "how to use",
  },
  {
    id: 4,
    content: "roadmap",
    href: "roadmap",
  },
];


export const dataMenuSocialMediaFooter : IMenuSocialMediaFooter[] =[
 {
  id:1,
  image: Discord,
  href:""
 },
 {
  id:2,
  image: Twitter,
  href:""
 },
 
 {
  id:3,
  image: Ig,
  href:""
 },
 {
  id:4,
  image: Telegram,
  href:""
 },
 {
  id:5,
  image: Facebook,
  href:""
 },
 
 
]


