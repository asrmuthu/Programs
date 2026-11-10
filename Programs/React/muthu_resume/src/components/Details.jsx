import React from 'react'

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            'React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3',
            'React Hooks', 'React Router', 'Context API', 'Redux', 'Redux Toolkit',
            'Redux Thunk/Saga', 'TanStack React Query', 'Material UI', 'Ant Design',
            'Bootstrap', 'Tailwind', 'Figma',
        ],
    },
    {
        title: 'Architecture & Performance',
        skills: [
            'Frontend Architecture', 'Micro Frontend', 'Webpack Module Federation',
            'NX', 'Design Patterns', 'SSR', 'CSR', 'SPA', 'SaaS', 'A11y',
            'WCAG 2.1', 'CMS', 'Code Splitting', 'Lazy Loading', 'Tree Shaking',
            'React Profiler', 'Lighthouse', 'SEO', 'Core Web Vitals',
        ],
    },
    {
        title: 'Testing, APIs & Security',
        skills: [
            'Jest', 'React Testing Library', 'Playwright', 'TDD', 'REST APIs',
            'GraphQL', 'Axios', 'Fetch API', 'JSON', 'Swagger UI', 'Postman',
            'Authentication', 'Authorization', 'OAuth 2.0', 'OIDC', 'SSO', 'JWT',
            'OWASP', 'XSS', 'CSRF', 'CSP',
        ],
    },
    {
        title: 'Build Tools, DevOps & Cloud',
        skills: [
            'Webpack', 'Vite', 'Babel', 'NPM', 'Yarn', 'PnPm', 'Version Control',
            'Git', 'GitHub', 'Bitbucket', 'GitHub Actions', 'Jenkins',
            'Azure DevOps', 'Harness', 'Docker', 'SonarQube', 'CI/CD Pipeline',
            'GCP', 'AWS (EC2, S3, Lambda)',
        ],
    },
    {
        title: 'Development Practices & AI',
        skills: ['Agile', 'Scrum', 'JIRA', 'GitHub Copilot', 'Claude AI', 'Gemini Pro'],
    },
]

const achievements = [
    { value: '15+', label: 'Enterprise-grade web applications delivered' },
    {
        value: '5+',
        label: 'Frontend engineers led and mentored through code reviews, best practices, and on-time delivery',
    },
    { value: '2025', label: 'Star Performer Award · Wells Fargo' },
]

const experience = [
    {
        company: 'Sparsh Communications',
        location: 'Hyderabad',
        role: 'Tech Lead',
        dates: 'Jul 2026 – Present',
        highlights: [
            'Led the transformation of a legacy .NET Windows application into a responsive React web application and integrated an AI chatbot to enhance ERP user interactions.',
            'Gathered and analyzed client requirements to ensure alignment with business objectives and end-user needs.',
            'Spearheaded project implementation from scratch, enforcing agile practices and quality standards across development.',
            'Collaborated with cross-functional teams to deliver a scalable React web application with advanced AI capabilities.',
        ],
        stack: 'React 18, JavaScript, TypeScript, Micro Frontend',
    },
    {
        company: 'Synechron',
        location: 'Bangalore',
        role: 'React Lead',
        dates: 'Jul 2025 – Jul 2026',
        highlights: [
            'Led the end-to-end development and technical roadmap execution of a compliance automation platform covering 300+ applications and 10+ regulatory controls.',
            'Architected Micro Frontend solutions and developed enterprise user interfaces for streamlined compliance workflows.',
            'Mentored 5+ junior engineers, enforcing structured code reviews that significantly decreased post-release defects and elevated overall code quality.',
            'Recognized with the Star Performer Award (2025) for exceptional leadership, technical excellence, and significant contributions to the successful development of the Compliance Automation Platform.',
        ],
        stack: 'React 18, JavaScript, TypeScript, Redux, Micro Frontend, Frontend Architecture, Team Management',
    },
    {
        company: 'Persistent Systems',
        location: 'Bangalore',
        role: 'Technical Lead',
        dates: 'Jun 2024 – Jul 2025',
        highlights: [
            'Managed the migration of 5+ legacy applications to React 18, boosting application performance and maintainability.',
            'Architected a Micro Frontend solution using Webpack Module Federation to enable modular and scalable applications.',
            'Reduced bundle size by implementing code splitting, lazy loading, and advanced performance optimization techniques; ensured cross-browser compatibility and performed end-to-end testing.',
            'Achieved 85% unit test coverage using Jest and React Testing Library, significantly minimizing production defects and enhancing code reliability.',
        ],
        stack: 'React.js, TypeScript, Redux, Ant Design, Jest, Webpack 5 Module Federation',
    },
    {
        company: 'TNQ Technologies',
        location: 'Chennai',
        role: 'Senior Software Engineer',
        dates: 'May 2022 – Jun 2024',
        highlights: [
            'Created custom React hooks and optimized the API caching layer, decreasing server round trips and boosting frontend data loading performance.',
            'Coordinated release planning by aligning cross-functional teams, achieving 90% on-time delivery.',
            'Planned and implemented a centralized state management system, improving data consistency and developer productivity.',
        ],
        stack: 'React.js, TypeScript, Redux, React Router, RESTful API, SQL, Styled Components',
    },
    {
        company: 'Strive Technologies',
        location: 'Chennai',
        role: 'Senior Programmer',
        dates: 'Jun 2019 – May 2022',
        highlights: [
            'Engineered a reusable library of 5+ high-quality React components to accelerate development and ensure consistency.',
            'Integrated 10+ REST APIs to enable seamless data flow, improving operational accuracy.',
            'Reduced manual operational bottlenecks, streamlining end-user workflows and boosting productivity by 20%.',
        ],
        stack: 'React.js, JavaScript, React Hooks, Context API, MUI, REST APIs',
    },
    {
        company: 'RR Donnelley',
        location: 'Chennai',
        role: 'Software Engineer',
        dates: 'Dec 2017 – Jun 2019',
        highlights: [
            'Provided production support, timely resolution of live issues, and proactive incident management.',
            'Troubleshot and resolved complex frontend issues, improving application stability and user experience.',
            'Owned features from design through production deployment and post-release support.',
        ],
        stack: 'React.js, JavaScript, HTML5, CSS3, Bootstrap',
    },
]

const projects = [
    {
        title: 'Runway Application',
        client: 'AIMS 360',
        description: [
            'Converted a .NET Windows application into a React web application for AIMS 360, modernizing the ERP platform.',
            'Incorporated an AI chatbot to enhance user interactions and support workflows.',
            'Conducted requirement gathering and implemented Microsoft authentication to secure user access.',
        ],
    },
    {
        title: 'Compliance Workload Management',
        client: 'Wells Fargo',
        description: [
            'Designed and delivered a Compliance Workload Management system, improving oversight and adherence to regulatory compliance standards.',
            'Streamlined user submissions with an intuitive form for application owners to report compliance status and upload supporting evidence.',
            'Engineered workflows for aligned and non-aligned applications, optimizing review and remediation cycles.',
            'Partnered with control operators and reviewers to define guidelines for evidence submission and compliance verification.',
        ],
    },
    {
        title: 'AI-Powered Internal Assistant',
        client: 'Synchrony Bank',
        description: [
            'Built an AI-powered internal assistant, enhancing audit and compliance workflows to boost operational efficiency.',
            'Integrated AWS Bedrock to enable seamless interaction with advanced large language models.',
            'Collaborated with stakeholders to refine requirements and align with strategic organizational goals.',
        ],
    },
    {
        title: 'QBSE',
        client: 'Intuit',
        description: [
            'Developed features and product enhancements for the QBSE platform using React 18, improving functionality, performance, and user experience.',
            'Built reusable frontend components and intuitive interfaces that improved usability, accessibility, and user satisfaction.',
            'Established centralized state management and integrated API solutions to improve data handling and application reliability.',
        ],
    },
]

const websites = [
    { title: 'Chatbot', url: 'https://aspire-ai-chatbot.web.app/' },
    { title: 'QR Code Generator', url: 'https://qrcode-genrate.web.app/' },
    { title: 'Weather', url: 'https://weather-allcity.web.app/' },
    { title: 'BMI Calculator', url: 'https://bmi-calcul.web.app/' },
    { title: 'Currency Converter', url: 'https://currency-convert-all.web.app/' },
    { title: 'Bhive Workspace App', url: 'https://bhiveworkspace-muthupandi.web.app/' },
]

const certifications = [
    'Advanced React: Design Systems, Design Patterns, and Performance',
    "Micro Frontends with React: A Complete Developer's Guide",
    'Complete Agentic AI Bootcamp with LangGraph and LangChain',
]

const domains = [
    'Banking', 'Financial Services', 'FinTech', 'Cyber Security',
    'Publishing', 'Insurance', 'ERP',
]

const Details = () => (
    <main className="details">
        <section className="intro-section" id="overview">
            <p className="intro-copy">
                Frontend Engineering Lead with 9+ years of experience designing, architecting, and delivering
                scalable enterprise web applications using React.js, TypeScript, and JavaScript. Proven expertise
                in Micro Frontend architecture, frontend system design, performance optimization, CI/CD automation,
                and leading the end-to-end delivery of high-impact products in regulated enterprise environments.
                Strong track record of building reusable, maintainable, and high-performance frontend solutions
                that enhance operational efficiency, user experience, and regulatory compliance. Passionate about
                continuously learning and applying emerging AI technologies, backend services, and modern cloud platforms.
            </p>
            <a className="text-link" href="https://aspire-ai-chatbot.web.app/" target="_blank" rel="noreferrer">
                Created my own AI chatbot — explore it <span aria-hidden="true">↗</span>
            </a>
        </section>

        <section className="content-section" id="highlights">
            <div className="section-heading">
                <p className="eyebrow">IMPACT</p>
                <h2>Key achievements</h2>
            </div>
            <div className="achievement-grid">
                {achievements.map(({ value, label }) => (
                    <article className="achievement-card" key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                    </article>
                ))}
            </div>
            <p className="award-note">
                Recognized for outstanding project contributions at Wells Fargo.
            </p>
        </section>

        <section className="content-section" id="experience">
            <div className="section-heading">
                <p className="eyebrow">CAREER</p>
                <h2>Work experience</h2>
                <p>Leading teams and delivering reliable products across complex enterprise environments.</p>
            </div>
            <div className="experience-list">
                {experience.map((job) => (
                    <article className="experience-item" key={`${job.company}-${job.dates}`}>
                        <div className="experience-meta">
                            <span className="timeline-dot" aria-hidden="true" />
                            <p>{job.dates}</p>
                        </div>
                        <div className="experience-card">
                            <div className="job-heading">
                                <div>
                                    <h3>{job.company}</h3>
                                    <p className="job-location">{job.location}</p>
                                </div>
                                <span className="role-pill">{job.role}</span>
                            </div>
                            <ul className="detail-list">
                                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                            </ul>
                            <p className="tech-stack"><strong>Tech stack</strong>{job.stack}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>

        <section className="content-section" id="projects">
            <div className="section-heading">
                <p className="eyebrow">SELECTED WORK</p>
                <h2>Projects</h2>
                <p>Products and platforms built to solve meaningful business challenges.</p>
            </div>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <article className="project-card" key={project.title}>
                        <span className="project-number">0{index + 1}</span>
                        <p className="project-client">{project.client}</p>
                        <h3>{project.title}</h3>
                        <ul className="detail-list">
                            {project.description.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
        </section>

        <section className="content-section" id="skills">
            <div className="section-heading">
                <p className="eyebrow">TOOLKIT</p>
                <h2>Skills & expertise</h2>
            </div>
            <div className="skills-grid">
                {skillGroups.map(({ title, skills }) => (
                    <article className="skill-category" key={title}>
                        <h3>{title}</h3>
                        <ul>
                            {skills.map((skill) => <li key={skill}>{skill}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
        </section>

        <section className="content-section" id="websites">
            <div className="section-heading">
                <p className="eyebrow">PERSONAL WORK</p>
                <h2>Websites & applications</h2>
                <p>A few more projects and products I’ve built.</p>
            </div>
            <div className="website-grid">
                {websites.map(({ title, url }, index) => (
                    <a className="website-link-card" href={url} key={url} target="_blank" rel="noreferrer">
                        <span className="website-link-number">0{index + 1}</span>
                        <span className="website-link-title">{title}</span>
                        <span className="website-link-arrow" aria-hidden="true">↗</span>
                    </a>
                ))}
            </div>
        </section>

        <section className="content-section" id="more">
            <div className="section-heading">
                <p className="eyebrow">MORE ABOUT ME</p>
                <h2>Learning, industries & education</h2>
            </div>
            <div className="more-grid">
                <article className="info-card">
                    <h3>Certifications</h3>
                    <ul className="detail-list">
                        {certifications.map((certification) => <li key={certification}>{certification}</li>)}
                    </ul>
                </article>
                <article className="info-card">
                    <h3>Domain expertise</h3>
                    <ul className="domain-list">
                        {domains.map((domain) => <li key={domain}>{domain}</li>)}
                    </ul>
                </article>
                <article className="info-card education-card">
                    <h3>Education</h3>
                    <p className="education-degree">Bachelor of Technology</p>
                    <p>Information Technology</p>
                    <p>Anna University, Trichy</p>
                    <span>Graduated 2017</span>
                </article>
            </div>
        </section>

        <footer className="page-footer">
            <p>Thanks for stopping by.</p>
            <a href="#overview">Back to top ↑</a>
        </footer>
    </main>
)

export default Details
