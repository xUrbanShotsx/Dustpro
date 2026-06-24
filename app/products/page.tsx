import type { Metadata } from "next";
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
  FileText,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Products",
  description:
    "DustPro's range of environmentally friendly dust management systems: DustLoc, WetDown, RoadPro, TrackShield, and Site Regeneration.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-[72px] pb-0 bg-dp-bg border-b border-dp-border">
        <div className="container-wide py-16 md:py-20">
          <AnimateIn>
            <p className="label mb-5">Our Products</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tightest leading-[1.0] max-w-[20ch] mb-6">
              Dust management for every application.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-dp-muted max-w-[50ch] leading-relaxed mb-10">
              Every DustPro product is manufactured in Australia and engineered
              to meet strict environmental and safety standards. Biodegradable
              formulations designed for real industrial conditions.
            </p>
          </AnimateIn>
          {/* Product anchors */}
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {["DustLoc", "WetDown", "RoadPro", "TrackShield", "Site Regeneration"].map(
                (p, i) => (
                  <a
                    key={p}
                    href={`#${p.toLowerCase().replace(" ", "-")}`}
                    className="text-[12px] font-mono uppercase tracking-widest text-dp-muted border border-dp-border px-4 py-2 hover:border-dp-amber/50 hover:text-dp-text transition-colors"
                  >
                    {p}
                  </a>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── DUSTLOC ─── */}
      <section id="dustloc" className="section-pad bg-dp-bg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimateIn direction="left">
              <div className="relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/dustloc-road-surface-detail/800/650"
                  alt="DustLoc applied to haul road surface"
                  width={800}
                  height={650}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-dp-amber/10" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-dp-amber" />
              </div>
            </AnimateIn>
            {/* Content */}
            <AnimateIn delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Drop size={20} className="text-dp-amber" />
                  <p className="label">DustLoc</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tightest leading-tight mb-4">
                  Polymer Binder Dust Suppression
                </h2>
                <p className="text-dp-muted leading-relaxed mb-8">
                  DustLoc combines biodegradable, environmentally friendly
                  polymer binders with complex wetting agents. Added as a
                  water-soluble concentrate to water carts, it provides
                  sustained dust suppression through three complementary
                  mechanisms.
                </p>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4 p-5 bg-dp-surface border border-dp-border">
                    <span className="text-dp-amber font-mono text-sm font-bold shrink-0 mt-0.5">
                      01
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Water Penetration
                      </h4>
                      <p className="text-dp-muted text-sm leading-relaxed">
                        Breaks surface tension to allow deeper water
                        penetration, treating the underlying material rather
                        than just the surface.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-dp-surface border border-dp-border">
                    <span className="text-dp-amber font-mono text-sm font-bold shrink-0 mt-0.5">
                      02
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Moisture Absorption
                      </h4>
                      <p className="text-dp-muted text-sm leading-relaxed">
                        Hygroscopic agents draw moisture from the atmosphere,
                        keeping treated surfaces damper for longer and reducing
                        re-application frequency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-dp-surface border border-dp-border">
                    <span className="text-dp-amber font-mono text-sm font-bold shrink-0 mt-0.5">
                      03
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Particle Binding
                      </h4>
                      <p className="text-dp-muted text-sm leading-relaxed">
                        Polymer binders physically link surface particles
                        together, stabilising the road surface and preventing
                        dust generation at source.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-dp-muted font-mono mb-4">
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Haul Roads",
                      "Access Roads",
                      "Hardstands",
                      "Laydown Areas",
                      "Tailings Dams",
                      "ROM Pads",
                      "Quad Loading Points",
                    ].map((app) => (
                      <span
                        key={app}
                        className="text-xs border border-dp-dim text-dp-muted px-3 py-1.5"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Enquire About DustLoc
                  <ArrowRight size={15} weight="bold" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── WETDOWN ─── */}
      <section id="wetdown" className="section-pad bg-dp-surface border-t border-dp-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content left */}
            <AnimateIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Drop size={20} className="text-dp-amber" />
                  <p className="label">WetDown</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tightest leading-tight mb-4">
                  Surface Stabilisation Solution
                </h2>
                <p className="text-dp-muted leading-relaxed mb-8">
                  WetDown contains a carefully balanced blend of polymers,
                  surfactants, and brines that work together to bind loose
                  particles and stabilise unsealed surfaces. Effective across a
                  wide range of soil and aggregate types.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    {
                      title: "Multi-Component Formula",
                      body: "Polymers, surfactants and brines each contributing distinct stabilisation properties.",
                    },
                    {
                      title: "Particle Binding",
                      body: "Binds loose particles to prevent surface entrainment by wind and vehicle traffic.",
                    },
                    {
                      title: "Surface Stabilisation",
                      body: "Stabilises unsealed surfaces against erosion and material loss.",
                    },
                    {
                      title: "Broad Compatibility",
                      body: "Effective on a wide range of aggregate and soil types common in mining and civil sites.",
                    },
                  ].map((feat) => (
                    <div
                      key={feat.title}
                      className="p-5 bg-dp-elevated border border-dp-border"
                    >
                      <CheckCircle
                        size={16}
                        className="text-dp-amber mb-3"
                        weight="fill"
                      />
                      <h4 className="font-semibold text-sm mb-1.5">
                        {feat.title}
                      </h4>
                      <p className="text-dp-muted text-xs leading-relaxed">
                        {feat.body}
                      </p>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  Enquire About WetDown
                  <ArrowRight size={15} weight="bold" />
                </Link>
              </div>
            </AnimateIn>
            {/* Image right */}
            <AnimateIn delay={0.1}>
              <div className="relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/wetdown-unsealed-surface/800/650"
                  alt="WetDown stabilising an unsealed surface"
                  width={800}
                  height={650}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-dp-amber/10" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-dp-amber" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── ROADPRO ─── */}
      <section id="roadpro" className="section-pad bg-dp-bg border-t border-dp-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <div className="relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/roadpro-road-treatment-mine/800/650"
                  alt="RoadPro treatment on mine access road"
                  width={800}
                  height={650}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-dp-amber/10" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-dp-amber" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <RoadHorizon size={20} className="text-dp-amber" />
                  <p className="label">RoadPro</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tightest leading-tight mb-4">
                  Premium Road Treatment
                </h2>
                <p className="text-dp-muted leading-relaxed mb-8">
                  RoadPro is a premium dust suppression treatment formulated for
                  both sealed and unsealed road surfaces. It reduces dust
                  emissions at source, extends the life of road surfaces, and
                  lowers the frequency and cost of maintenance programmes.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "Effective on sealed and unsealed road surfaces",
                    "Reduces dust emissions at the point of generation",
                    "Extends operational road life",
                    "Lowers overall maintenance costs and frequency",
                    "Suitable for high-traffic mining and civil roads",
                    "Environmentally sound formulation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-dp-muted">
                      <CheckCircle
                        size={15}
                        className="text-dp-amber mt-0.5 shrink-0"
                        weight="fill"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary">
                  Enquire About RoadPro
                  <ArrowRight size={15} weight="bold" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── TRACKSHIELD ─── */}
      <section id="trackshield" className="section-pad bg-dp-surface border-t border-dp-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield size={20} className="text-dp-amber" />
                  <p className="label">TrackShield</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tightest leading-tight mb-4">
                  Haul Road and Track Protection
                </h2>
                <p className="text-dp-muted leading-relaxed mb-8">
                  TrackShield is engineered for the unique demands of mining
                  haul roads and heavy industrial tracks. Designed to maintain
                  dust control under constant heavy vehicle loading, it provides
                  a protective layer that keeps roads stable and workers safe.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="p-5 bg-dp-elevated border border-dp-border">
                    <h4 className="font-semibold text-sm mb-2">
                      Heavy Load Performance
                    </h4>
                    <p className="text-dp-muted text-sm leading-relaxed">
                      Maintains surface stability and dust suppression under
                      continuous heavy vehicle traffic including laden haul
                      trucks.
                    </p>
                  </div>
                  <div className="p-5 bg-dp-elevated border border-dp-border">
                    <h4 className="font-semibold text-sm mb-2">
                      Worker Safety Focus
                    </h4>
                    <p className="text-dp-muted text-sm leading-relaxed">
                      Reduces airborne dust exposure for workers operating in
                      and around haul road corridors and industrial tracks.
                    </p>
                  </div>
                  <div className="p-5 bg-dp-elevated border border-dp-border">
                    <h4 className="font-semibold text-sm mb-2">
                      Durable Protection
                    </h4>
                    <p className="text-dp-muted text-sm leading-relaxed">
                      Extended protection periods reduce the need for frequent
                      re-application even in high-traffic conditions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Enquire About TrackShield
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                  <a
                    href="#"
                    className="btn-ghost flex items-center gap-2"
                    aria-label="Download Safety Data Sheet"
                  >
                    <FileText size={15} />
                    Safety Data Sheet
                  </a>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/trackshield-haul-mining-track/800/650"
                  alt="TrackShield protecting a mining haul road"
                  width={800}
                  height={650}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-dp-amber/10" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-dp-amber" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── SITE REGENERATION ─── */}
      <section id="site-regeneration" className="section-pad bg-dp-bg border-t border-dp-border">
        <div className="container-wide">
          {/* Full-width image header */}
          <AnimateIn>
            <div className="relative mb-14 overflow-hidden">
              <Image
                src="https://picsum.photos/seed/site-regeneration-revegetation/1400/500"
                alt="Mine site rehabilitation and revegetation"
                width={1400}
                height={500}
                className="w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dp-bg/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-dp-amber/10" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-dp-amber" />
              <div className="absolute inset-0 flex items-center p-8 md:p-14">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Plant size={20} className="text-dp-amber" />
                    <p className="label">Site Regeneration</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tightest leading-tight max-w-[18ch] text-dp-text">
                    Returning land to its natural state
                  </h2>
                </div>
              </div>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateIn>
              <p className="text-dp-muted leading-relaxed text-lg mb-6">
                DustPro&apos;s site regeneration service addresses the full
                lifecycle of industrial land use. Where dust management is about
                controlling active sites, site regeneration is about restoring
                what remains after operations are complete.
              </p>
              <p className="text-dp-muted leading-relaxed mb-8">
                We work with mining operators and civil contractors to
                rehabilitate disturbed land, re-establish natural vegetation
                cover, and manage erosion through a programme tailored to each
                site&apos;s conditions, soil type, and local ecology.
              </p>
              <Link href="/contact" className="btn-primary">
                Discuss Site Regeneration
                <ArrowRight size={15} weight="bold" />
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="space-y-0">
                {[
                  {
                    title: "Mine Site Rehabilitation",
                    body: "Post-operational rehabilitation of open cut and underground mine sites, addressing surface stability and regulatory compliance.",
                  },
                  {
                    title: "Vegetation Re-establishment",
                    body: "Restoring natural ground cover appropriate to the local environment, supporting long-term ecological recovery.",
                  },
                  {
                    title: "Erosion Control",
                    body: "Preventing soil loss and sedimentation from disturbed surfaces through proven surface treatment and revegetation.",
                  },
                  {
                    title: "Regulatory Compliance Support",
                    body: "Helping sites meet environmental rehabilitation obligations with documented, proven processes.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 py-6 border-b border-dp-border first:border-t"
                  >
                    <CheckCircle
                      size={18}
                      className="text-dp-amber mt-0.5 shrink-0"
                      weight="fill"
                    />
                    <div>
                      <h4 className="font-semibold mb-1.5">{item.title}</h4>
                      <p className="text-dp-muted text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Safety Data Sheets */}
      <section className="py-16 bg-dp-surface border-t border-dp-border">
        <div className="container-wide">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-dp-elevated border border-dp-border">
              <div>
                <h3 className="text-lg font-bold mb-1">Safety Data Sheets</h3>
                <p className="text-dp-muted text-sm">
                  Safety Data Sheets are available for all DustPro products.
                  Contact us to request the SDS for any product.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Request SDS <FileText size={15} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
