import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  const handleOpenResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Vinayak</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Web Developer</motion.h2>
          <motion.p variants={awardVariants}>
            Let's Turn Ideas Into Reality
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.a
              variants={awardVariants}
              href="https://www.linkedin.com/in/vinayak-rao-a3055a248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img variants={awardVariants} src="/award1.png" alt="" />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href="https://github.com/vinu55"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img variants={awardVariants} src="/award2.png" alt="" />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href="https://leetcode.com/u/vinu100/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img variants={awardVariants} src="/award3.png" alt="" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/vinayak-rao-a3055a248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/vinayak-rao-a3055a248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/vinayak-rao-a3055a248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="YouTube" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
          onClick={() => window.open("/certificate.pdf", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <img src="/certificate.png" alt="Design Patent Certificate" />
          Design Patent
          <br />
          Certificate
          <br />
        </motion.div>
        {/* CONTACT BUTTON - Entire Pink Circle is Clickable */}
        <motion.div
          className="contactButton"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          onClick={handleOpenResume} // Clicking anywhere on the circle opens resume
          style={{ cursor: "pointer" }}
        >
          <svg viewBox="0 0 200 200" width="150" height="150">
            <circle cx="100" cy="100" r="90" fill="pink" />
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text className="circleText">
              <textPath href="#innerCirclePath">Hire Now •</textPath>
            </text>
            <text className="circleText">
              <textPath href="#innerCirclePath" startOffset="44%">
                Contact Me •
              </textPath>
            </text>
          </svg>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="bg">
        {/* 3D */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
