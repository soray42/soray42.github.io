'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="font-mono text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors tracking-widest"
          >
            HY
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gray-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-400" />
                )}
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gray-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-400" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/8">
          <div className="px-6 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
