import { Link } from 'react-router';
import Logo from './Logo';

/**
 * @intent Dark footer. Same links as before.
 * Layout updated: flex space-between — logo+copyright LEFT, 3 link columns RIGHT.
 * Per desgin_implementation.md spec.
 */

const footerLinks = {
  product: [
    { label: 'Features', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Security', href: '/security' },
    { label: 'Changelog', href: '/changelog' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Contact', href: '/about#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'DPA', href: '/legal/dpa' },
    { label: 'Cookie Policy', href: '/legal/privacy#cookies' },
  ],
};

const columns = [
  { title: 'Product', links: footerLinks.product },
  { title: 'Company', links: footerLinks.company },
  { title: 'Legal', links: footerLinks.legal },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top row: logo+copy LEFT, link columns RIGHT */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo light className="mb-4" />
            <p className="text-sm text-white/50 mb-3">
              Every quote. One format. Zero typing.
            </p>
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} CargoLens. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider + tagline */}
        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-white/25">
            Made for logistics teams who are done with spreadsheets.
          </p>
        </div>
      </div>
    </footer>
  );
}
