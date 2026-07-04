import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const personalInfo = {
  name: "Md Zahid Alam",
  title: "Full Stack MERN Developer | BCA Graduate",
  location: "India",
  email: "your-email@example.com",
  github: "https://github.com/mdzahidalamgehu1",
  linkedin: "https://in.linkedin.com/in/md-zahid-alam-a364862b2",
  resume: "/resume.pdf",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: personalInfo.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: FaEnvelope,
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Bootstrap", icon: FaCss3Alt },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "JWT Authentication", icon: FaNodeJs },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export const projects = [
  {
    title: "StayNext",

    image: "/images/staynext.png",

    github:
      "https://github.com/mdzahidalamgehu1/stayNext",

    live:
      "https://staynext-1-g4rj.onrender.com/",

    description:
      "A production-ready hotel booking platform. It includes secure authentication, image uploads, property management, reviews, authorization, cloud deployment and a responsive user interface.",

    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
      "Passport.js",
    ],

    featured: true,
  },

  {
    title: "Zerodha Clone",

    image: "/images/zerodha.png",

    github:
      "https://github.com/mdzahidalamgehu1/Zerodha-Clone",

    live:
      "https://zerodha-clone-7wef.onrender.com/",

    description:
      "A modern stock trading platform inspired by Zerodha featuring responsive dashboards, authentication flow, portfolio management interface and real-world financial application concepts.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    featured: true,
  },
];

export const achievements = [
  { value: "2+", label: "Full Stack Projects" },
  { value: "500+", label: "Hours of Coding" },
  { value: "MERN", label: "Stack Expertise" },
  { value: "Strong", label: "Problem Solving" },
];