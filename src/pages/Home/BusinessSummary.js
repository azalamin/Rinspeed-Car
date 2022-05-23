import React from 'react';
import { FaTools } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { RiFundsBoxFill } from "react-icons/ri";
import { SiSymantec } from "react-icons/si";
import bgBusiness from '../../assets/image/business-bg.png';

const BusinessSummary = () => {
    return (
      <section
        id="business"
        style={{
          background: `url(${bgBusiness})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="pt-28 shadow-xl pb-20"
      >
        <h1 className="text-center text-4xl font-bold uppercase mb-20">
          Our <span className="text-primary">Business</span> Summary
        </h1>
        <div className="md:flex justify-center text-center py-5 px-5 md:px-10">
          <div className="stat">
            <div className="stat-desc flex justify-center mb-3">
              <SiSymantec className="text-5xl text-primary" />
            </div>
            <div className="stat-value text-primary">100+</div>
            <div className="stat-title">SERVED CUSTOMERS</div>
          </div>

          <div className="stat">
            <div className="stat-desc flex justify-center mb-3">
              <RiFundsBoxFill className="text-5xl text-secondary" />
            </div>
            <div className="stat-value text-secondary">120M+</div>
            <div className="stat-title">ANNUAL REVENUE</div>
          </div>

          <div className="stat">
            <div className="stat-desc flex justify-center mb-3">
              <MdReviews className="text-5xl text-accent" />
            </div>
            <div className="stat-value text-accent">33k+</div>
            <div className="stat-title">REVIEWS</div>
          </div>

          <div className="stat">
            <div className="stat-desc flex justify-center mb-3">
              <FaTools className="text-5xl text-warning" />
            </div>
            <div className="stat-value text-warning">50+</div>
            <div className="stat-title">PARTS</div>
          </div>
        </div>
      </section>
    );
};

export default BusinessSummary;