"use client";

import Image from "next/image";
import { Reveal } from "@/app/components/ui/reveal";
import { Parallax } from "@/app/components/ui/media";
import { LeafIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";

export function AboutMissionVision() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-32">
      {/* full-bleed parallax band behind header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden">
        <Parallax strength={50} className="h-full">
          <div className="relative h-[130%] w-full">
            <Image src={img(PHOTO.produce, 1600)} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-deep-green/60 via-cream/50 to-cream" />
          </div>
        </Parallax>
      </div>

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-2xl pt-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pure-white/90 px-4 py-1.5 text-caption font-bold uppercase tracking-[0.16em] text-deep-green shadow-[var(--shadow-float)]">
            What Drives Us
          </span>
          <h2 className="mt-5 text-h1">Purpose, Mission &amp; Vision</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Mission — deep green feature */}
          <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-deep-green p-9 text-cream shadow-[var(--shadow-card)] sm:p-12">
            <div className="pointer-events-none absolute -bottom-16 -right-12 h-64 w-64 rounded-full bg-natural-green/25 blur-3xl" />
            <LeafIcon className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 text-white/10" />
            <div className="relative">
              <span className="text-caption font-bold uppercase tracking-[0.16em] text-natural-green">
                Our Mission
              </span>
              <p className="mt-6 font-serif text-h3 leading-tight text-cream">
                To nourish lives and transform health outcomes by creating premium natural products that are
                accessible to everyone through quality, excellence and innovation.
              </p>
            </div>
          </Reveal>

          {/* Vision — orange-accented cream feature */}
          <Reveal
            delay={0.1}
            className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-pure-white p-9 shadow-[var(--shadow-card)] ring-1 ring-hairline sm:p-12"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-earth-orange/10 blur-2xl" />
            <div className="relative">
              <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
                Our Vision
              </span>
              <p className="mt-6 font-serif text-h3 leading-tight text-charcoal">
                To become Africa&rsquo;s most trusted plant-based food company — inspiring healthier lifestyles
                through natural innovation, responsible manufacturing and products people genuinely trust.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Purpose — full-width band */}
        <Reveal delay={0.05} className="mt-6">
          <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-light-sage px-8 py-10 text-center shadow-[var(--shadow-card)] sm:px-14 sm:py-12">
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
              Our Purpose
            </span>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-h4 leading-snug text-deep-green">
              To make healthy, plant-based nutrition accessible to every home by creating products that are
              naturally nourishing, scientifically sound and consistently premium.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
