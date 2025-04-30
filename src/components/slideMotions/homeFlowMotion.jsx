import React from 'react'
import { motion as Motion } from 'framer-motion';

const HomeFlowMotion = () => {

    const steps = [
        { icon: "👤", text: "Sign in" },
        { icon: "📝", text: "Order Pizza" },
        { icon: "💲", text: "Order Payment" },
        { icon: "🏍️", text: "Order Dlivery" },
        { icon: "🍕", text: "Enjoy your Pizza" }
      ];
      

  return (
    <>
    <section id='How_it_works' >
      <h1 className="text-3xl font-bold text-center mb-10">How it works</h1>
    <div className="flex flex-col items-center gap-20 mt-10 relative">
      {/* 🔹 Horizontal Row (First Three Steps) */}
      <div className="flex items-center gap-20 relative">
      <Motion.div
        className="flex flex-col items-center text-center p-6 rounded-lg bg-red-100 shadow-md w-48 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="text-4xl">{steps[0].icon}</span>
        <p className="text-lg font-semibold mt-2">{steps[0].text}</p>

        {/* 🔹 Line Connecting to Fourth Step */}
        <Motion.div
          className="absolute top-1/2 left-full w-18 h-1 bg-red-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </Motion.div>

      <Motion.div
        className="flex flex-col items-center text-center p-6 rounded-lg bg-red-100 shadow-md w-48 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="text-4xl">{steps[1].icon}</span>
        <p className="text-lg font-semibold mt-2">{steps[1].text}</p>

        {/* 🔹 Line Connecting to Fourth Step */}
        <Motion.div
          className="absolute top-1/2 left-full w-18 h-1 bg-red-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </Motion.div>

      <Motion.div
        className="flex flex-col items-center text-center p-6 rounded-lg bg-red-100 shadow-md w-48 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="text-4xl">{steps[2].icon}</span>
        <p className="text-lg font-semibold mt-2">{steps[2].text}</p>

        {/* 🔹 Line Connecting to Fourth Step */}
        {/* <Motion.div
          className="absolute top-[-30px] left-1/2 w-1 h-8 bg-red-500"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        /> */}
      </Motion.div>
      </div>

      {/* 🔹 Fourth Step (Centered Below) */}
      <Motion.div
        className="flex flex-col items-center text-center p-6 rounded-lg bg-red-100 shadow-md w-48 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="text-4xl">{steps[3].icon}</span>
        <p className="text-lg font-semibold mt-2">{steps[3].text}</p>

        {/* 🔹 Line Connecting to Fourth Step */}
        <Motion.div
          className="absolute top-1/2 left-full w-45 h-1 bg-red-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
        <Motion.div
          className="absolute top-[-72px] left-92.5 w-1 h-34.5 bg-red-500"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        />
        <Motion.div
          className="absolute bottom-[-72px] left-1/2 w-1 h-18 bg-red-500"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        />
      </Motion.div>

      {/* 🔹 Fifth Step (Below Fourth Step) */}
      <Motion.div
        className="flex flex-col items-center text-center p-6 rounded-lg bg-red-100 shadow-md w-48 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
      
        <span className="text-4xl">{steps[4].icon}</span>
        <p className="text-lg font-semibold mt-2">{steps[4].text}</p>

        {/* 🔹 Line Connecting to Fifth Step */}
        
      </Motion.div>
    </div>
    </section>
  </>
  )
}

export default HomeFlowMotion
