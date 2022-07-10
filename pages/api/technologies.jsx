const technologies = (_, res) => {
 const techs = [
  {
   name: "React",
   icon: "/assets/tech/react.svg",
  },
  {
   name: "Next.js",
   icon: "/assets/tech/next.svg",
  },
  {
   name: "TailwindCSS",
   icon: "/assets/tech/tailwindcss.svg",
  },
  {
   name: "Javascript",
   icon: "/assets/tech/javascript.svg",
  },
  {
   name: "Node.js",
   icon: "/assets/tech/nodejs.svg",
  },
  {
   name: "Express.js",
   icon: "/assets/tech/express.svg",
  },
  {
   name: "NPM",
   icon: "/assets/tech/npm.svg",
  },
  {
   name: "Git",
   icon: "/assets/tech/git.svg",
  },
  {
   name: "Github",
   icon: "/assets/tech/github.svg",
  },
  {
   name: "Webpack",
   icon: "/assets/tech/webpack.svg",
  },
  {
   name: "Framer",
   icon: "/assets/tech/framer.svg",
  },
  {
   name: "MySQL",
   icon: "/assets/tech/mysql.svg",
  },
 ];
 res.status(200).json(techs);
};

export default technologies;
