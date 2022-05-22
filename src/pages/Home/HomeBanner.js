import React from 'react';
import homeHero from '../../assets/image/home-hero.png';

const HomeBanner = () => {
    return (
      <section
        style={{
          background: `url(${homeHero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center min-h-[91vh] px-5 md:px-10"
      >
        <div>
          <h1 className="font-bold text-center text-4xl sm:text-7xl text-white">
            Welcome to Rinspeed Car
          </h1>
          <h4 className="font-bold my-4 text-center text-2xl sm:text-4xl text-white">
            A Global Car Manufacture Company
          </h4>
          <div className="text-center mt-8">
            <button className="px-5 py-3 rounded uppercase shadow-lg shadow-primary hover:bg-white hover:shadow-white hover:text-black font-semibold bg-primary mr-4 text-white w-full sm:w-auto mb-6 sm:mb-0">
              Learn More
            </button>
            <a href="#parts" className="px-5 py-3 block sm:inline-block rounded uppercase shadow-lg shadow-white hover:bg-primary hover:shadow-primary hover:text-white font-semibold bg-white w-full sm:w-auto">
              Our Parts
            </a>
          </div>
        </div>
      </section>
    );
};

export default HomeBanner;