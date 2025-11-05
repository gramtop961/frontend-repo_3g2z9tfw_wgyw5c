import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DonorForm from './components/DonorForm';

export default function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DonorForm />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">© {new Date().getFullYear()} DonorCare — Bersama kita selamatkan nyawa.</p>
        </div>
      </footer>
    </div>
  );
}
