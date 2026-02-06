export interface JobContentType {
  bullets: Array<string>
  title: string
  technologies: Array<string>
  primer: string
  name: string
  current?: boolean
  tagline?: string
}

interface ResumeType {
  companies: {
    [key: string]: JobContentType
  }
}

const resume: ResumeType = {
  companies: {
    pacificHealth: {
      name: 'Pacific Health',
      title: 'Senior Software Engineer',
      tagline: 'Irvine',
      current: true,
      primer: 'Led the architectural and technical design as a two-engineer team, launching a tier one complex scheduling product from conception to production, now serving 17,000+ monthly users on a Rust, GraphQL, and React stack.',
      bullets: [
        '● Led the architectural and technical design as a two-engineer team, launching a tier one complex scheduling product from conception to production, now serving 17,000+ monthly users on a Rust, GraphQL, and React stack.',
        '● Contributed to a metadata-driven backend framework (YAML/CSV → Rust/SQL/GraphQL codegen), where schemas, CTE-based queries, and seed SQL are generated from declarative configs—dramatically accelerating schema evolution and reducing boilerplate.',
        '● Designed, built, and shipped a fullstack scheduling platform in 9 months that handles tens of thousands of schedules, supports role-based access control, and reduces operational workflow times by 80%+.',
        '● Architected and shipped a Rust based sync service using procedural macros and a custom semantic-matching DSL to map complex FHIR-like MongoDB documents to normalized SQL tables—safely syncing 100k+ documents into PostgreSQL via Kafka consumers and direct DB pipelines to establish a single source of truth.',
        '● Built a reusable GraphQL filter engine used across the scheduler that composes nested filters, sorting, and pagination into type-safe JSON structures eliminating repetitive query wiring and enabling performant and highly composable filtering on the frontend.',
        '● Collaborating with the security team to implement a full-stack OIDC/PKCE authentication flow in Rust and TypeScript to strengthen platform security and user authorization.',
        '● Providing guidance on Jira points estimations and React best practices on the development team.',
        '● Replaced Redux with a Jotai + Apollo state architecture, enabling complex UI interactions, reducing global state complexity, and significantly increasing team development velocity and code quality/readability.',
        '● Designed and built advanced scheduling UX features such as drag-and-drop personnel assignment, calendar filtering, time-range conflict checks, and role-aware views surfacing availability constraints directly in the calendar experience.',
        '● Provided technical leadership across the stack by owning key architectural decisions, reviewing Rust/TypeScript changes, helping estimate and break down Jira work, and coaching teammates on Frontend performance, GraphQL patterns, and backend best practices.',
        '● Drove enterprise-wide data access improvements by presenting architectural diagrams that exposed data integrity issues to an architecture council, enabling cross-team alignment and adoption.',
        '● Driving database architecture and schema design for a new healthcare billing product, defining ERDs and data models to represent complex fee structures and regulatory constraints while guiding cross-team technical decisions.',
      ],
      technologies: [
        'Rust',
        'React',
        'PostgreSQL',
        'TypeScript',
        'GraphQL',
        'Kafka',
        'MongoDB',
        'Jotai',
        'Apollo'
      ],
    },
    persistentTechnologies: {
      name: 'Persistent Technologies',
      title: 'Senior Software Engineer',
      tagline: 'Remote',
      current: false,
      primer: 'Designing features, guiding technological choices and leading a team of engineers to execute on various AI healthcare products.',
      bullets: [
        '● Designing features, guiding technological choices and leading a team of engineers to execute on various AI healthcare products.',
        '● Decomposing products into roadmaps and manageable tasks using Linear (now Jira) and assigning tickets to the engineering team.',
        '● Leveraging Git and Github for version control and contributing to pull request reviews, increasing team code quality.',
        '● Designed and deployed Retrieval-Augmented Generation (RAG) systems with vector databases, prompt tuning, and document grounding to power domain-specific AI assistants',
        '● Designing intuitive frontends using Streamlit and React for multiple AI proof of concepts and business proposal applications.',
        '● Contributing to the design and execution of AI products leveraging RAG and AI models like Llama-3, OpenAI GPT\'s, and Gemini.',
        '● Implemented document ingestion pipelines that extract and structure data from PDFs, CSVs, and unstructured sources, transforming them into embeddings for semantic search and LLM fine-tuning.',
        '● Utilizing Azure AI services to create resource groups and develop endpoints for connecting to various AI providers.',
      ],
      technologies: [
        'TypeScript',
        'React',
        'Python',
        'Flask',
        'TailwindCSS',
        'Databricks',
        'Azure',
        'Streamlit'
      ],
    },
    complyAI: {
      name: 'ComplyAI',
      title: 'Lead Frontend Engineer',
      current: false,
      primer: 'As the sole Frontend Engineer, I am responsible for designing, strategizing, and constructing the frontend codebase and user pathways. I also add endpoints, resources and other necessities in the backend using Python and Flask :)',
      bullets: [
        '● Inheriting the frontend codebase (React, Vite, GraphQL, Apollo, styled-components), debugging, planning, designing and building features.',
        '● Designing and building a state management solution leveraging Zustand, hooks, and tanstack-query.',
        '● As the sole Frontend Engineer, I am responsible for crafting, strategizing, and constructing the frontend codebase and user pathways as well as connecting frontend and backend.',
        '● Acting as product and working with the team to develop application requirements and features.',
        '● Building backend GraphQL resolvers in TypeScript.',
        '● Designing and implementing authn/authz flows leveraging Auth0, in React, Python and building out an RBAC system according to OWASP best practices.',
        '● Planning and estimating tasks leveraging Jira and assigning tasks to interns while providing guidance.',
        '● Building multiple mobile responsive views and components leveraging TanStack-table, TanStack-query, and TailwindCSS styling.',
        '● Starting a new frontend Codebase (React, Vite, TailwindCSS) utilizing best practices.',
        '● Collaborating with product and design teams to develop application requirements and estimations. Building backend GraphQL resolvers in TypeScript.',
        '● Fixing a showstopper bug in AWS within the first week of joining.',
        '● Implementing authn/authz flows leveraging Auth0, in React, Python and building out an RBAC system according to OWASP best practices.',
        '● Planning and estimating tasks leveraging Jira and assigning tasks to interns while providing guidance.'
      ],
      technologies: [
        'React',
        'Typescript',
        'GraphQL',
        'Python',
        'Flask',
        'Cypress'
      ],
    },
    firstResonance: {
      name: 'First Resonance',
      title: 'Frontend Engineer',
      primer: 'Software for improving the manufacturing pipeline for Fortune 500 companies and bleeding edge aerospace. It maintains complex data relationships in order to improve supply chains, the traceability of parts, and to allow users to collaborate and sign off on each others work. I built many features front to back from prototyping, design to production',
      bullets: [
        '● Planning, designing and building responsive enterprise-level web applications (React, Sass and Tailwind) serving Fortune 500 companies.',
        '● Conducted customer visits to identify pain points and delivered customized components and workarounds to address their needs.',
        '● Spearheading performance improvements by up to 25% of Apollo queries and mutations utilizing caching; building custom React hooks to improve the functionality of frontend websites allowing faster development time and improving developer experience.',
        '● Leveraging TypeScript to improve type-checking and code quality, saving development time by enabling efficient comprehension of complex portions of the codebase.',
        '● Significantly enhanced the performance of multiple frontend views, increasing efficiency by up to 200%, and documented best practices in testing and frontend performance.',
        '● Developing complex queries and mutations using Apollo and URQL for state management and API communication; leveraged React hooks to improve the functionality of frontend applications.',
        '● Collaborating with the backend team to identify requirements for feature development.',
        '● Demonstrated a commitment to continuous learning and staying up-to-date with emerging technologies to effectively contribute to the team\'s success.',
        '● Produced reusable components based on design team Figma designs, liaising with the team to ensure optimal solutions were delivered.',
        '● Identifying bundler security and performance issues utilizing webpack-bundle-analyzer to find and remove unused and out-of-date dependencies resulting in performance increases.',
        '● Advocated for relevant technologies to improve engineering team efficiency and effectiveness.',
        '● Utilized cutting-edge AI tools, including Copilot and GPT-3, to enhance developer productivity and accelerate feature delivery timelines.',
        "● Committing to continuous learning and staying up-to-date with emerging technologies like Vite, Semantic UI, Sass and more to contribute to the team's success."
      ],
      technologies: [
        'React',
        'Typescript',
        'TailwindCSS',
        'GraphQL',
        'Vite'
      ]
    },
    apple: {
      name: 'Apple',
      title: 'Software Engineer',
      primer: 'Contributed bug fixes, testing, and features to multiple applications. Built documentation for end to end and integration testing best practices as well as built a library to allow users to fast access to testing on their applications using Webpack.',
      bullets: [
        '● Debugging, troubleshooting and resolving critical issues (e.g., React and Typescript), such as preventing further bugs and unblocking critical features on core Apple applications and tools.',
        '● Optimizing Cypress and Playwright testing suites thus enabling comprehensive integration and end-to-end testing from 0% to 75%+ code coverage for multiple internal applications.',
        '● Creating concise documentation to ensure seamless collaboration within the team.',
        '● Created a highly abstracted library for credentials verification across the Apple ecosystem utilizing Webpack, and customize-cra.',
        '● Utilized Playwright to increase the quality of multiple applications in the Apple ecosystem, resulting in increased productivity across teams.',
        '● Implementing custom build scripts (e.g., Webpack) in different JavaScript environments (Angular and React) to instrument code, and ultimately provide code coverage using IstanbulJS/nyc.'
      ],
      technologies: [
        'React',
        'Typescript',
        'Cypress',
        'Playwright',
        'Webpack'
      ],
    },
    creatrify: {
      name: 'Creatrify',
      title: 'UI/UX Consultant',
      primer: 'I help guide product and user experience decisions on the Creatrify platform! I occasionally bug hunt and bug fix here and there too.',
      bullets: [
        '● Guiding the design team and CEO to increase marketing potential and customer retention.',
        '● Conducting market research to simplify and improve various user flows.',
        '● Providing engineer guidance and expertise to solve various problems related to mobile responsiveness and usability.',
        '● Debugging and troubleshooting mobile responsive design as bug hunting, troubleshooting and debugging using CSS and TypeScript. Improving user flows and overall design by studying and simplifying existing user flows for a more seamless experience.',
      ],
      technologies: [
        'Angular',
        'Typescript',
        'CSS',
        'Figma',
        'AdobeXD'
      ],
    }
  }
}

export default resume