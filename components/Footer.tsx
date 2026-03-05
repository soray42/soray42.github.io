import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-black/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Haotian Yang
        </p>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/soray42" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/haotian-yang-b7a47b301/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="/contact"
            className="text-gray-600 hover:text-gray-300 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
