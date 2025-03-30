"use client"; // <-- This ensures everything runs on the client-side

import { motion } from "framer-motion";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TechStackSection from "@/components/TechStack";
import MyProjects from "@/components/Projects";
import MyWorkExperience from "@/components/WorkExperience";
import AboutMe from "@/components/Aboutme";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="py-20 bg-black px-4 md:px-40 flex  flex-col ">
      <motion.div
        className="flex flex-col gap-6 px-4 md:px-16  items-start  md:my-24 w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-blue-400 text-lg">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200">
          Anuhav Singh.
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-slate-400">
          I build things for the web.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          I&apos;m Anubhav Singh, a final-year student and Full Stack Developer
          with a passion for building scalable and efficient web applications. I
          enjoy transforming complex problems into simple, intuitive solutions
          through clean and maintainable code.
        </p>

        <motion.div
          className="flex self-start items-center mt-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a href="" target="_blank" download="Anubhav_Singh_Resume.pdf">
            <ShimmerButton background="#020617" className="w-48 h-12 mb-2">
              Resume
            </ShimmerButton>
          </a>
        </motion.div>
      </motion.div>

      {/* <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MyWorkExperience />
      </motion.section> */}
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >    
      </motion.div> */}
      <TechStackSection />
      <MyProjects />

      {/* <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        
      </motion.section> */}

      {/* <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutMe />
      </motion.section> */}
    </div>
  );
}
