import React from "react";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const techStack = {
  Languages: [
    {
      name: "Java",
      icon: "https://img.icons8.com/?size=96&id=13679&format=png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=96&id=13441&format=png",
    },
    {
      name: "C++",
      icon: "https://th.bing.com/th/id/OIP.sK2DLVWeZvrofLuafipEHQHaFJ?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "C",
      icon: "https://img.icons8.com/?size=128&id=eMdBqh1N9IWw&format=png",
    },
  ],
  Frontend: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://img.icons8.com/?size=96&id=CIAZz2CYc6Kc&format=png",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "SpringBoot",
      icon: "https://img.icons8.com/?size=96&id=90519&format=png",
    },
    {
      name: "FastAPI",
      icon: "https://fastapi.tiangolo.com/img/icon-white.svg",
    },
  ],
  Database: [
    {
      name: "MySQL",
      icon: "https://img.icons8.com/?size=160&id=jYQqxG8eyJ19&format=png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=160&id=tBBf3P8HL0vR&format=png",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ],
  Concepts: [
    {
      name: "DBMS",
      icon: "https://th.bing.com/th/id/OIP.vBoivSg9h32_em3BZjkHXAHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      name: "Operating System",
      icon: "https://tse4.mm.bing.net/th/id/OIP.SU-VeegIVNODGkm5FECYWAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "DSA",
      icon: "https://th.bing.com/th/id/OIP.CXXqgvZw4EztUBFT1gDz5QHaHa?w=183&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ],
};

const TechSection = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-zinc-900 text-white p-4 rounded-lg transition-colors duration-300 hover:bg-zinc-800 w-full h-32"
        >
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2" />
          <p className="text-sm font-medium">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
);

function Page2() {
  return (
    <div className="bg-black min-h-screen p-2 sm:p-2">
      <h1 className="text-3xl sm:text-5xl text-purple-800 font-bold mb-8 text-center">
        Tech Stack
      </h1>
    
      <div className="flex flex-col gap-1">
        {Object.entries(techStack).map(([category, items]) => (
          <TechSection key={category} title={category} items={items} />
        ))}
      </div>
    </div>
  );
}

export default Page2;