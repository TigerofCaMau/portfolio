import travelWebsite from '../assets/projects/travel-website.png';
import digitalnomadhub from '../assets/projects/digitalnomadhub.png';
import findMySafeHaven from '../assets/projects/findmysafehaven.png';

export const HERO_CONTENT = `
  I am a dedicated frontend developer with a strong passion for building dynamic, scalable, and user-friendly web applications. With expertise in modern frontend technologies such as React and Next.js, I continuously refine my skills and stay updated with industry advancements to deliver high-quality solutions.

  My goal is to leverage my technical proficiency and creative problem-solving abilities to craft innovative solutions that drive business growth while providing exceptional user experiences.
`;

export const ABOUT_TEXT = `
  I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, and Tailwind. 

  My journey into web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
`;

export const EXPERIENCE = [
  {
    id: 1,
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `
      Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.
      `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    id: 2,
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `
      Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.
      `,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    id: 3,
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `
      Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.
      `,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    id: 4,
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `
      Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.
      `,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Travel Website",
    image: travelWebsite,
    url: "https://firstclasstravels.netlify.app",
    description:
      "A fully functional travel website offering destination guides, booking services, personalized itineraries, user reviews, and travel tips for seamless trip planning worldwide.",
    technologies: ["JavaScript", "React", "Tailwind"],
  },
  {
    id: 2,
    title: "Digital Business Website",
    image: digitalnomadhub,
    url: "https://digitalnomadhub.netlify.app",
    description:
      "A dynamic business website providing early-stage founders with funding, growth insights, expert guidance, and flexible capital to accelerate startup success.",
    technologies: ["JavaScript", "React"],
  },
  {
    id: 3,
    title: "Real Estate Website",
    image: findMySafeHaven,
    url: "https://findmysafehaven.netlify.app/",
    description:
      "A real estate website showcasing properties for sale or rent, featuring detailed listings, virtual tours, and investment opportunities.",
    technologies: ["JavaScript", "React", "Tailwind"],
  }
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "nghiacn1986@gmail.com",
};
