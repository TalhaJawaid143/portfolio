"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleHireMeClick = () => {
    window.open(`https://wa.me/923352914335`, '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Talha Jawaid_CV.pdf';
    link.download = 'Talha Jawaid_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mt-[-65px]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-7 place-self-center text-center sm:text-left lg:ml-[30px] order-1"
        >
          <motion.h1 
            className="text-white mb-[0px] text-4xl sm:text-5xl lg:text-5xl font-extrabold"
            whileInView={{ opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Talha Jawaid",
                1000,
                "Front-end Developer",
                1000,
                "Digital Marketer",
                1000,
                "Data Scientist",
                1000,
                "UI UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p 
            className="text-[#d1c9c3] text-base sm:text-lg mb-6 lg:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
           "I am a Front-End Developer with a passion for crafting innovative solutions. 💻✨ With experience across a range of projects, from small startups to large corporations, I bring a diverse skill set and a commitment to creating exceptional user experiences. 🚀"
          </motion.p>

          <motion.div 
            className="mt-2 mb-12 sm:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center sm:justify-start">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:w-40 rounded-full bg-gradient-to-br from-amber-500 to-red-700 hover:bg-slate-200 text-white"
                onClick={handleHireMeClick}
              >
                Hire me
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-1 py-1 sm:w-40 rounded-full bg-gradient-to-br from-amber-500 to-red-700 hover:bg-slate-800 text-white"
                onClick={handleDownloadCV}
              >
                <span className="block bg-[#1a1614] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0 lg:ml-[70px] order-2 sm:order-2"
        >
          <motion.div 
  whileHover={{ scale: 1.02 }}
  className="rounded-full bg-transparent w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative overflow-hidden border-4 border-amber-500 to-red-700"
>
  <Image
    src="/images/hero.png"
    alt="Hero image"
    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
    width={300}
    height={300}
    priority
  />
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
