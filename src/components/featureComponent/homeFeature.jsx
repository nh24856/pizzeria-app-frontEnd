import React from "react"
import { motion as Motion } from "framer-motion"
import image from '/images.png?url'

const HomeFeature = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-15 rounded-lg shadow-lg">
      {/* Left Text Section */}
      <Motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          The Best Pizzas in Rwanda! 🍕
        </h2>
        <p className="text-lg text-gray-700">
          Pizzeria serves the best pizzas all over Rwanda, ensuring every bite
          is a taste of perfection. Our commitment to quality ingredients and
          innovative recipes sets us apart. Whether you're dining in or
          ordering online, we guarantee a seamless experience with our
          user-friendly dashboard. Join us in Kigali for a pizza experience
          that will leave you craving more!
        </p>
      </Motion.div>

      {/* Right Image Section */}
      <Motion.img
        src={image}
        alt="Delicious Pizza"
        className=" w-90 h-90 mt-6 md:mt-0 rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default HomeFeature;
