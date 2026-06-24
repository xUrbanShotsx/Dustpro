import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import { MapPin, Envelope, Clock } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DustPro Pty Ltd for dust management enquiries. Located in Warilla NSW, serving clients across Australia.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-[72px] bg-dp-bg border-b border-dp-border">
        <div className="container-wide py-16 md:py-20">
          <AnimateIn>
            <p className="label mb-5">Contact</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tightest leading-[1.0] max-w-[18ch]">
              Talk to our team.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-dp-muted max-w-[48ch] leading-relaxed mt-6">
              Whether you need help selecting the right product, want a quote,
              or have a technical question about your site, we&apos;re here to
              help.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-dp-bg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-start">
            {/* Form */}
            <AnimateIn>
              <ContactForm />
            </AnimateIn>

            {/* Info */}
            <AnimateIn delay={0.15}>
              <div className="space-y-8">
                {/* Address */}
                <div className="p-7 bg-dp-surface border border-dp-border space-y-5">
                  <h3 className="font-semibold text-sm uppercase tracking-widest text-dp-muted font-mono">
                    Office
                  </h3>
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-dp-amber mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium mb-1">DustPro Pty Ltd</p>
                      <p className="text-dp-muted text-sm leading-relaxed">
                        50 Woodford Avenue
                        <br />
                        Warilla NSW 2528
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Envelope size={18} className="text-dp-amber mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href="mailto:info@dustpro.com.au"
                        className="text-dp-muted text-sm hover:text-dp-text transition-colors"
                      >
                        info@dustpro.com.au
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="relative overflow-hidden bg-dp-surface border border-dp-border" style={{ height: "220px" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <MapPin size={28} className="text-dp-amber" />
                    <p className="text-dp-muted text-sm text-center px-4">
                      Warilla, NSW 2528
                      <br />
                      <span className="text-xs text-dp-dim">
                        Southern NSW, Australia
                      </span>
                    </p>
                    <a
                      href="https://maps.google.com/?q=Warilla+NSW+2528"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-dp-amber hover:underline mt-1"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Response */}
                <div className="p-7 bg-dp-elevated border border-dp-border flex items-start gap-4">
                  <Clock size={18} className="text-dp-amber shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Response Time</p>
                    <p className="text-dp-muted text-sm leading-relaxed">
                      We aim to respond to all enquiries within one business
                      day. For urgent site requirements, please note this in
                      your message.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
