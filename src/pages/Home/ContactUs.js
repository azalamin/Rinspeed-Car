import React from "react";
import contact from '../../assets/image/contact-us.png';

const ContactUs = () => {
  return (
    <section id="contact">
      <h1 className="text-center text-4xl font-bold uppercase pt-28">
        Get<span className="text-primary"> In</span> Touch
      </h1>
      <div class="max-w-screen-xl mt-5 px-8 grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900">
        <div class="text-gray-700">
          <img src={contact} alt="" />
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
