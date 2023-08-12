import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "抑郁症",
      icon: "book",
      prefix: "depression/",
      children: "structure",
    },
    "slides",
  ],
  // "/depression/":"structure",
  "/depression/":[
    {
      text: "第一部分",
      icon: "book",
      prefix: "part1/",
      link: "part1/",
      children:"structure",
     
    },
    {
      text: "第二部分",
      icon: "book",
      prefix: "part2/",
      link: "part2/",
      children: "structure",
    },
    {
      text: "第三部分",
      icon: "book",
      prefix: "part3/",
      link: "part3/",
      children: "structure",
    },
    {
      text: "第四部分",
      icon: "book",
      prefix: "part4/",
      link: "part4/",
      children: "structure",
    },

  ],
});
