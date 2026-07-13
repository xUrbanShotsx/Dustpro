import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import {
  ArrowRight,
  Drop,
  RoadHorizon,
  Shield,
  Plant,
  CheckCircle,
  Truck,
  Wrench,
  Mountains,
  Factory,
  Tractor,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";

const products = [
  {
    id: "dustloc",
    name: "DustLoc",
    tagline: "Polymer binder dust suppression",
    desc: "Biodegradable polymer binders and complex wetting agents that penetrate, absorb, and bind to stabilise road surfaces for lasting dust control.",
    icon: Drop,
    span: "lg:col-span-2",
    tall: true,
    img: "/dustloc.jpg",
  },
  {
    id: "wetdown",
    name: "WetDown",
    tagline: "Surface stabilisation solution",
    desc: "Polymers, surfactants and brines working together to bind loose particles and stabilise unsealed surfaces.",
    icon: Drop,
    span: "lg:col-span-1",
    tall: false,
    img: "/wetdown.jpg",
  },
  {
    id: "roadpro",
    name: "RoadPro",
    tagline: "Premium road treatment",
    desc: "Advanced road treatment formulated for sealed and unsealed surfaces, reducing dust emissions and extending road life.",
    icon: RoadHorizon,
    span: "lg:col-span-1",
    tall: false,
    img: "/roadpro.jpg",
  },
  {
    id: "trackshield",
    name: "TrackShield",
    tagline: "Haul road protection",
    desc: "Engineered for mining haul roads and industrial tracks, delivering dust suppression under heavy vehicle loads.",
    icon: Shield,
    span: "lg:col-span-1",
    tall: false,
    img: "/trackshield.jpg",
  },
  {
    id: "site-regeneration",
    name: "Site Regeneration",
    tagline: "Land rehabilitation service",
    desc: "Comprehensive rehabilitation of disturbed mine sites and industrial land, restoring natural ground cover and controlling erosion.",
    icon: Plant,
    span: "lg:col-span-1",
    tall: false,
    img: "/site-regeneration.jpg",
  },
];

const whyPoints = [
  {
    num: "01",
    title: "Australian Made",
    body: "Every DustPro product is manufactured in New South Wales, meeting Australia's strict environmental and safety standards. No imports. No compromises.",
  },
  {
    num: "02",
    title: "Environmentally Responsible",
    body: "Biodegradable formulations designed to perform without compromising soil health, waterways, or surrounding ecosystems. Compliant with environmental guidelines.",
  },
  {
    num: "03",
    title: "Field Proven",
    body: "Born in underground coal mining, our products are tested in some of Australia's most demanding industrial environments. Trusted by national and international clients.",
  },
];

const industries = [
  { label: "Underground Coal Mining", icon: Mountains },
  { label: "Open Cut Mining", icon: Truck },
  { label: "Civil Construction", icon: Wrench },
  { label: "Road Maintenance", icon: RoadHorizon },
  { label: "Industrial Facilities", icon: Factory },
  { label: "Agricultural Land", icon: Tractor },
];

export default function Home() {
  return (
    <>
      {/* HERO - Split layout */}
      <section className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 pt-24 pb-16 lg:pt-16 bg-dp-bg order-2 lg:order-1">
          <AnimateIn delay={0.05}>
            <p className="label mb-6">Dust Management Systems</p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tightest leading-[1.0] text-dp-text mb-6">
              Dust Under
              <br />
              <span className="text-dp-amber">Control.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-dp-muted text-lg leading-relaxed max-w-[42ch] mb-10">
              Australian-made dust management systems for mining, roads, and
              industrial sites. Biodegradable, proven, and built for Australia's
              toughest conditions since 2009.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact Our Team
              </Link>
            </div>
          </AnimateIn>

          {/* Trust strip */}
          <AnimateIn delay={0.45}>
            <div className="mt-16 flex items-center gap-8 border-t border-dp-border pt-8">
              <div>
                <p className="text-2xl font-bold text-dp-amber font-mono">
                  2009
                </p>
                <p className="text-xs text-dp-dim uppercase tracking-wider mt-1">
                  Established
                </p>
              </div>
              <div className="w-px h-10 bg-dp-border" />
              <div>
                <p className="text-2xl font-bold text-dp-amber font-mono">5</p>
                <p className="text-xs text-dp-dim uppercase tracking-wider mt-1">
                  Products
                </p>
              </div>
              <div className="w-px h-10 bg-dp-border" />
              <div>
                <p className="text-sm font-medium text-dp-text">
                  Australia Wide
                </p>
                <p className="text-xs text-dp-dim uppercase tracking-wider mt-1">
                  Origin
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2 overflow-hidden">
          <Image
            src="/heroshot.png"
            alt="Open cut mining site — DustPro dust management"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dp-bg via-transparent to-transparent lg:via-dp-bg/10 lg:to-transparent" />
          <div className="absolute inset-0 bg-dp-amber/10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dp-bg to-transparent lg:hidden" />
        </div>
      </section>

      {/* PRODUCTS BENTO */}
      <section className="section-pad bg-dp-bg">
        <div className="container-wide">
          <AnimateIn>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tightest leading-tight max-w-[18ch]">
                Five solutions. One trusted source.
              </h2>
              <Link
                href="/products"
                className="text-dp-amber text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                All Products <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </AnimateIn>

          {/* Bento: row 1 = DustLoc(col-2) + WetDown(col-1), row 2 = 3 equal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* DustLoc - large */}
            <AnimateIn delay={0.05} className="lg:col-span-2">
              <Link
                href="/products#dustloc"
                className="group relative overflow-hidden block bg-dp-surface border border-dp-border rounded-none h-64 lg:h-80 hover:border-dp-amber/40 transition-colors duration-300"
              >
                <Image
                  src="/dustloc.jpg"
                  alt="DustLoc dust suppression on haul road"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-50"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dp-bg/90 via-dp-bg/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="label">DustLoc</span>
                    <Drop size={20} className="text-dp-amber" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">
                      Polymer Binder Dust Suppression
                    </h3>
                    <p className="text-dp-muted text-sm leading-relaxed max-w-[50ch]">
                      Biodegradable binders and wetting agents that penetrate,
                      absorb moisture, and bind surface particles for lasting
                      stability.
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* WetDown */}
            <AnimateIn delay={0.1}>
              <Link
                href="/products#wetdown"
                className="group relative overflow-hidden block bg-dp-surface border border-dp-border rounded-none h-64 lg:h-80 hover:border-dp-amber/40 transition-colors duration-300"
              >
                <Image
                  src="/wetdown.jpg"
                  alt="WetDown application on unsealed surface"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-50"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dp-bg/90 via-dp-bg/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="label">WetDown</span>
                    <Drop size={20} className="text-dp-amber" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-1.5">
                      Surface Stabilisation
                    </h3>
                    <p className="text-dp-muted text-sm">
                      Polymers, surfactants and brines binding loose particles
                      on unsealed surfaces.
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* RoadPro */}
            <AnimateIn delay={0.15}>
              <Link
                href="/products#roadpro"
                className="group relative overflow-hidden block bg-dp-surface border border-dp-border rounded-none h-56 hover:border-dp-amber/40 transition-colors duration-300"
              >
                <Image
                  src="/roadpro.jpg"
                  alt="RoadPro road treatment"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-50"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dp-bg/90 via-dp-bg/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="label">RoadPro</span>
                    <RoadHorizon size={20} className="text-dp-amber" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-1.5">
                      Premium Road Treatment
                    </h3>
                    <p className="text-dp-muted text-sm">
                      Reduces emissions, extends road life.
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* TrackShield */}
            <AnimateIn delay={0.2}>
              <Link
                href="/products#trackshield"
                className="group relative overflow-hidden block bg-dp-surface border border-dp-border rounded-none h-56 hover:border-dp-amber/40 transition-colors duration-300"
              >
                <Image
                  src="/trackshield.jpg"
                  alt="TrackShield on haul road"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-50"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dp-bg/90 via-dp-bg/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="label">TrackShield</span>
                    <Shield size={20} className="text-dp-amber" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-1.5">
                      Haul Road Protection
                    </h3>
                    <p className="text-dp-muted text-sm">
                      Built for heavy vehicle loads and mining tracks.
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* Site Regeneration */}
            <AnimateIn delay={0.25}>
              <Link
                href="/products#site-regeneration"
                className="group relative overflow-hidden block bg-dp-elevated border border-dp-border rounded-none h-56 hover:border-dp-amber/40 transition-colors duration-300"
              >
                <Image
                  src="/site-regeneration.jpg"
                  alt="Site regeneration and land rehabilitation"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-30 group-hover:opacity-40"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dp-bg/95 via-dp-bg/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="label">Site Regeneration</span>
                    <Plant size={20} className="text-dp-amber" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-1.5">
                      Land Rehabilitation
                    </h3>
                    <p className="text-dp-muted text-sm">
                      Restoring disturbed sites and mine land to natural cover.
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP - Full-width bold statement */}
      <section className="bg-dp-surface border-y border-dp-border py-20 md:py-28 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tightest leading-tight text-dp-text">
                Pioneering dust management from the coalfields of New South
                Wales since{" "}
                <span className="text-dp-amber">2009.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-5">
                <p className="text-dp-muted leading-relaxed">
                  DustPro Pty Ltd started where the dust problem is hardest:
                  underground coal mining in southern NSW. From that demanding
                  origin, we developed a range of environmentally sustainable
                  products now trusted by clients across Australia and
                  internationally.
                </p>
                <p className="text-dp-muted leading-relaxed">
                  Every formulation is Australian made, biodegradable, and
                  engineered to meet the strict guidelines governing
                  environmental practice in mining and civil industries.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-dp-amber text-sm hover:gap-3 transition-all mt-2"
                >
                  Our Story <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* WHY DUSTPRO - Vertical numbered list */}
      <section className="section-pad bg-dp-bg">
        <div className="container-wide">
          <AnimateIn>
            <p className="label mb-12">Our Approach</p>
          </AnimateIn>
          <div className="space-y-0">
            {whyPoints.map((point, i) => (
              <AnimateIn key={point.num} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 border-b border-dp-border first:border-t">
                  <div className="flex items-start gap-4 md:block">
                    <span className="text-4xl md:text-5xl font-bold font-mono text-dp-dim">
                      {point.num}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-start">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight shrink-0 min-w-[200px]">
                      {point.title}
                    </h3>
                    <p className="text-dp-muted leading-relaxed max-w-[55ch]">
                      {point.body}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS - Logo grid */}
      <section className="section-pad bg-dp-surface border-t border-dp-border">
        <div className="container-wide">
          <AnimateIn>
            <p className="label mb-4">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tightest mb-12">
              People we have helped
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/Companylogos/burtoncivilcontractors.png", alt: "Burton Civil Contractors" },
              { src: "/Companylogos/south32.png", alt: "South32" },
              { src: "/Companylogos/centennialcoal.png", alt: "Centennial Coal" },
              { src: "/Companylogos/cmacontracting.png", alt: "CMA Contracting" },
              { src: "/Companylogos/deltagroup.png", alt: "Delta Group" },
              { src: "/Companylogos/deptofdefence.png", alt: "Department of Defence" },
              { src: "/Companylogos/glencore.png", alt: "Glencore" },
              { src: "/Companylogos/greyhoundracingnsw.png", alt: "Greyhound Racing NSW" },
              { src: "/Companylogos/newcrest.png", alt: "Newcrest Mining" },
              { src: "/Companylogos/peabodyenergy.png", alt: "Peabody Energy" },
              { src: "/Companylogos/tahmoorcoal.png", alt: "Tahmoor Coal" },
              { src: "/Companylogos/wollongongcoal.png", alt: "Wollongong Coal" },
            ].map((logo) => (
              <AnimateIn key={logo.src} delay={0.05}>
                <div className="flex items-center justify-center p-6 border border-dp-border bg-dp-elevated min-h-[100px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className="object-contain max-h-[56px] w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES - Tile grid */}
      <section className="section-pad bg-dp-bg border-t border-dp-border">
        <div className="container-wide">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tightest leading-tight max-w-[22ch]">
                Built for the industries that can&apos;t afford downtime.
              </h2>
              <p className="text-dp-muted max-w-[36ch] text-sm leading-relaxed">
                Our products are applied across mining, civil, and industrial
                sectors throughout Australia and beyond.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.label} delay={i * 0.07}>
                <div className="bg-dp-elevated border border-dp-border p-6 flex flex-col gap-4 hover:border-dp-amber/30 transition-colors duration-300">
                  <ind.icon size={24} className="text-dp-amber" />
                  <p className="font-medium text-sm tracking-tight leading-tight">
                    {ind.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-dp-bg border-t border-dp-border">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://picsum.photos/seed/cta-mining-landscape/1400/600"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dp-bg/80 via-transparent to-dp-bg/80" />
        <div className="relative container-wide text-center">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest leading-tight mb-6">
              Ready to control the dust?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-dp-muted text-lg max-w-[42ch] mx-auto mb-10">
              Talk to our team about the right solution for your site. We work
              with mining operations, civil contractors, and industrial
              facilities across Australia.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link href="/products" className="btn-ghost">
                Browse Products
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
