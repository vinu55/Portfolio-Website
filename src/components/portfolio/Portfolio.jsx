import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "E-Commerce Application",
    desc: "This MERN Stack E-Commerce App features JWT authentication, PayPal payments, and Cloudinary for image uploads. Users can shop, manage carts, and track orders, while admins handle inventory via a dashboard. With a REST API, Redux Toolkit, and Tailwind CSS, it ensures a smooth, responsive experience.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Chat App",
    desc: "This Realtime Chat App uses MERN, Socket.io, TailwindCSS, and Daisy UI for instant messaging. It features JWT authentication, real-time chat, and a responsive UI. Built with React.js and Socket.io, it ensures smooth communication. Perfect for beginners to learn real-time web sockets and modern UI design.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "AI Mock Interview ",
    desc: "AI Mock Interview Platform conducts AI-driven interviews, analyzes responses, and provides feedback for skill improvement. Built with Next.js, Clerk, PostgreSQL, and Google Gemini API, it enables speech-to-text conversion, response recording, and AI-generated feedback. With a sleek Tailwind UI and deployment on Vercel, it offers a seamless interview practice experience. ",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Video Interview App",
    desc: "AI-powered video interview platform enables live video calls, screen sharing, and recording, ensuring a seamless and professional interview experience. Built with Next.js & TypeScript, it integrates Stream, Convex, and Clerk for secure authentication and optimized performance. With a modern Tailwind & Shadcn UI, it is designed for smooth remote hiring and assessments.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Gaming application",
    desc: "Built with React.js, and Tailwind CSS this gaming website features a Hero Section, animated titles, dynamic Navbar, and smooth animations. Optimized for performance, it showcases expertise in front-end development and deployment.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
