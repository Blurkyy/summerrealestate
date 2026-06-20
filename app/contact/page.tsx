import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/lib/sites-data";

export const metadata = {
  title: "Contact — Summer Real Estate",
  description:
    "Get in touch with Summer Real Estate. Our team is ready to help you find your perfect home in Addis Ababa.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="contour-field" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <span className="font-body text-xs uppercase tracking-widest2 text-sand">
            Reach Us
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
            Have questions about our developments? Our team is ready to help
            you find your perfect home.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
            {/* Contact info */}
            <div className="lg:col-span-4">
              <h2 className="font-body text-xs uppercase tracking-widest2 text-sand">
                Contact Information
              </h2>

              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-sand" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-lg text-ivory">Phone</p>
                    <a
                      href={contactInfo.phoneHref}
                      className="font-body text-sm text-muted transition-colors hover:text-sand"
                    >
                      {contactInfo.phone}
                    </a>
                    <p className="mt-1 font-body text-xs text-muted">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-sand" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-lg text-ivory">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-body text-sm text-muted transition-colors hover:text-sand"
                    >
                      {contactInfo.email}
                    </a>
                    <p className="mt-1 font-body text-xs text-muted">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-sand" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-lg text-ivory">Office</p>
                    <p className="font-body text-sm text-muted">
                      {contactInfo.address[0]}
                      <br />
                      {contactInfo.address[1]}
                      <br />
                      {contactInfo.address[2]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-hairline pt-8">
                <h3 className="font-body text-xs uppercase tracking-widest2 text-sand">
                  Quick Access
                </h3>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a
                      href="/projects"
                      className="inline-flex items-center gap-1.5 font-body text-sm text-muted transition-colors hover:text-sand"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      View Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="inline-flex items-center gap-1.5 font-body text-sm text-muted transition-colors hover:text-sand"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
