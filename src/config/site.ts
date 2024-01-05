import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Pabath Induwara", // shown in the header
  description:
    "My portfolio and blog powered by Notion CMS, built with Next.js, and deployed on Vercel.",
  image: "/images/screenshots/screenshot01.png",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    mail: "pabath2015@gmail.com",
    linkedin: "https://www.linkedin.com/in/pabath-induwara/",
    github: "https://github.com/pabath99",
    twitter: "https://twitter.com/pabath_induwara"
  },
  header: {
    logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [
        { text: "Hey there. I'm " },
        { text: "Pabath Induwara", highlighted: true },
        { text: "." },
      ],
    },
    subtitle:
      "Why did the programmer quit his job? He didn't get arrays!",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "/#projects",
      },
    ],
  },
  about: {
    avatar: "/images/avatar.png",
    title: "I'm a passionate software engineer working from Colombo,Sri Lanka.",
    description: [
      "Software Development Engineer Intern with 8 months experience. Passionate about optimizing operations, enhancing user experiences, and driving innovation. Avid cricket enthusiast and traveler. Seeking Software Engineer role, eager to contribute to innovative projects in distributed systems, Go, and Rust. 🚀💻 .",
    ],
  },
  experience: [
    {
      title: "Software Development Engineer Intern (Full Stack)",
      company: "Perfect Business Solution Services (PBSS)",
      link: "https://www.perfectbss.com/",
      location: "Sri Lanka",
      startDate: "FEB 2023",
      endDate: "OCT 2023",
      description: [
        "Developed a robust customer portal software application to enhance the entry and assessment process for potential distributors by automating eligibility checks and conducting precise credit evaluations. Integrated key features, including credit evaluation, customer management, bank guarantee management, and feedback management, utilizing React.js, NodeJS, MSSQL, and SAP B1.",
        "Recovered and enhanced a crucial lost POS system codebase, implementing vital updates such as automated stock management through GRN processes, improved inventory reporting, and adaptable pricing and discount adjustments. Achieved this by recovering data from multiple hard disks and utilizing React, Redux, and .NET Core using Entity Framework for development, ensuring sustained support and maintaining a valuable client partnership."
      ],
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "REST API",
        "Redux",
        "SAP B1",
        "MSSQL",
        "DevExtreme",
        ".NET Core",
      ],
    },
  ],
  education: [
    {
      school: "Sri Lanka Institute of Information Technology (SLIIT)",
      link: "https://www.sliit.lk/",
      degree: "BSc (Hons) in Information Technology Specialising in Information Technology",
      //fieldOfStudy: "Information Technology",
      description:
        "Coursework: Data Structures and Algorithms, Object Oriented Programming, Software Engineering, Database Systems, Mobile Application Development",
        startDate: "2021",
        endDate: "2024",
    },
    {
      school: "University of Colombo (UOC)",
      link: "https://cmb.ac.lk/websites",
      degree: "BSc (External) in Electronics and Automation Technologies",
      startDate: "2022",
      endDate: "2026",
    },
  ],
  projects: [
    {
      title: "Multi Author Blog",
      image: "/images/projects/project01.png",
      summary:
        "Collaborative platform for diverse voices 📚. Our multi-author blog fosters creativity, knowledge-sharing, and community engagement. Join the conversation! 🌐✨",
      tags:  ["React", "Node", "Express", "MongoDB", "Redux Toolkit", "Material UI"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        github: "https://github.com/pabath99/Multi-Author-Blog",
      },
      createdAt: "2024",
      madeAt: "Personal",
      featured: false,
    },
    {
      title: "A Study of Job Portals' Impact on Female Employment Rates.",
      image: "/images/projects/project01.png",
      summary:
      "Sri Lanka's first women-centric job portal promotes gender equality, empowering women and advancing UN Sustainable Development Goal 5.🌐👩‍💼",
      tags:  ["React", "Node", "Express", "MongoDB", "Material UI"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        github: "https://github.com/pabath99/A-Study-of-a-Job-Portal-s-Impact-on-Female-Employment-Rates",
      },
      createdAt: "2023",
      madeAt: "SLIIT",
      featured: true,
    },
    {
      title: "Foodies' Social Media Platform.",
      image: "/images/projects/project01.png",
      summary:
        "Connect with fellow food enthusiasts on our social media platform! Share, discover, and celebrate culinary adventures together. 🍽️📸",
      tags:  ["React", "Spring Boot", "Redux", "MongoDB", "OAuth 2.0", "Tailwind CSS"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        github: "https://github.com/pabath99/Foodie-Social-Media-Platform",
      },
      createdAt: "2023",
      madeAt: "SLIIT",
      featured: false,
    },
    {
      title: "Garment Factory Management System",
      image: "/images/projects/project02.png",
      summary:
        "Efficient Garment Factory Management System developed for Lakshika Fashion Garments PVT LTD, optimizing operations and enhancing productivity. 🛠️👗",
      tags:  ["React", "Node", "Express", "MongoDB", "Bootstrap"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        github: "https://github.com/pabath99/Garment-Factory-Management-System",
      },
      createdAt: "2022",
      madeAt: "SLIIT",
      featured: true,
    },
    {
      title: "Online-Shoe-Shop",
      image: "/images/projects/project03.png",
      summary:
        "Explore the latest trends and step into style with our Online Shoe Shop. Find the perfect pair that fits your fashion!👟🛍️",
      tags:  ["Android", "Firebase"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        github: "https://github.com/pabath99/Online-Shoe-Shop",
      },
      createdAt: "2022",
      madeAt: "Personal",
      featured: false,
    },
    {
      title: "Inventory Management System",
      image: "/images/projects/project01.png",
      summary:
        "Streamline your business with our Inventory Management System. Optimize stock control, enhance efficiency, and simplify operations seamlessly. 📦🔧",
      tags:  ["React", "Node", "Express", "MongoDB", "Redux Toolkit","Cloudinary"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://inventory-mng.vercel.app/",
        github: "https://github.com/pabath99/Inventory-Management-backend",
      },
      createdAt: "2022",
      madeAt: "Personal",
      featured: true,
    },
  ],
  contact: {
    title: "Get in touch",
    description:
      "Ready to take your projects to the next level? Let's join forces! Feel free to reach out, and let's start a conversation about transforming your concepts into remarkable digital experiences. I'm eager to collaborate and bring your ideas to life on the web.",
    callToAction: {
      label: "Say hello",
      href: "pabath2015@gmail.com",
    },
  },
}
