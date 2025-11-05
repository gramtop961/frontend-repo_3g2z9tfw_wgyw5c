import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Calendar } from 'lucide-react';

export default function DonorForm() {
  const [form, setForm] = useState({ name: '', blood: 'A', date: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.city) return;
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', blood: 'A', date: '', city: '' });
    }, 400);
  };

  return (
    <section id="donate" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-rose-50/80 via-white to-white" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl border border-rose-100 bg-white p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-2xl bg-rose-600/10 p-3 text-rose-600">
              <Heart className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Daftar Donor</h3>
              <p className="text-slate-600">Isi data berikut untuk membuat janji donor.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan nama"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-rose-200 focus:ring"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Golongan Darah</label>
              <select
                name="blood"
                value={form.blood}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-rose-200 focus:ring"
              >
                {['A','B','AB','O'].map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700 flex items-center gap-2"><Calendar className="h-4 w-4 text-rose-600" /> Tanggal Donor</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-rose-200 focus:ring"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700 flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-600" /> Kota</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Contoh: Jakarta"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-rose-200 focus:ring"
                required
              />
            </div>

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full rounded-2xl bg-rose-600 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700"
              >
                Buat Janji Donor
              </button>
            </div>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700"
                onAnimationComplete={() => setSubmitted(false)}
              >
                Terima kasih! Janji donor kamu telah dicatat. Kami akan mengirimkan pengingat menjelang tanggal yang dipilih.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
