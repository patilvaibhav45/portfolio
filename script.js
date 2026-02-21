document.addEventListener("DOMContentLoaded", function () {
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

  const info = document.querySelectorAll(".info-section");
  const appearInfo = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll,
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("active");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearInfo);

  info.forEach((fader) => {
    appearOnScroll.observe(fader);
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
      "SQL (MySQL/PostgreSQL)",
      "Nx Monorepo",
      "RxJS & NgRx",
      "Jest",
      "Git & GitHub",
      "GCP (Basics)",
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

  const educationsectionDiv = document.getElementById("education-section");
  educationsectionDiv.innerHTML = `
        <p><strong>${education.institute}</strong></p>
        <p>${education.degree}</p>
        <p class="cgpa">CGPA: ${education.cgpa}</p>
        <p>${education.years}</p>
    `;

  const experiences = [
    {
      title: "Software Developer",
      company: "SYN IT Solutions Private Limited, Pune",
      duration: "5/2023-Present",
      description: [
        "Developed and maintained WOP m-ticket, a full-stack ticket booking platform with customer portal, admin dashboard, and booking management system",
        "Designed and implemented RESTful APIs and microservices, utilizing CQRS patterns to separate command/query responsibilities and optimize full-stack scalability.",
        "Developed and maintained sophisticated web applications using Angular and Nx Monorepo for scalable project structuring, ensuring high performance and responsiveness.",
        " Worked with MongoDB for data storage, writing efficient queries and using aggregation for complex data retrieval",
        "Spearheaded frontend development using Angular (14+), managing complex application state with NgRx State Management and orchestrating asynchronous data flows via RxJS.",
        "Improved application performance by optimizing database queries and implementing proper indexing strategies",
        "Translated UI designs from Figma into responsive, pixel-perfect web pages",
        "Implemented internationalization (i18n) to support multiple languages for global users",
        "Fixed bugs and resolved issues in production code, ensuring system stability",
        "Ensured code quality using testing frameworks (Jest) and supported the optimization of CI/CD pipelines and deployment processes.",
        "Collaborated with stakeholders to translate business requirements into technical solutions, while participating in code reviews to enforce coding best practices.",
        "Contributed to Blancreme e-commerce project, developing React frontend components and integrating with PHP backend APIs ",
        "Gained exposure to PHP backend development while working on API integration and data flow ",
      ],
    },
  ];

  const experiencesectionDiv = document.getElementById("experience-section");
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
    experiencesectionDiv.appendChild(expItem);
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".info-section").forEach((section) => {
    observer.observe(section);
  });
});
