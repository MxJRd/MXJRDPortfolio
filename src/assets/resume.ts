export interface JobContentType {
  bullets: Array<string>,
  technologies: Array<string>
  primer: string
}

interface ResumeType {
  companies: {
    [key: string]: JobContentType
  }
}

const resume: ResumeType = {
  companies: {
      firstResonance: {
        primer: 'Software for improving the manufacturing pipeline for Fortune 500 companies and bleeding edge aerospace. It maintains complex data relationships in order to improve supply chains, the traceability of parts, and to allow users to collaborate and sign off on each others work. I built many features front to back from prototyping, design to production',
        bullets: [
        '● Planned projects to design and build enterprise-level frontend software using React, SCSS and Tailwind serving Fortune 500 companies to enhance their manufacturing processes.',
        '● Conducted customer visits to identify pain points and delivered customized components and workarounds to address their needs.',
        '● Significantly enhanced the performance of multiple frontend views, increasing efficiency by up to 200%, and documented best practices in testing and frontend performance.',
        '● Developed complex queries and mutations using Apollo and URQL for state management and API communication; leveraged React hooks to improve the functionality of frontend applications.',
        '● Collaborated with the backend team to identify requirements for feature development.',
        '  ● Demonstrated a commitment to continuous learning and staying up-to-date with emerging technologies to effectively contribute to the team\'s success.',
        '● Produced reusable components based on design team Figma designs, liaising with the team to ensure optimal solutions were delivered.',
        '● Identified bundler security and performance offenders utilizing webpack-bundle-analyzer to find unused and out-of-date dependencies resulting in performance increases.',
        '● Leveraged TypeScript to improve type-checking and code quality for legacy code, enabling efficient reading and comprehension of complex portions of the codebase.',
        '● Advocated for relevant technologies to improve engineering team efficiency and effectiveness.',
        '● Utilized cutting-edge AI tools, including Copilot and GPT-3, to enhance developer productivity and accelerate feature delivery timelines.'
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
        primer: 'Contributed bug fixes, testing, and features to multiple applications. Built documentation for end to end and integration testing best practices as well as built a library to allow users to fast access to testing on their applications using Webpack.',
        bullets: [
        '● Debugged and resolved critical issues in React and Typescript preventing application bugs within the Ant Design component architecture.',
        '● Developed Cypress and Playwright testing suites to enable comprehensive integration and end-to-end testing for multiple Apple applications.',
        '● Delivered concise documentation to ensure seamless collaboration within the team.',
        '● Created a highly abstracted library for credentials verification across the Apple ecosystem utilizing Webpack, and customize-cra.',
        '● Utilized Playwright to increase the quality of multiple applications in the Apple ecosystem, resulting in increased productivity across teams.',
        '● Implemented custom build scripts utilizing Webpack in different Angular and React environments to instrument code, and ultimately provide code coverage using NYC/Istanbul.'
      ],
      technologies: [
        'React',
        'Typescript',
        'Cypress',
        'Playwright',
        'Webpack'
    ]    
    }
  }
}

export default resume