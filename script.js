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
      "Angular (18+)",
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Bootstrap",
    ],
    "Database & Tools": [
      "MongoDB (Aggregation Pipelines, Indexing)",
      "SQL",
      "Nx Monorepo",
      "RxJS & NgRx",
      "Jest",
      "Git & GitHub",
      "Docker",
    ],
    "Architecture & Practices": [
      "RESTful API Design",
      "JWT/OAuth Authentication",
      "CI/CD Pipelines",
      "CQRS Pattern",
      "Unit Testing",
      "Agile/Scrum",
    ],
    "Currently Learning": ["AI/ML Engineering Skills"],
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
      title: "Software Engineer",
      company: "SYN IT Solutions Private Limited, Pune", // [cite: 56]
      duration: "May 2023 - Present",
      description: [
        "Built RESTful APIs using Node.js and Express.js, implementing JWT authentication to secure endpoints and user sessions.",
        "Structured the backend using the CQRS pattern to separate command and query responsibilities for the WOP m-ticket platform.",
        "Reduced MongoDB data load times by approximately 25% by writing Aggregation Pipelines and applying strategic database indexing.",
        "Replaced RxJS observables with Angular Signals (using computed, effect, and toSignal) in components to manage local state.",
        "Currently converting traditional Angular reactive forms into Signal-based forms to simplify form state handling.",
        "Improved frontend performance within the Nx monorepo using lazy loading, route-level code splitting, and OnPush change detection.",
        "Managed global application state using NgRx and built responsive UIs from Figma designs, including i18n for multi-language support.",
        "Maintained CI/CD pipelines using Docker, tracked versions with Git, and wrote unit tests using Jest.",
        "Developed user-facing frontend components using React for the Blancreme E-commerce interface.",
        "Managed data flow between the React frontend and a PHP backend, using SQL to query product and order data.",
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
      link: "https://github.com/patilvaibhav45/angular-node-ecommerce-app",
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
      link: "https://patilvaibhav45.github.io/portfolio/",
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
      <a href="${project.link}" target="_blank">
        <img src="${project.image}" alt="${project.title} Project Image">
      </a>
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
