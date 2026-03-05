'use client';

import { useEffect, useRef } from 'react';

const SYMBOLS = [
  // LaTeX raw
  '\\int', '\\sum', '\\nabla', '\\partial', '\\alpha', '\\beta', '\\gamma',
  '\\delta', '\\epsilon', '\\theta', '\\lambda', '\\mu', '\\sigma', '\\pi',
  '\\phi', '\\psi', '\\omega', '\\Sigma', '\\Delta', '\\Gamma', '\\infty',
  '\\forall', '\\exists', '\\in', '\\notin', '\\subset', '\\cup', '\\cap',
  '\\mathbb{R}', '\\mathbb{E}', '\\mathcal{L}', '\\hat{\\beta}',
  '\\log', '\\exp', '\\lim', '\\max', '\\min', '\\arg\\min',
  // Unicode math (the "resolved" form)
  '∫', '∑', '∇', '∂', 'α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'σ',
  'π', 'φ', 'ψ', 'ω', 'Σ', 'Δ', 'Γ', '∞', '∀', '∃', '∈', '⊂',
  'ℝ', 'ℙ', '𝔼', '→', '⟹', '≤', '≥', '≠', '≈', '∝',
  // Expressions
  'T/N', 'p(x|y)', 'β̂', 'σ²', 'log(n)', 'O(n²)',
  'VAR(1)', 'LASSO', 'KL(P‖Q)', 'TE_{Y→X}',
];

interface Drop {
  x: number;
  y: number;
  speed: number;
  symbol: string;
  opacity: number;
  size: number;
  isLatex: boolean;       // starts as raw LaTeX
  morphProgress: number;  // 0 = raw LaTeX, 1 = unicode symbol
  morphSpeed: number;
  targetSymbol: string;
}

export default function MathRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drops: Drop[] = [];
    const NUM_DROPS = Math.floor(window.innerWidth / 28);

    const latexSymbols = SYMBOLS.filter(s => s.startsWith('\\'));
    const unicodeSymbols = SYMBOLS.filter(s => !s.startsWith('\\'));

    function createDrop(xOverride?: number): Drop {
      const isLatex = Math.random() > 0.35;
      const latex = latexSymbols[Math.floor(Math.random() * latexSymbols.length)];
      const unicode = unicodeSymbols[Math.floor(Math.random() * unicodeSymbols.length)];
      return {
        x: xOverride ?? Math.random() * (canvas?.width ?? 800),
        y: Math.random() * -500 - 50,
        speed: 0.4 + Math.random() * 1.0,
        symbol: isLatex ? latex : unicode,
        targetSymbol: unicode,
        opacity: 0.08 + Math.random() * 0.55,
        size: 11 + Math.random() * 7,
        isLatex,
        morphProgress: isLatex ? 0 : 1,
        morphSpeed: 0.003 + Math.random() * 0.008,
      };
    }

    for (let i = 0; i < NUM_DROPS; i++) {
      const d = createDrop();
      d.y = Math.random() * (canvas.height + 200) - 200;
      drops.push(d);
    }

    let animId: number;

    function render() {
      if (!canvas || !ctx) return;
      // Fade trail
      ctx.fillStyle = 'rgba(10, 10, 10, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const d of drops) {
        d.y += d.speed;

        // Morph: latex → unicode as it falls
        if (d.isLatex && d.morphProgress < 1) {
          d.morphProgress = Math.min(1, d.morphProgress + d.morphSpeed);
        }

        // Interpolate displayed symbol
        let displaySymbol: string;
        if (d.morphProgress < 0.5) {
          displaySymbol = d.symbol;   // still looks like LaTeX
        } else {
          displaySymbol = d.targetSymbol; // revealed unicode
        }

        // Color: teal for high opacity, dim for low
        const alpha = d.opacity;
        const green = Math.floor(180 + alpha * 75);
        const blue = Math.floor(160 + alpha * 70);
        ctx.fillStyle = `rgba(20, ${green}, ${blue}, ${alpha})`;
        ctx.font = `${d.size}px "JetBrains Mono", "Courier New", monospace`;
        ctx.fillText(displaySymbol, d.x, d.y);

        // Reset when off screen
        if (d.y > canvas.height + 60) {
          const nd = createDrop(Math.random() * canvas.width);
          Object.assign(d, nd);
        }
      }

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
