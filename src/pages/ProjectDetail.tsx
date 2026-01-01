import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}> = {
  "project-1": {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js.",
    longDescription: `This project is a comprehensive web application that demonstrates modern full-stack development practices. 
    
It features a React frontend with a clean, responsive design and a Node.js backend with RESTful APIs. The application includes user authentication, real-time data updates using WebSockets, and a PostgreSQL database for persistent storage.

The architecture follows best practices for scalability and maintainability, with clear separation of concerns and modular code organization.`,
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSocket", "JWT"],
    features: [
      "User authentication and authorization",
      "Real-time data synchronization",
      "Responsive design for all devices",
      "RESTful API architecture",
      "Database migrations and seeding",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  "project-2": {
    title: "Project Two",
    description: "An open-source CLI tool for automating development workflows.",
    longDescription: `A powerful command-line interface tool designed to streamline and automate common development tasks.

Built with TypeScript for type safety and better developer experience, this tool helps developers save time by automating repetitive tasks such as project scaffolding, code generation, and deployment processes.

The tool is designed to be extensible, allowing users to create custom plugins and commands to fit their specific workflow needs.`,
    technologies: ["TypeScript", "Node.js", "CLI", "Commander.js"],
    features: [
      "Project scaffolding and boilerplate generation",
      "Custom command creation",
      "Plugin system for extensibility",
      "Interactive prompts for user input",
      "Cross-platform compatibility",
    ],
    github: "https://github.com",
  },
  "project-3": {
    title: "Project Three",
    description: "A machine learning project for image classification.",
    longDescription: `An end-to-end machine learning project that implements state-of-the-art image classification using deep learning.

The project uses TensorFlow and Keras to build and train convolutional neural networks (CNNs) for accurate image classification. It includes data preprocessing pipelines, model training scripts, and a simple web interface for making predictions.

The entire application is containerized using Docker for easy deployment and reproducibility across different environments.`,
    technologies: ["Python", "TensorFlow", "Keras", "Docker", "Flask"],
    features: [
      "Custom CNN architecture",
      "Data augmentation for better generalization",
      "Model versioning and experiment tracking",
      "REST API for predictions",
      "Docker containerization",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
          <Link to="/projects" className="mt-4 inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Link 
          to="/projects" 
          className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
        
        <h1 className="mb-4 text-3xl font-bold text-foreground">{project.title}</h1>
        <p className="mb-6 text-lg text-muted-foreground">{project.description}</p>
        
        {/* Action Buttons */}
        <div className="mb-12 flex flex-wrap gap-3">
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
        
        {/* Technologies */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
        
        {/* Description */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Overview</h2>
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {project.longDescription}
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Key Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
