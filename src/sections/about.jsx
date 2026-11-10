import React from "react";

const about = () => {
  return (
    <div
      className=" bg-black pt-25 pb-10 px-10 z-4 h-full grid gap-10"
      id="about"
    >
      {/*About Me Section*/}
      <div className="max-w-[1000px] mx-auto grid gap-10 leading-7 animate-slide-in-top">
        <h2
          className="text-3xl sm:text-4xl font-extrabold 
                      bg-gradient-to-r from-orange-400 via-white to-orange-400
                      text-transparent bg-clip-text drop-shadow-lg"
        >
          About Me
        </h2>
        <div
          className="border-1 p-6 text-white bg-neutral-950/80 border-white/10 rounded-4xl hover:-translate-y-2 hover:scale-[1.02]
               hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)] hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300"
        >
          <p className=" text-1xl">
            I'm a Web Developer with 4 years of experience building,
            customizing, and maintaining websites and web applications. I
            started my journey as a freelance developer on Fiverr, creating
            websites for clients and helping businesses establish their online
            presence. I later worked remotely with Agility Outsourcing, a
            UK-based company, and as a part-time developer at MG Computing
            Solutions. My background is primarily in WordPress development,
            including custom theme development using PHP, Elementor, website
            customization, and maintenance. I also have experience in full-stack
            development using React.js, TypeScript, Node.js, Express.js, and
            PostgreSQL, building responsive interfaces and functional web
            applications. I enjoy turning ideas and designs into practical
            solutions, learning new technologies, and improving my skills
            through real-world projects. I'm always looking for opportunities to
            grow as a developer and build websites and applications that provide
            a good user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
