import { useEffect, useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import AdminDashboard from './AdminDashboard';

const SESSION_FLAG = 'jaxxy.admin.unlocked';
const PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || 'jaxxy-admin';

export default function AdminGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(SESSION_FLAG) === '1');
  }, []);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (value === PASSCODE) {
      sessionStorage.setItem(SESSION_FLAG, '1');
      setUnlocked(true);
      setError('');
    } else {
      setError('Code incorrect.');
    }
  }

  function lock() {
    sessionStorage.removeItem(SESSION_FLAG);
    setUnlocked(false);
    setValue('');
  }

  if (unlocked) return <AdminDashboard onLock={lock} />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-frame">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-panel">
          <Lock className="h-5 w-5 text-inkline" strokeWidth={2} />
        </span>
        <h1 className="mt-5 text-[22px] font-semibold tracking-tight text-inkline">
          Espace administrateur
        </h1>
        <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-500">
          Tableau de bord de test réservé à l’équipe Jaxxy.
        </p>

        <form onSubmit={submit} className="mt-6">
          <input
            type="password"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Code d’accès"
            autoFocus
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-[14px] text-inkline outline-none transition focus:border-accent"
          />
          {error && <p className="mt-2 text-[12.5px] font-medium text-red-500">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-accent px-4 py-3 text-[14px] font-semibold text-white transition hover:bg-accent-dark"
          >
            Déverrouiller
          </button>
        </form>

        <a
          href="#top"
          className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-500 transition hover:text-inkline"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.2} /> Retour au site
        </a>
      </div>
    </div>
  );
}
