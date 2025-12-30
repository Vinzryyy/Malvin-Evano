import { ArrowUp, Instagram, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-4">
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Portfolio — All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/_malvn_"
            target="_blank"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://x.com/Vinzryyy"
            target="_blank"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/malvinevano/"
            target="_blank"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/Vinzryyy"
            target="_blank"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Back to top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
