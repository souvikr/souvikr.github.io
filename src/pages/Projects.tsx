import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "project-1",
    title: "Project One",
    description: "A full-stack web application built with React and Node.js. Features include real-time updates, authentication, and a responsive design.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "An open-source CLI tool for automating development workflows. Simplifies repetitive tasks and improves productivity.",
    technologies: ["TypeScript", "Node.js", "CLI"],
    github: "https://github.com",
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A machine learning project for image classification using deep learning techniques and modern frameworks.",
    technologies: ["Python", "TensorFlow", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-4 text-3xl font-bold text-foreground">Projects</h1>
        <p className="mb-12 text-muted-foreground">
          A collection of projects I've worked on. Click on any project to learn more.
        </p>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group transition-colors hover:border-foreground/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      <Link 
                        to={`/projects/${project.id}`}
                        className="hover:underline"
                      >
                        {project.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  
                  <div className="ml-auto flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="View demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
