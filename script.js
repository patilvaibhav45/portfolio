document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelectorAll('nav a').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    const name = "Vaibhav Patil";
    document.getElementById('name').textContent = name;
    document.getElementById('current-year').textContent = new Date().getFullYear();

    const skills = {
        "Languages & Frameworks": ["Angular", "Node.js", "Express.js", "JavaScript", "HTML", "CSS"],
        "Database & Tools": ["MongoDB", "RxJS", "NgRx", "Jest", "Git", "GitHub"],
        "Dev Practices": ["REST APIs", "Unit Testing", "i18n", "Agile (SCRUM)"],
    };

    const skillsListDiv = document.getElementById('skills-list');
    for (const category in skills) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skill-category');
        categoryDiv.innerHTML = `<h3>${category}</h3>`;
        const ul = document.createElement('ul');
        skills[category].forEach(skill => {
            const li = document.createElement('li');
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
        years: "2018-2023"
    };

    const educationDetailsDiv = document.getElementById('education-details');
    educationDetailsDiv.innerHTML = `
        <p><strong>${education.institute}</strong></p>
        <p>${education.degree}</p>
        <p class="cgpa">CGPA: ${education.cgpa}</p>
        <p>${education.years}</p>
    `;

    const experiences = [
        {
            title: "Software Developer",
            company: "SynIT Solutions Private Limited., Pune",
            duration: "5/2023-Present",
            description: [
                "Developed a ticket booking platform including customer-facing site, admin dashboard, and booking application",
                "Built reusable Angular components and managed code using Nx monorepo architecture",
                "Integrated REST APIs and implemented event-driven backend routes for seamless communication and modularity",
                "Leveraged RxJS and NgRx for robust asynchronous data handling and application state management",
                "Created i18n multi-language support to improve global user reach",
                "Wrote efficient MongoDB queries and optimized backend endpoints for performance",
                "Translated UI designs from Figma into responsive, pixel-perfect layouts",
                "Diagnosed and resolved complex bugs and issues in existing production code",
                "Conducted unit testing using Jest to ensure code reliability",
                "Maintained high code quality by enforcing ESLint rules and clean architecture practices",
                "Developed static site using 11ty and Nunjucks for marketing presence",
                "Participated in daily SCRUM, sprint planning, and retrospectives in Agile teams"
            ]
        }
    ];

    const experienceDetailsDiv = document.getElementById('experience-details');
    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');
        expItem.innerHTML = `
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong></p>
            <p class="duration">${exp.duration}</p>
            <ul>
                ${exp.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        experienceDetailsDiv.appendChild(expItem);
    });

    const projects = [
        {
            title: "E-commerce Platform Development",
            years: "",
            image: "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
            description: [
                "Built a complete e-commerce application with secure login, product listing, cart, and checkout features",
                "Used MEAN stack and modular architecture for scalability"
            ]
        },
        {
            title: "Personal Portfolio Website",
            years: "",
            image: "https://c8.alamy.com/comp/2PX4CXK/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-2PX4CXK.jpg",
            description: [
                "Developed a fully responsive personal website with HTML, CSS, JavaScript",
                "Highlighted projects, experience, and technical blog"
            ]
        }
    ];

    const projectsListDiv = document.getElementById('projects-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-card');
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title} Project Image">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p class="project-years">${project.years}</p>
                <ul>
                    ${project.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        projectsListDiv.appendChild(projectItem);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
});