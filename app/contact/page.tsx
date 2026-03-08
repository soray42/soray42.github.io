import { Github, Linkedin, MapPin, Mail } from 'lucide-react';
import MathRain from '@/components/MathRain';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-bold text-white mb-3">Contact</h1>
        <p className="text-gray-400 text-sm max-w-lg mb-12">
          Open to research discussions, collaboration, and internship opportunities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://scholar.google.com/citations?user=PlSIkoAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 border border-white/8 rounded-lg bg-black/30 hover:border-white/20 hover:bg-black/50 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
            </svg>
            <div>
              <p className="text-white text-sm font-medium">Google Scholar</p>
              <p className="text-gray-600 text-xs">Publications</p>
            </div>
          </a>

          <a
            href="https://github.com/soray42"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 border border-white/8 rounded-lg bg-black/30 hover:border-white/20 hover:bg-black/50 transition-all duration-200"
          >
            <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            <div>
              <p className="text-white text-sm font-medium">GitHub</p>
              <p className="text-gray-600 text-xs">soray42</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/haotian-yang-b7a47b301/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 border border-white/8 rounded-lg bg-black/30 hover:border-white/20 hover:bg-black/50 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
            <div>
              <p className="text-white text-sm font-medium">LinkedIn</p>
              <p className="text-gray-600 text-xs">Haotian Yang</p>
            </div>
          </a>

          <a
            href="mailto:sorayoung.42@outlook.com"
            className="group flex items-center gap-3 p-4 border border-white/8 rounded-lg bg-black/30 hover:border-white/20 hover:bg-black/50 transition-all duration-200"
          >
            <Mail className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
            <div>
              <p className="text-white text-sm font-medium">Email (Personal)</p>
              <p className="text-gray-600 text-xs">sorayoung.42@outlook.com</p>
            </div>
          </a>

          <a
            href="mailto:haotian.yang@studbocconi.it"
            className="group flex items-center gap-3 p-4 border border-white/8 rounded-lg bg-black/30 hover:border-white/20 hover:bg-black/50 transition-all duration-200"
          >
            <Mail className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
            <div>
              <p className="text-white text-sm font-medium">Email (Academic)</p>
              <p className="text-gray-600 text-xs">haotian.yang@studbocconi.it</p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 border border-white/8 rounded-lg bg-black/30">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-white text-sm font-medium">Location</p>
              <p className="text-gray-600 text-xs">Milan, Italy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
