interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Mount Carmel",
    description: "A modern hospital website built with Next.js and Tailwind CSS, featuring appointment booking and doctor profiles.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "ShadCN/UI"],
    githubUrl: "https://github.com/Richmond-Andoh/mount-carmel",
    liveUrl: "#",
    imageUrl: "/projects/mount-carmel.jpg",
    featured: true
  },
  {
    title: "AccessChain",
    description: "A blockchain-based platform to support people with disabilities through transparent funding and assistance programs.",
    tags: ["Blockchain", "Solidity", "React", "Node.js", "Web3"],
    githubUrl: "https://github.com/Richmond-Andoh/accesschain-core",
    liveUrl: "#",
    imageUrl: "/projects/accesschain.jpg",
    featured: true
  },
  {
    title: "React Shopping Cart",
    description: "Feature-rich e-commerce application with cart functionality, product filtering, and responsive design.",
    tags: ["React", "Context API", "Fake Store API", "Tailwind CSS"],
    githubUrl: "https://github.com/Richmond-Andoh/react-shopping-cart-fakestoreapi",
    liveUrl: "#",
    imageUrl: "/projects/shopping-cart.jpg"
  },
  {
    title: "EmployWise",
    description: "Comprehensive user management system with role-based access control and real-time updates.",
    tags: ["MERN Stack", "JWT", "REST API", "Redux"],
    githubUrl: "https://github.com/Richmond-Andoh/employwise_user_management",
    liveUrl: "#",
    imageUrl: "/projects/employwise.jpg"
  },
  {
    title: "AkokoMarket",
    description: "Frontend for an agricultural e-commerce platform connecting farmers directly with consumers.",
    tags: ["React", "Redux", "Material-UI", "REST API"],
    githubUrl: "https://github.com/AgroInnovaGH/akokomarket-ecom-frontend",
    liveUrl: "#",
    imageUrl: "/projects/akokomarket.jpg"
  },
  {
    title: "CodeNest",
    description: "GitHub-like platform for code collaboration with repository management and pull requests.",
    tags: ["MERN Stack", "GraphQL", "Apollo", "JWT"],
    githubUrl: "https://github.com/Richmond-Andoh/CodeNest",
    liveUrl: "#",
    imageUrl: "/projects/codenest.jpg"
  }
]

export const skills = {
  frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "ShadCN UI", level: 80 },
    { name: "Aceternity UI", level: 75 },
    { name: "Ant Design", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 80 },
    { name: "PHP", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Firebase", level: 75 },
  ],
  blockchain: [
    { name: "Move Language", level: 70 },
    { name: "Sui Blockchain", level: 70 },
    { name: "Solidity", level: 65 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "AWS", level: 70 },
    { name: "Vercel", level: 80 },
    { name: "Netlify", level: 75 },
    { name: "Postman", level: 80 },
    { name: "Chrome DevTools", level: 85 },
  ]
}

export const openSourceContributions = [
  "Contributed to multiple open-source projects during Hacktoberfest 2024, focusing on React component libraries and documentation improvements.",
  "Active contributor to various JavaScript and TypeScript open-source projects on GitHub.",
  "Maintainer of several personal open-source projects related to web development and blockchain."
]
