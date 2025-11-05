import { motion } from 'framer-motion';
import { ClipboardCheck, Droplet, CalendarDays } from 'lucide-react';

const steps = [
  {
    icon: CalendarDays,
    title: 'Buat Janji',
    desc: 'Pilih lokasi dan waktu donor yang paling nyaman untukmu.',
  },
  {
    icon: ClipboardCheck,
    title: 'Skrining Cepat',
    desc: 'Tim medis memeriksa kondisi kesehatanmu sebelum donor.',
  },
  {
    icon: Droplet,
    title: 'Donor Darah',
    desc: 'Proses aman, cepat, dan ditangani oleh profesional.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-rose-50/60 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Bagaimana Prosesnya?
        </motion.h2>
        <p className="mt-3 text-center text-slate-600">Tiga langkah mudah untuk menyelamatkan nyawa.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-rose-600/10 p-3 text-rose-600">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
