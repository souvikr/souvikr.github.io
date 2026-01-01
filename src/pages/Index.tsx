import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
import Layout from "@/components/Layout";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/souvikr", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/souvikroy5", label: "LinkedIn" },
  { icon: Instagram, href: "http://instagram.com/souvikroy5", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@aiwroy", label: "YouTube" },
];
const Index = () => {
  return <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left">
          {/* Profile Photo */}
          <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-muted sm:h-36 sm:w-36 md:h-40 md:w-40">
            <img 
              src={profilePhoto} 
              alt="Souvik Roy" 
              className="h-full w-full object-cover object-[center_25%]"
            />
          </div>
          
          {/* Bio */}
          <div className="flex-1">
            <h1 className="mb-2 text-3xl font-bold text-foreground">Souvik Roy</h1>
            <p className="mb-4 text-lg text-muted-foreground">Data and AI Engineering</p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 md:justify-start">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">About Me</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate software engineer with experience in building web applications 
              and solving complex problems. I enjoy working with modern technologies and 
              continuously learning new skills.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Currently, I'm focused on building scalable applications and exploring new 
              technologies in the web development ecosystem. When I'm not coding, you can 
              find me reading, hiking, or experimenting with new tech projects.
            </p>
          </div>
        </section>
        
        {/* Interests/Focus */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Current Focus</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Full-stack web development
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Cloud architecture and DevOps
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Open source contributions
            </li>
          </ul>
        </section>
      </div>
    </Layout>;
};
export default Index;