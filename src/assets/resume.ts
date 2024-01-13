export interface JobContentType {
  bullets: Array<string>,
  technologies: Array<string>
  primer: string
  name: string
}

interface ResumeType {
  companies: {
    [key: string]: JobContentType
  }
}

const resume: ResumeType = {
  companies: {
    complyAI: {
      name: 'ComplyAI',
      primer: 'As the sole Frontend Engineer, I am responsible for crafting, strategizing, and constructing the frontend codebase and user pathways. I also add endpoints, resources and other necessities in the backend using Python and Flask :)',
      bullets: [
        '● Inheriting the frontend codebase (React, Vite, GraphQL, Apollo, styled-components), debugging, planning, designing and building features.',
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
        'Flask'
      ],
    },
    firstResonance: {
      name: 'First Resonance',
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
      primer: 'Contributed bug fixes, testing, and features to multiple applications. Built documentation for end to end and integration testing best practices as well as built a library to allow users to fast access to testing on their applications using Webpack.',
      bullets: [
        '● Guiding the design team and CEO to increase marketing potential and customer retention.',
        '● Conducting market research to simplify and improve user flows.',
        '● Improved user flow by designing and simplifying existing flows.',
        '● Debugging and troubleshooting mobile responsive design and bug hunting using CSS and TypeScript.',
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