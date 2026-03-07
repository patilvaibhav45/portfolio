document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      document
        .querySelectorAll("nav a")
        .forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".info-section").forEach((section) => {
    sectionObserver.observe(section);
  });

  const name = "Vaibhav Patil";
  document.getElementById("name").textContent = name;
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  const skills = {
    "Languages & Frameworks": [
      "Angular (14+)",
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "Express.js",
      "Java (Basic)",
    ],
    "Database & Tools": [
      "MongoDB",
      "SQL (MySQL)",
      "Nx Monorepo",
      "RxJS & NgRx",
      "Jest",
      "Git & GitHub"
    ],
    "Architecture & Practices": [
      "Microservices Architecture",
      "RESTful APIs",
      "CI/CD Pipelines",
      "CQRS Pattern",
      "Unit Testing",
      "Agile (SCRUM)",
    ],
  };

  const skillsListDiv = document.getElementById("skills-list");
  for (const category in skills) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("skill-category");
    categoryDiv.innerHTML = `<h3>${category}</h3>`;
    const ul = document.createElement("ul");
    skills[category].forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });
    categoryDiv.appendChild(ul);
    skillsListDiv.appendChild(categoryDiv);
  }

  const education = {
    institute: "Institute of Management & Research, Jalgaon",
    degree: "Integrated MCA (Master of Computer Applications)",
    cgpa: "8.50",
    years: "2018-2023",
  };

  document.getElementById("education-section").innerHTML = `
    <p><strong>${education.institute}</strong></p>
    <p>${education.degree}</p>
    <p class="cgpa">CGPA: ${education.cgpa}</p>
    <p>${education.years}</p>
  `;

  const experiences = [
    {
      title: "Software Developer",
      company: "SYN IT Solutions Private Limited, Pune",
      duration: "05/2023 - Present",
      description: [
        "Architected and deployed 'WOP m-ticket', a full-stack ticket booking platform, implementing the CQRS pattern in Node.js/Express to optimize backend scalability.",
        "Spearheaded frontend development using Angular (14+) within a scalable Nx Monorepo, expertly managing complex application state with NgRx and asynchronous data flows via RxJS.",
        "Optimized MongoDB performance by designing efficient schemas, implementing proper indexing strategies, and utilizing Aggregation Pipelines for complex data retrieval.",
        "Translated Figma UI designs into responsive, pixel-perfect web pages and implemented i18n to deliver seamless multi-language support for international users.",
        "Contributed to the 'Blancreme' e-commerce platform by developing dynamic React frontend components and successfully integrating them with PHP backend APIs.",
        "Ensured robust code quality through comprehensive unit testing with Jest, and actively managed CI/CD pipelines to guarantee stable, automated deployments.",
        "Collaborated with cross-functional Agile teams to translate business requirements into technical solutions while enforcing strict coding best practices through peer reviews.",
      ],
    },
  ];

  const experienceSectionDiv = document.getElementById("experience-section");
  experiences.forEach((exp) => {
    const expItem = document.createElement("div");
    expItem.classList.add("experience-item");
    expItem.innerHTML = `
      <h3>${exp.title}</h3>
      <p><strong>${exp.company}</strong></p>
      <p class="duration">${exp.duration}</p>
      <ul>
        ${exp.description.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    experienceSectionDiv.appendChild(expItem);
  });

  const projects = [
    {
      title: "E-commerce Platform Development",
      years: "",
      image:
        "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
      description: [
        "Built a complete e-commerce application with secure login, product listing, cart, and checkout features",
        "Used MEAN stack and modular architecture for scalability",
      ],
    },
    {
      title: "Personal Portfolio Website",
      years: "",
      image:
        "https://c8.alamy.com/comp/2PX4CXK/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-2PX4CXK.jpg",
      description: [
        "Developed a fully responsive personal website with HTML, CSS, JavaScript",
        "Highlighted projects, experience, and technical blog",
      ],
    },
  ];

  const projectsListDiv = document.getElementById("projects-list");
  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-card");
    projectItem.innerHTML = `
      <img src="${project.image}" alt="${project.title} Project Image">
      <div class="project-card-content">
        <h3>${project.title}</h3>
        <p class="project-years">${project.years}</p>
        <ul>
          ${project.description.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
    projectsListDiv.appendChild(projectItem);
  });
});
