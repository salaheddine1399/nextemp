import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="Algerie Poste"
            time="08-2025 - Now"
            address="Bab ezzouar, Algerie"
            companyLink="https://www.poste.dz"
             work={
    <>
      <p>
        At <strong>Algérie Poste</strong>, I contribute to building internal tools aimed at improving 
        development efficiency and standardizing project workflows.
      </p>
      <p className="mt-2">
        I developed a <strong>CRUD-based starter project</strong> integrated with the main system, 
        enabling developers to <strong>launch new applications faster</strong> using a consistent and scalable setup.
      </p>
      <p className="mt-2">
        I also created a <strong>planning management web app</strong> for post office employees, featuring 
        <strong> SSO authentication</strong> with Algérie Poste’s internal system for secure and unified access.
      </p>
      <p className="mt-2">
        These projects strengthened my expertise in <strong>Laravel</strong>, <strong>system architecture</strong>, 
        and <strong>SSO integration</strong>, while supporting Algérie Poste’s <strong>digital transformation</strong>.
      </p>
    </>
  }
          />

          <Details
            position="Full Stack Developer"
            company="Goupe Transtev"
            time="10-2024 - 08-2025"
            address="Belouizdad, Algerie"
            companyLink="https://dnk-dz.com"
              work={
    <>
      <p>
        Developed and customized <strong>ERP modules</strong> using <strong>PHP</strong> and <strong>CodeIgniter</strong>, 
        tailored to client requirements. Collaborated with stakeholders to analyze business needs and deliver scalable, 
        high-performance solutions.
      </p>
      <p className="mt-2">
        Designed and implemented a <strong>mobile-friendly web app</strong> for <strong>QR code scanning</strong>, 
        allowing drivers to record bus <strong>entry and exit times</strong>, integrated with an 
        <strong> administration dashboard</strong> for real-time monitoring and management. Handled testing, deployment, 
        and optimization to ensure <strong>security</strong>, <strong>reliability</strong>, and <strong>operational efficiency</strong>.
      </p>
    </>
  }

          />
          <Details
            position="Developer Intern"
            company="Renault Algerie"
            time="02-2024 - 07-2024"
            address="Oued Smar, Algerie"
            companyLink="https://www.renault.dz"
              work={
    <>
      <p>
        During my internship at <strong>Renault Group</strong>, I designed and developed an 
        <strong> innovative web platform</strong> for spare parts distribution. The project featured an 
        <strong> advanced recommendation system</strong> to enhance user experience and optimize logistics.
      </p>
      <p className="mt-2">
        I worked on <strong>front-end development</strong> using <strong>React.js</strong>, integrated 
        <strong> secure authentication</strong> with <strong>Okta</strong>, and contributed to building the 
        <strong> recommendation algorithm</strong>. I also participated in <strong>requirement analysis</strong>, 
        <strong> testing</strong>, and <strong>system validation</strong> to ensure platform reliability.
      </p>
      <p className="mt-2">
        This experience strengthened my skills in <strong>web development</strong>, 
        <strong> system integration</strong>, and <strong>user-centered design</strong>, 
        while giving me valuable insight into <strong>collaborative, enterprise-level projects</strong>.
      </p>
    </>
  }

          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Experience;
