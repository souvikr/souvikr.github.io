import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/souvikr", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/souvikroy5", label: "LinkedIn" },
  { icon: Instagram, href: "http://instagram.com/souvikroy5", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@aiwroy", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© Souvik Roy</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
