import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight, CheckCircle, Leaf, Globe, Medal } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About",
  description:
    "DustPro Pty Ltd - Australian owned dust management company established in 2009 in the southern coalfields of NSW.",
};

const values = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    body: "All products are biodegradable and formulated to meet Australia's strict environmental guidelines. We never compromise the land we work on.",
  },
  {
    icon: Medal,
    title: "Australian Made",
    body: "Proudly manufactured in New South Wales. Every product is developed, tested, and produced on Australian soil.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    body: "While our roots are in NSW coalfields, we serve local, national, and international clients wherever dust management is critical.",
  },
];

const timeline = [
  {
    year: "2009",
    event: "DustPro Pty Ltd founded in the southern coalfields of New South Wales, initially serving underground coal mining operations.",
  },
  {
    year: "2010s",
    event: "Product range expanded beyond coal mining to serve open cut mines, civil construction, and road maintenance sectors.",
  },
  {
    year: "Today",
    event: "Five specialised products and a site regeneration service, serving clients across Australia and internationally.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-end bg-dp-bg pt-[72px]">
        <div className="container-wide pb-16 md:pb-20">
          <AnimateIn>
            <p className="label mb-6">About DustPro</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tightest leading-[1.0] max-w-[16ch]">
              Born in the coalfields.{" "}
              <span className="text-dp-amber">Built for Australia.</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Story section - split */}
      <section className="section-pad bg-dp-surface border-t border-dp-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <div className="relative">
                <Image
                  src="https://picsum.photos/seed/nsw-coalfields-mining/800/700"
                  alt="NSW southern coalfields mining operations"
                  width={800}
                  height={700}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-dp-amber/10" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-dp-amber" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tightest leading-tight">
                  Where it started
                </h2>
                <p className="text-dp-muted leading-relaxed">
                  DustPro Pty Ltd was established in 2009, located within the
                  southern coalfields of New South Wales. Our founders
                  recognised a clear need: underground coal mining operations
                  required dust management solutions that were both effective
                  and environmentally sound.
                </p>
                <p className="text-dp-muted leading-relaxed">
                  Starting from that specific, demanding origin, DustPro
                  developed products that could handle the harshest conditions.
                  Over time, those same formulations proved equally effective
                  across open cut mining, civil construction, road maintenance,
                  and agricultural applications.
                </p>
                <p className="text-dp-muted leading-relaxed">
                  Today, DustPro Pty Ltd is an Australian owned and operated
                  company servicing local, national, and international clients
                  for their dust management requirements. Every product in our
                  range is manufactured in Australia and conforms to the strict
                  guidelines governing environmental practices.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-dp-bg">
        <div className="container-wide">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tightest mb-14">
              Our journey
            </h2>
          </AnimateIn>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimateIn key={item.year} delay={i * 0.1}>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 md:gap-16 py-8 border-b border-dp-border first:border-t items-start">
                  <span className="text-dp-amber font-bold font-mono text-lg md:text-xl pt-1">
                    {item.year}
                  </span>
                  <p className="text-dp-muted leading-relaxed">{item.event}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-dp-surface border-t border-dp-border">
        <div className="container-wide">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tightest mb-14 max-w-[22ch]">
              What we stand for
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <AnimateIn key={val.title} delay={i * 0.1}>
                <div className="p-8 bg-dp-elevated border border-dp-border flex flex-col gap-5">
                  <val.icon size={28} className="text-dp-amber" />
                  <div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
                      {val.title}
                    </h3>
                    <p className="text-dp-muted text-sm leading-relaxed">
                      {val.body}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="section-pad bg-dp-bg border-t border-dp-border">
        <div className="container-wide text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tightest mb-6">
              Let&apos;s talk about your site
            </h2>
            <p className="text-dp-muted max-w-[40ch] mx-auto mb-8">
              Our team is ready to recommend the right dust management product
              for your specific conditions and requirements.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} weight="bold" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
