import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import team1 from "../../assets/image/team_1.jpeg";
import team2 from "../../assets/image/team_2.jpeg";
import team3 from "../../assets/image/team_3.jpeg";

const OurTeam = () => {
  const members = [
    {
      name: "William Charles",
      role: "CEO",
      img: team1,
      about:
        "The Industry Team at Compass is an elite team of industry influencers &amp; residential consultants assembled.",
    },
    {
      name: " Anthony Jeffrey",
      role: "Engineer",
      img: team2,
      about:
        "Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines",
    },
    {
      name: " Stephen Scott",
      role: "Engineer",
      img: team3,
      about:
        "Engineers design machinery, build skyscrapers, and oversee public works, but they address society's needs.",
    },
  ];
  return (
    <section className="pt-28 px-5 md:px-10">
      <div className="md:grid grid-cols-2 justify-between">
        <div className="">
          <h1 className="text-4xl font-extrabold uppercase">
            Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg text-gray-600 py-5">
            The team has consulted on a number of new development projects in
            New York. They offer guidance on navigating all stages of
            development.
          </p>
          <div className="w-[40%] h-[4px] bg-slate-200">
            <div className="w-[50%] h-[5px] bg-primary"></div>
          </div>
        </div>
        <div className="md:text-right mt-8 md:mt-0">
          <button className="btn btn-primary">JOIN OUR TEAM</button>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 gap-10 mt-14">
        {members.map(({ name, role, img, about }, index) => (
          <div key={index} className="card bg-base-100 shadow-xl mb-10 lg:mb-0">
            <div>
              <figure>
                <img src={img} alt="" />
              </figure>
            </div>
            <div className="mx-10 p-3 text-white mt-[-40px] bg-primary text-center">
              <h2 className="text-center text-xl font-bold">{name}</h2>
              <p className="font-bold">{role}</p>
            </div>
            <div className="card-body">
              <p className="text-center">{about}</p>
              <div className="flex justify-center gap-5 mt-5">
                <FaFacebook className="text-3xl cursor-pointer hover:text-primary" />
                <FaInstagram className="text-3xl cursor-pointer hover:text-primary" />
                <FaLinkedin className="text-3xl cursor-pointer hover:text-primary" />
                <FaGithub className="text-3xl cursor-pointer hover:text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
