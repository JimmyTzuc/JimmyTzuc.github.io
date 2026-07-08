export const content = {
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', skills: 'Skills', certifications: 'Certificaciones', notes: 'Notas', downloadCv: 'Download CV' },
    hero: { role: 'Backend Software Engineer', description: 'Siete años construyendo sistemas que escalan. Especializado en Python, Node.js y arquitecturas distribuidas en AWS. De Mérida para el mundo.' },
    about: { label: 'Sobre mí', text: 'Soy Jimmy, ingeniero en sistemas computacionales egresado del Instituto Tecnológico de Mérida. He construido APIs, microservicios y sistemas de producción para empresas como Accenture y Jüsto. Me apasiona la arquitectura limpia, la optimización de bases de datos y el trabajo bien hecho.', stats: [{ value: '7+', label: 'años de experiencia' }, { value: '7', label: 'empresas' }, { value: '10+', label: 'tecnologías' }] },
    notes: { label: 'Notas técnicas', description: 'Apuntes sobre backend, bases de datos, arquitectura y herramientas que uso día a día.', empty: 'Próximamente.' },
    experience: {
      label: 'Experiencia',
      jobs: [
        { company: 'Accenture', role: 'Software Engineer', period: 'Jun 2024 — Presente', current: true, bullets: ['Herramientas de automatización en Python para eficiencia operacional backend.', 'Diagnóstico y resolución de incidentes en producción con SQL y PL/SQL en Oracle.', 'Integración de sistemas backend con REST APIs y bases de datos internas.'], stack: ['Python', 'Oracle', 'PL/SQL', 'REST APIs'] },
        { company: 'Jüsto', role: 'Backend Developer', period: 'Abr 2023 — Ene 2024', current: false, bullets: ['Microservicios con Python y Node.js en arquitectura BFF.', 'Optimización de resolvers GraphQL y modelos Django.', 'Integración con API Gateway y service mesh.'], stack: ['Python', 'Django', 'Node.js', 'TypeScript', 'GraphQL'] },
        { company: 'Worky', role: 'Backend Developer', period: 'Ago 2022 — Abr 2023', current: false, bullets: ['REST APIs escalables con Python.', 'Optimización de PostgreSQL con query tuning e indexing.', 'Arquitectura, deployment y debugging en producción.'], stack: ['Python', 'PostgreSQL', 'REST API'] },
        { company: 'Hiumanlab', role: 'Backend Developer', period: 'Abr 2022 — Ago 2022', current: false, bullets: ['REST APIs con Django y Django REST Framework.', 'Contenedores Docker para automatización de workflows.', 'Infraestructura backend en AWS.'], stack: ['Django', 'DRF', 'Docker', 'AWS'] },
        { company: 'Delta Gas', period: 'Jul 2020 — Mar 2022', current: false, roles: [
            { role: 'Oracle APEX & PL/SQL Developer', period: 'Jun 2021 — Mar 2022', bullets: ['REST APIs con Oracle REST Data Services (ORDS).', 'Módulos backend con Oracle APEX, PL/SQL y JavaScript.', 'Lógica de base de datos para ventas, distribución y facturación.'], stack: ['Oracle APEX', 'PL/SQL', 'ORDS', 'JavaScript'] },
            { role: 'Software Engineer', period: 'Jul 2020 — Ago 2021', bullets: ['REST y GraphQL APIs con Django, DRF y Graphene.', 'Infraestructura AWS: EC2, S3 y Amazon RDS.', 'Pipelines CI/CD con GitLab.'], stack: ['Django', 'GraphQL', 'AWS', 'GitLab CI/CD'] },
          ] },
        { company: 'Perseus Operador Mayorista', role: 'Web Developer', period: 'May 2019 — Dic 2019', current: false, bullets: ['Sistemas backend con PHP y Laravel.', 'Integración de APIs externas y pasarelas de pago.', 'Deployments cloud en DigitalOcean.'], stack: ['PHP', 'Laravel', 'DigitalOcean'] },
        { company: 'Rodai', role: 'Intern Backend Developer', period: 'Nov 2018 — Feb 2019', current: false, bullets: ['REST APIs con Django REST Framework.', 'Features de geolocalización backend con Python.'], stack: ['Django', 'DRF', 'Python'] },
      ]
    },
    skills: {
      label: 'Skills',
      categories: [
        { name: 'Lenguajes', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'PL/SQL'] },
        { name: 'Frameworks', items: ['Django', 'FastAPI', 'Flask', 'NestJS', 'Express', 'Laravel'] },
        { name: 'Bases de datos', items: ['PostgreSQL', 'Oracle', 'MySQL', 'Redis', 'Amazon RDS'] },
        { name: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'RDS', 'Docker', 'GitLab CI/CD', 'Linux'] },
        { name: 'APIs & Integración', items: ['REST APIs', 'GraphQL', 'API Gateway', 'SOAP', 'Webhooks'] },
        { name: 'Arquitectura', items: ['Microservices', 'Monolith', 'BFF', 'REST Design'] },
      ]
    },
    certifications: {
      label: 'Certificaciones',
      note: '* Certificaciones sujetas a actualización.',
      items: [
        { title: 'Ing. en Sistemas Computacionales', issuer: 'Instituto Tecnológico de Mérida', year: '2013–2019' },
        { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
        { title: 'Oracle APEX Developer', issuer: 'Oracle', year: '2022' },
        { title: 'Python para Ciencia de Datos', issuer: 'Coursera / IBM', year: '2021' },
      ]
    },
    cv: { heading: 'Currículum Vitae', subheading: 'Backend Software Engineer · Mérida, Yucatán · PDF', download: 'Download CV' },
    footer: { made: 'Hecho con cuidado en Mérida, Yucatán.' },
  },
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', certifications: 'Certifications', notes: 'Notes', downloadCv: 'Download CV' },
    hero: { role: 'Backend Software Engineer', description: 'Seven years building systems that scale. Specialized in Python, Node.js and distributed architectures on AWS. From Mérida to the world.' },
    about: { label: 'About', text: "I'm Jimmy, a computer systems engineer from Instituto Tecnológico de Mérida. I've built APIs, microservices, and production systems for companies like Accenture and Jüsto. I'm passionate about clean architecture, database optimization, and work done right.", stats: [{ value: '7+', label: 'years of experience' }, { value: '7', label: 'companies' }, { value: '10+', label: 'technologies' }] },
    notes: { label: 'Tech Notes', description: 'Notes on backend, databases, architecture, and tools I use day to day.', empty: 'Coming soon.' },
    experience: {
      label: 'Experience',
      jobs: [
        { company: 'Accenture', role: 'Software Engineer', period: 'Jun 2024 — Present', current: true, bullets: ['Python automation tools for backend operational efficiency.', 'SQL and PL/SQL queries to diagnose and resolve production incidents in Oracle.', 'Integration of backend systems with REST APIs and internal databases.'], stack: ['Python', 'Oracle', 'PL/SQL', 'REST APIs'] },
        { company: 'Jüsto', role: 'Backend Developer', period: 'Apr 2023 — Jan 2024', current: false, bullets: ['Microservices with Python and Node.js in a BFF architecture.', 'Optimized GraphQL resolvers and Django models for performance.', 'Service integration via API Gateway and service mesh.'], stack: ['Python', 'Django', 'Node.js', 'TypeScript', 'GraphQL'] },
        { company: 'Worky', role: 'Backend Developer', period: 'Aug 2022 — Apr 2023', current: false, bullets: ['Scalable REST APIs with Python.', 'PostgreSQL performance optimization via query tuning and indexing.', 'Architecture, deployment, and production debugging.'], stack: ['Python', 'PostgreSQL', 'REST API'] },
        { company: 'Hiumanlab', role: 'Backend Developer', period: 'Apr 2022 — Aug 2022', current: false, bullets: ['REST APIs with Django and Django REST Framework.', 'Docker containers to automate backend workflows.', 'AWS-based backend infrastructure.'], stack: ['Django', 'DRF', 'Docker', 'AWS'] },
        { company: 'Delta Gas', period: 'Jul 2020 — Mar 2022', current: false, roles: [
            { role: 'Oracle APEX & PL/SQL Developer', period: 'Jun 2021 — Mar 2022', bullets: ['REST APIs with Oracle REST Data Services (ORDS).', 'Backend modules with Oracle APEX, PL/SQL and JavaScript.', 'Database logic for sales, distribution, and invoicing.'], stack: ['Oracle APEX', 'PL/SQL', 'ORDS', 'JavaScript'] },
            { role: 'Software Engineer', period: 'Jul 2020 — Aug 2021', bullets: ['REST and GraphQL APIs with Django, DRF and Graphene.', 'AWS infrastructure: EC2, S3, and Amazon RDS.', 'CI/CD pipelines with GitLab.'], stack: ['Django', 'GraphQL', 'AWS', 'GitLab CI/CD'] },
          ] },
        { company: 'Perseus Operador Mayorista', role: 'Web Developer', period: 'May 2019 — Dec 2019', current: false, bullets: ['Backend systems with PHP and Laravel.', 'External API and payment gateway integrations.', 'Cloud deployments on DigitalOcean.'], stack: ['PHP', 'Laravel', 'DigitalOcean'] },
        { company: 'Rodai', role: 'Intern Backend Developer', period: 'Nov 2018 — Feb 2019', current: false, bullets: ['REST APIs with Django REST Framework.', 'Backend geolocation features with Python.'], stack: ['Django', 'DRF', 'Python'] },
      ]
    },
    skills: {
      label: 'Skills',
      categories: [
        { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'PL/SQL'] },
        { name: 'Frameworks', items: ['Django', 'FastAPI', 'Flask', 'NestJS', 'Express', 'Laravel'] },
        { name: 'Databases', items: ['PostgreSQL', 'Oracle', 'MySQL', 'Redis', 'Amazon RDS'] },
        { name: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'RDS', 'Docker', 'GitLab CI/CD', 'Linux'] },
        { name: 'APIs & Integration', items: ['REST APIs', 'GraphQL', 'API Gateway', 'SOAP', 'Webhooks'] },
        { name: 'Architecture', items: ['Microservices', 'Monolith', 'BFF', 'REST Design'] },
      ]
    },
    certifications: {
      label: 'Certifications',
      note: '* Certifications may be updated.',
      items: [
        { title: 'B.Sc. Computer Systems Engineering', issuer: 'Instituto Tecnológico de Mérida', year: '2013–2019' },
        { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
        { title: 'Oracle APEX Developer', issuer: 'Oracle', year: '2022' },
        { title: 'Python for Data Science', issuer: 'Coursera / IBM', year: '2021' },
      ]
    },
    cv: { heading: 'Curriculum Vitae', subheading: 'Backend Software Engineer · Mérida, Yucatán · PDF', download: 'Download CV' },
    footer: { made: 'Crafted with care in Mérida, Yucatán.' },
  }
}
