import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Users2, Award } from "lucide-react";
import { companyStats } from "@/lib/sites-data";

export const metadata = {
  title: "About — Summer Real Estate",
  description:
    "Diaspora-led real estate development bridging Ethiopians abroad with home — built on trust, driven by connection.",
};

const principles = [
  {
    icon: Compass,
    title: "Strategic Locations in Addis Ababa",
    body: "Every project is positioned in prime areas with strong growth potential and lifestyle amenities.",
  },
  {
    icon: Users2,
    title: "Designed for Diaspora Needs",
    body: "From flexible payment plans to transparent processes, we understand diaspora investor priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency in Every Step",
    body: "Clear communication, honest dealings, and verified accountability throughout the process.",
  },
  {
    icon: Award,
    title: "Proven Project Delivery",
    body: "Our completed projects are a testament to our commitment to quality and on-time delivery.",
  },
];

const team = [
  {
    name: "Samuel",
    role: "Founder & CEO",
    bio: "Visionary leader with 25+ years in premium real estate development.",
  },
  {
    name: "Alemu",
    role: "Chief Architecture Officer",
    bio: "Award-winning architect specializing in luxury residential design.",
  },
  {
    name: "Abdu",
    role: "Head of Operations",
    bio: "Expert in project management and sustainable building practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="contour-field" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <span className="font-body text-xs uppercase tracking-widest2 text-sand">
            Our Story
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
            Built on Trust. Driven by Connection.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
            Summer Real Estate is a diaspora-led company with roots in
            Dallas, USA, and a strong presence in Addis Ababa. We exist to
            bridge the gap between Ethiopians living abroad and the
            opportunity to own property back home with confidence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <span className="font-body text-xs uppercase tracking-widest2 text-sand">
                Our Mission
              </span>
              <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
                From Dallas to Addis
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-body text-[15px] leading-relaxed text-muted">
                Our team combines international standards of communication
                and transparency with local expertise in development and
                delivery. We guide diaspora clients through a process that is
                clear, structured, and reliable — so owning a home in
                Ethiopia feels just like being home.
              </p>
              <p className="mt-6 font-display text-lg italic text-sand-dim">
                &ldquo;ባላገር በሃገር&rdquo;
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="border-t border-hairline pt-5">
                  <h3 className="font-display text-base text-ivory">
                    Transparency in Every Step
                  </h3>
                  <p className="mt-2 font-body text-sm text-muted">
                    Clear communication and honest dealings throughout.
                  </p>
                </div>
                <div className="border-t border-hairline pt-5">
                  <h3 className="font-display text-base text-ivory">
                    Proven Delivery
                  </h3>
                  <p className="mt-2 font-body text-sm text-muted">
                    Track record of completed projects and satisfied clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core principles */}
      <section className="border-b border-hairline bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <span className="font-body text-xs uppercase tracking-widest2 text-sand">
            How We Work
          </span>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
            Core Principles
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 border-t border-hairline pt-6"
              >
                <p.icon className="h-5 w-5 shrink-0 text-sand" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg text-ivory">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <span className="font-body text-xs uppercase tracking-widest2 text-sand">
            The Team
          </span>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
            Leadership Team
          </h2>
          <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-muted">
            Decades of combined experience in luxury residential development
            and real estate innovation.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name}>
                <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-hairline bg-raised">
                  <Users2
                    className="h-8 w-8 text-sand-dim"
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="mt-5 font-display text-lg text-ivory">
                  {member.name}
                </h3>
                <p className="font-body text-xs uppercase tracking-widest2 text-sand">
                  {member.role}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-hairline bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <span className="font-display text-3xl text-ivory sm:text-4xl">
                9
              </span>
              <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                Unique Typologies
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-ivory sm:text-4xl">
                {companyStats.unitsDelivered}+
              </span>
              <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                Total Units
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-ivory sm:text-4xl">
                {companyStats.premiumProjects}
              </span>
              <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                Flagship Projects
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-ivory sm:text-4xl">
                {companyStats.satisfactionRate}
              </span>
              <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
          <h2 className="font-display text-3xl text-ivory sm:text-4xl">
            Ready to Join Our Community?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-[15px] text-muted">
            Explore our developments and discover the perfect home for your
            lifestyle.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
