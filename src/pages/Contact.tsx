import { Mail, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold text-foreground text-center md:text-left">Contact</h1>
        
        <div className="flex flex-col items-center md:items-start space-y-4 mb-12">
          <a 
            href="mailto:aiwithroy@gmail.com" 
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            aiwithroy@gmail.com
          </a>
          
          <a 
            href="https://maps.app.goo.gl/HqtFzHUJ8F6cCLgy9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="h-5 w-5" />
            Kolkata, India
          </a>
        </div>

        {/* Cal.com Embed */}
        <div className="w-full">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center md:text-left">Book a Call</h2>
          <div className="w-full rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://cal.com/souvik"
              className="w-full h-[600px]"
              frameBorder="0"
              title="Book a call with Souvik"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;