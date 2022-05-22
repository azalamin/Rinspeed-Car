import React from 'react';
import { FaTools } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { RiFundsBoxFill } from "react-icons/ri";
import { SiSymantec } from "react-icons/si";
import bgBusiness from '../../assets/image/business-bg.png';

const BusinessSummary = () => {
    return (
      <section
        style={{
          background: `url(${bgBusiness})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="mb-20 py-10 md:py-20 shadow-xl"
      >
        <h1 className="text-center text-4xl font-bold uppercase mb-16">
          Our <span className="text-primary">Business</span> Summary
        </h1>
        <div class="md:flex justify-center text-center py-5 px-5 md:px-10">
          <div class="stat">
            <div class="stat-desc flex justify-center mb-3">
              <SiSymantec className="text-5xl text-primary" />
            </div>
            <div class="stat-value text-primary">100+</div>
            <div class="stat-title">SERVED CUSTOMERS</div>
          </div>

          <div class="stat">
            <div class="stat-desc flex justify-center mb-3">
              <RiFundsBoxFill className="text-5xl text-secondary" />
            </div>
            <div class="stat-value text-secondary">120M+</div>
            <div class="stat-title">ANNUAL REVENUE</div>
          </div>

          <div class="stat">
            <div class="stat-desc flex justify-center mb-3">
              <MdReviews className="text-5xl text-accent" />
            </div>
            <div class="stat-value text-accent">33k+</div>
            <div class="stat-title">REVIEWS</div>
          </div>

          <div class="stat">
            <div class="stat-desc flex justify-center mb-3">
              <FaTools className="text-5xl text-warning" />
            </div>
            <div class="stat-value text-warning">50+</div>
            <div class="stat-title">PARTS</div>
          </div>
        </div>
      </section>
    );
};

export default BusinessSummary;