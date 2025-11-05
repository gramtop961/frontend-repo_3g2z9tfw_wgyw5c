import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2j1nQ-u5yV7gq2Sx/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <motion.h1
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Setetes Darah, Sejuta Harapan
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-slate-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Bergabunglah dengan komunitas pedonor untuk membantu pasien yang membutuhkan.
              Proses cepat, aman, dan terjadwal.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="#donate"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700"
              >
                Donor Sekarang
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-rose-600 ring-1 ring-rose-200 transition hover:bg-rose-50"
              >
                Pelajari Proses
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {[{
                Icon: ShieldCheck,
                title: 'Aman & Terverifikasi',
                desc: 'Standar kesehatan ketat',
              },{
                Icon: Users,
                title: 'Komunitas Peduli',
                desc: 'Ribuan relawan aktif',
              },{
                Icon: Clock,
                title: 'Cepat & Terjadwal',
                desc: 'Atur waktu sesuai kamu',
              }].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                >
                  <div className="flex items-start gap-3">
                    <span className="rounded-lg bg-rose-50 p-2 text-rose-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800">{title}</p>
                      <p className="text-sm text-slate-600">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
                alt="Blood donation illustration"
                className="h-[480px] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-600/20 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
