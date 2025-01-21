"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { spring } from "motion";
import { Fragment, useRef, useState, useEffect } from "react";
import FlowElement from "../Components/Landing/FlowElement";
import Line from "../Components/Landing/Line";
import { useNavigate } from "react-router-dom";
import amplAiLogo from "../assets/logo.svg";

export default function Landing() {
  const router = useNavigate();

  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = `#${entry.target.id}`;
            const fullPath = `${window.location.origin}/${sectionId}`;
            setActiveSection(fullPath);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold for when a section is considered "in view"
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const gradientStyle =
    "bg-gradient-to-r from-[#AAE6E7] to-[#95E362] inline-block text-transparent bg-clip-text";

  const elements = [
    { title: "User", size: "small" },
    { title: "Security" },
    { title: "Personal Assistant Agent" },
    { title: "Trading Agent" },
    { title: "Market Agent" },
    { title: "Grid Agent" },
    { title: "Completed", size: "small" },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 0.75], ["83%", "-50%"]);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-[#AAE6E7] to-[#95E362] p-4 flex items-center justify-center"
      >
        <div className="flex gap-24">
          <a
            className="text-gray-950 hover:text-gray-800 hover:font-semibold transition-all"
            href="http://valencyenergy.com/"
            target="_blank"
          >
            Go Solar with Valency Energy
          </a>
          <a
            className="text-gray-950 hover:text-gray-800 hover:font-semibold transition-all"
            href="https://docs.google.com/forms/d/1qpu_8xiENVgHkqmeozBwBng8XiyWwqlJ1kljBAeMO7s/edit"
            target="_blank"
          >
            Become a Partner
          </a>
          <a
            className="text-gray-950 hover:text-gray-800 hover:font-semibold transition-all"
            href="https://docs.google.com/forms/d/1SFsAP01J3n5h5clCLHhaRmiHpbsWzZmsIS_Gj4Af0no/edit"
            target="_blank"
          >
            Become an Investor
          </a>
        </div>
      </motion.div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex items-center bg-[#181818]/70 backdrop-blur-md flex-row justify-evenly py-4 sticky top-0 z-10"
      >
        <img src={amplAiLogo} width={200} height={50} alt="logo" />
        <div className="flex gap-16">
          {[
            { name: "Home", href: `${window.location.origin}/#home` },
            { name: "About Us", href: `${window.location.origin}/#about` },
            {
              name: "Technology Overview",
              href: `${window.location.origin}/#technology`,
            },
            {
              name: "Current Partners",
              href: `${window.location.origin}/#footer`,
            },
          ].map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className={`text-gray-400 hover:text-gray-100 transition-colors ${
                activeSection === href ? "text-white" : ""
              }`}
            >
              {name}
            </a>
          ))}
        </div>
        <div className="flex gap-10 items-center">
          <button
            onClick={() => router("/sign-in")}
            className={`${gradientStyle}`}
          >
            Login
          </button>
          <button
            onClick={() => router("/sign-up")}
            className="bg-gradient-to-r from-[#AAE6E7] to-[#95E362] text-black px-4 py-2 rounded-md"
          >
            Get Started
          </button>
        </div>
      </motion.nav>

      <section className="w-full min-h-full pb-14" id="home">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          src="/bg_grid.svg"
          width={1450}
          height={870}
          alt="bg-grid"
          className="absolute -mt-5"
        />
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { type: spring },
            }}
            className={`mt-16 text-7xl font-semibold ${gradientStyle} text-center leading-snug`}
          >
            Energy Exchange
            <br />
            redefined for you
          </motion.h1>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5, type: spring } }}
            className="mt-10 text-center leading-7 text-xl text-[#F4F4F6]"
          >
            Intelligence Meets Energy, Community Meets Power.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="mt-10 bg-gradient-to-r from-[#AAE6E7] to-[#95E362] cursor-pointer rounded-md p-0.5"
            onClick={() => {}}
          >
            <span className="flex w-full bg-[#181818] text-white rounded px-8 py-2">
              Get Started
            </span>
          </motion.div>
          <motion.img
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.5 },
            }}
            src={"/homeImage.svg"}
            width={900}
            height={650}
            alt="home image"
            className="mt-7"
          />
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.2 }}
          src={"/note.svg"}
          className="absolute top-0 right-0 -translate-x-72 translate-y-52"
          width={120}
          height={120}
          alt="note"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.7 }}
          src={"/battery.svg"}
          className="absolute top-0 right-0 -translate-x-96 translate-y-96"
          width={120}
          height={120}
          alt="battery"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.9 }}
          src={"/zap.svg"}
          className="absolute top-0 left-0 translate-x-96 translate-y-96"
          width={120}
          height={120}
          alt="zap"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.4 }}
          src={"/bulb.svg"}
          className="absolute top-0 left-0 translate-x-64 translate-y-52"
          width={120}
          height={120}
          alt="bulb"
        />
      </section>

      <section className="bg-[#1F1F1F] rounded-3xl p-28 relative" id="about">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          src="/about_bg.svg"
          className="absolute left-0 h-[500px] -mt-5"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          src="/about_bg.svg"
          className="absolute right-0 -scale-x-100 h-[500px] -mt-5"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="text-[#585858] font-semibold tracking-widest text-center"
        >
          IMMACULATE
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="flex items-center justify-center"
        >
          <h1 className={`mt-4 text-4xl text-center ${gradientStyle}`}>
            About Us
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="mt-4 text-center leading-7 text-lg text-[#585858]"
        >
          Get everything you need to know about us!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center px-96 mt-10"
        >
          <p className="text-center text-gray-200 leading-8">
            At Ampl AI, we are on a mission to revolutionize the renewable
            energy landscape through our innovative AI-powered peer-to-peer
            (P2P) energy trading platform powered by microgrids. Our vision is
            to democratize access to clean energy by enabling communities and
            businesses to share and optimize energy consumption efficiently.
            With a focus on sustainability, grid compliance, and cutting-edge
            technology, we aim to create a future where clean energy is
            seamlessly integrated into everyday life, empowering individuals to
            make a difference.
          </p>
        </motion.div>
      </section>

      <section className="p-28 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="flex items-center justify-center"
        >
          <h1 className={`mt-4 text-4xl text-center ${gradientStyle}`}>
            Meet Our Founders
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="mt-4 text-center leading-7 text-lg text-[#585858]"
        >
          Ampl AI is driven by a passionate team of innovators who bring diverse{" "}
          <br />
          expertise in artificial intelligence, energy systems, and sustainable
          technology.
        </motion.p>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          src={"/founders.svg"}
          alt="founders"
          width={1041}
          height={440}
          className="my-16"
        />

        <p className="mt-4 text-center leading-7 text-lg text-[#585858]">
          Together, they are committed to transforming energy access and
          sustainability through <br /> Ampl AI’s groundbreaking P2P energy
          trading platform powered by microgrids.
        </p>
      </section>

      <section
        className="bg-[#1F1F1F] rounded-3xl p-28 flex flex-col justify-center items-center"
        id="technology"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="text-[#585858] font-semibold tracking-widest text-center"
        >
          AMPL AI
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className={`mt-4 text-4xl text-center gap-2 ${gradientStyle}`}>
            Technology Overview
          </h1>
          <h2 className="text-2xl text-white mt-2">
            Powering the Future of Energy Trading
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-center leading-7 text-lg text-[#585858]"
        >
          Our AI-powered platform enables peer-to-peer
          <br />
          energy trading with cutting-edge technology
        </motion.p>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          src={"/agents.svg"}
          width={774}
          height={764}
          alt="agents"
          className="mt-16"
        />
      </section>

      <section ref={targetRef} className="bg-black relative h-[300vh]">
        <div className="sticky top-0 bg-[#181818] h-screen  overflow-hidden">
          <div className="mt-32">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-200px", once: true }}
              className="text-[#585858] font-semibold tracking-widest text-center"
            >
              AMPL AI
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-200px", once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <h1
                className={`mt-4 text-4xl text-center gap-2 ${gradientStyle}`}
              >
                Agentic Workflow
              </h1>
            </motion.div>
          </div>
          <div className="flex mt-40 items-center">
            <motion.div
              style={{ x }}
              className="flex items-center justify-center"
            >
              {elements.map((el, index) => (
                <Fragment key={index}>
                  <FlowElement title={el.title} size={el.size} />
                  {index < elements.length - 1 && <Line />}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px", once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-[#1F1F1F] py-28 rounded-3xl flex flex-col items-center"
        id="footer"
      >
        <div className="flex gap-36 justify-center">
          <div className="flex flex-col">
            <p className="text-white font-semibold">Product</p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Dashboard
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Admin
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Energy
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Grid
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Trading
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-white font-semibold">Explore</p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Resources
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Blog
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Documents
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-white font-semibold">Community</p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Community Central
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Support
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Help
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Ny Info
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-white font-semibold">Company</p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              About Us
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Current Partners
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Become Partner
            </p>
            <p className="mt-5 text-gray-400 hover:text-white transition-colors cursor-pointer">
              Become Investor
            </p>
          </div>
        </div>
        <img
          className="mt-7"
          src={"/footer.svg"}
          alt="footer"
          width={246}
          height={150}
        />
      </motion.section>
    </>
  );
}
