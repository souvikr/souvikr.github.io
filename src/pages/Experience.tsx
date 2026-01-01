import Layout from "@/components/Layout";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Built and maintained React applications with TypeScript",
      "Collaborated with design team to implement responsive UI components",
      "Integrated third-party APIs and payment systems",
    ],
  },
  {
    title: "Junior Developer",
    company: "Agency Co",
    location: "Remote",
    period: "2018 - 2020",
    description: [
      "Developed client websites using modern web technologies",
      "Participated in agile development processes",
      "Contributed to internal tools and documentation",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    period: "2016 - 2018",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2012 - 2016",
  },
];

const Experience = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-4 text-3xl font-bold text-foreground">Experience</h1>
        <p className="mb-12 text-muted-foreground">
          My professional journey and educational background.
        </p>
        
        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative border-l-2 border-border pl-6">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-border bg-background" />
                <div className="mb-1 text-sm text-muted-foreground">{exp.period}</div>
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <div className="mb-3 text-muted-foreground">
                  {exp.company} · {exp.location}
                </div>
                <ul className="space-y-1 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education */}
        <section>
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative border-l-2 border-border pl-6">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-border bg-background" />
                <div className="mb-1 text-sm text-muted-foreground">{edu.period}</div>
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                <div className="text-muted-foreground">{edu.institution}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experience;
