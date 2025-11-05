import { motion } from 'framer-motion';
import { HeartPulse, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Beranda' },
    { href: '#how', label: 'Cara Kerja' },
    { href: '#donate', label: 'Donor Sekarang' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <motion.a
              href="#home"
              className="flex items-center gap-2 font-semibold text-rose-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HeartPulse className="h-6 w-6" />
              <span>DonorCare</span>
            </motion.a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-slate-700 transition hover:text-rose-600"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#donate"
                className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700"
              >
                Mulai Donor
              </a>
            </div>

            <button
              className="md:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
          </nav>

          {open && (
            <div className="block md:hidden border-t border-white/20 px-4 py-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium text-slate-700"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#donate"
                  className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700"
                  onClick={() => setOpen(false)}
                >
                  Mulai Donor
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
