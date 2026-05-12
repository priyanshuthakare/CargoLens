import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-16 min-h-[70vh] flex items-center justify-center bg-bg">
      <div className="text-center px-4">
        <div className="text-navy text-[120px] font-extrabold leading-none mb-4 opacity-10">404</div>
        <h1 className="text-h1 text-text mb-2">Page not found</h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text rounded-lg font-medium text-sm hover:bg-surface transition-all"
          >
            <ArrowLeft size={16} /> Go back
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-blue transition-all"
          >
            <Home size={16} /> Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
