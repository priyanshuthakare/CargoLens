import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Logo from './Logo';

/**
 * @intent Fixed dark navigation bar with glassmorphic scroll effect.
 * Links and routes identical to original; only visual design updated to match
 * the dark design system (desgin_implementation.md).
 */

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Use Cases', href: '/use-cases/procurement-teams', hasDropdown: true },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Security', href: '/security' },
  { label: 'Blog', href: '/blog' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        )}
        style={{ height: '64px' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 opacity-100 hover:opacity-80 transition-opacity">
              <Logo light />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors duration-200',
                    location.pathname === link.href
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="text-white/50" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200">
                Sign in
              </button>
              <Link
                to="/waitlist"
                className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-[#1a1a24] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f] flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex flex-col items-center gap-4 mt-6"
              >
                <button className="text-lg font-medium text-white/60 hover:text-white transition-colors">
                  Sign in
                </button>
                <Link
                  to="/waitlist"
                  className="px-8 py-3 text-lg font-semibold rounded-full gradient-btn text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
