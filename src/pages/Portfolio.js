import React from "react";
import digitalElectronics from "../assets/image/digital.png";
import doctorsPortal from "../assets/image/doctors_portal.png";
import getMeHealthy from "../assets/image/get-me-healthy.png";
import myImage from "../assets/image/my-img.png";

const Portfolio = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse px-5">
          <div className="lg:w-[40%]">
            <img
              src={myImage}
              className="sm:max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] text-center lg:text-left">
            <h1 className="text-5xl font-bold">Hi! I Am</h1>
            <h1 className="text-5xl font-bold text-primary">Al-Amin Sheikh</h1>
            <p className="py-6 font-xl font-semibold">
              A goal getter, as well as a self-starter seeks the position of
              Junior Developer. Bringing excellent proficiency in JavaScript,
              React JS, HTML, CSS, Bootstrap, Tailwindcss, Mongodb, Firebase and
              more. Ready to learn new and explore new technology.
            </p>
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div className="my-16 px-5 md:px-10">
        <div>
          <h4 className="text-4xl text-center font-bold capitalize">
            The <span className="text-primary">Projects</span> I have done
          </h4>
          <div className="md:flex justify-center gap-10 items-center mt-20">
            <div className="card bg-base-50 shadow-xl image-full mb-10 md:mb-0">
              <figure>
                <img src={digitalElectronics} alt="Electronics" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Digital Electronics</h2>
                <div className="card-actions justify-end">
                  <a
                    href="https://digital-electronics-1f619.web.app/"
                    className="btn btn-primary"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl image-full mb-10 md:mb-0">
              <figure>
                <img src={getMeHealthy} alt="Healthy" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Get Me Healthy</h2>
                <div className="card-actions justify-end">
                  <a
                    href="https://get-me-healthy.web.app/"
                    className="btn btn-primary"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
            </div>
            <div className="card image-full mb-10 md:mb-0">
              <figure>
                <img src={doctorsPortal} alt="Doctor" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Doctors Portal</h2>
                <div className="card-actions justify-end">
                  <a
                    href="https://doctors-portal-a6cd1.web.app/"
                    className="btn btn-primary"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16" id="contact">
            <h3 className="text-5xl text-center font-bold mt-20">
              Contact <span className="text-primary">Me</span>
            </h3>
            <div className="mt-16 ">
              <div className="text-center">
                <h3 className="font-bold text-3xl">Al-Amin Sheikh</h3>
                <h3>Professional Front End Developer</h3>
              </div>
              <hr />
              <div className="md:flex justify-between md:w-8/12 mx-auto mt-2">
                <div>
                  <address>Address: Rajbari, Bangladesh</address>
                  <a
                    href="mailto: alaminsheikh.dev@gmail.com"
                    className="hover:link-hover"
                  >
                    alaminsheikh.dev@gmail.com
                  </a>
                  <br />
                  <a href="Tel:016288-90770" className="hover:link-hover">
                    (+880) 16288-90770
                  </a>
                  <h5 className="font-bold mt-3">Education</h5>
                  <hr />
                  <p>
                    English Literature: Honors in English literature 2022 <br />
                    Rajbari Government College <br />
                    Rajbari, Bangladesh
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/azalamin/"
                    className="hover:link-hover"
                  >
                    Linkedin.com/in/azalamin
                  </a>{" "}
                  <br />
                  <a
                    href="https://github.com/azalamin"
                    className="hover:link-hover"
                  >
                    Github.com/azalamin
                  </a>
                  <br />
                  <a
                    href="https://azalamin.github.io/az-alamin/"
                    className="hover:link-hover"
                  >
                    Portfolio
                  </a>
                  <h5 className="font-bold mt-3">My Skills</h5>
                  <hr />
                  <p>
                    JavaScript, React.js, Tailwind, <br />
                    Bootstrap-5, HTML5, CSS3, Firebase, <br />
                    Node.js, Express.js, MongoDb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
