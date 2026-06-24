import Link from "next/link";
import { MapPin, Envelope } from "@phosphor-icons/react/dist/ssr";

const products = [
  { label: "DustLoc", href: "/products#dustloc" },
  { label: "WetDown", href: "/products#wetdown" },
  { label: "RoadPro", href: "/products#roadpro" },
  { label: "TrackShield", href: "/products#trackshield" },
  { label: "Site Regeneration", href: "/products#site-regeneration" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dp-surface border-t border-dp-border">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-dp-amber flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M2 16L9 2L16 16H2Z" fill="#0c0c0c" />
                </svg>
              </div>
              <span className="text-dp-text font-semibold tracking-tight text-[14px]">
                DUST<span className="text-dp-amber">PRO</span>
              </span>
            </Link>
            <p className="text-dp-muted text-sm leading-relaxed max-w-[240px]">
              Australian-made dust management systems. Environmentally
              responsible. Industry proven since 2009.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-dp-muted font-mono mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-dp-muted hover:text-dp-text transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-dp-muted font-mono mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-dp-muted hover:text-dp-text transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-dp-muted font-mono mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-dp-muted">
                <MapPin size={16} className="text-dp-amber mt-0.5 shrink-0" />
                <span>
                  50 Woodford Avenue
                  <br />
                  Warilla NSW 2528
                  <br />
                  Australia
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-dp-muted">
                <Envelope size={16} className="text-dp-amber shrink-0" />
                <a
                  href="mailto:info@dustpro.com.au"
                  className="hover:text-dp-text transition-colors"
                >
                  info@dustpro.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dp-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-dp-dim">
            &copy; {new Date().getFullYear()} DustPro Pty Ltd. All rights
            reserved.
          </p>
          <p className="text-xs text-dp-dim">
            Australian owned and operated. Southern NSW.
          </p>
        </div>
      </div>
    </footer>
  );
}
