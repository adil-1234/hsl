import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export default function Sprose() {
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default
      AOS.init({ duration: 800, once: true })
    })()
  }, [])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/sprose-hero.jpg"
            alt="SPROSE — Humanized Intelligence"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-sky-900/40 to-sky-500/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28 text-left">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-xl"
            data-aos="fade-down"
          >
            THE DESIGN OF SPROSE
          </h1>
          <p
            className="mt-4 text-lg text-slate-100 max-w-3xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SPROSE is a layered, modular, knowledge-centric, deterministic, reliable, and highly
            efficient framework that can be used to build human-centric applications and additionally
            can be adapted to build LLMs and AI agents.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 text-left space-y-10">

        {/* SPROSE - A Humanizer */}
        <section data-aos="fade-up">
          <div className="bg-gradient-to-br from-sky-100 via-sky-50 to-sky-200/50 backdrop-blur-lg rounded-xl p-8 border border-sky-300/50 shadow-md">
            <h2 className="text-2xl font-semibold text-sky-800 mb-3">SPROSE A Humanizer</h2>
            <p className="text-slate-700 leading-relaxed">
              Its knowledge-centric design reflects the qualities of a highly knowledgeable and
              intelligent human being, one who thinks in a structured way, learns dynamically,
              and responds immediately to real-world situations, much like an intelligent person
              does while learning.
            </p>

            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1.5">
              <li>Human language</li>
              <li>The solutions and logic to problems</li>
              <li>Programming languages</li>
            </ul>
          </div>
        </section>

        {/* Philosophy */}
        <section data-aos="fade-up" data-aos-delay="100">
          <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100 rounded-xl p-8 border border-sky-200 shadow-md">
            <h2 className="text-2xl font-semibold text-sky-800 mb-3">Our Philosophy</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Everything built around us exists to serve humans in a meaningful way. Their purpose
              gives them meaning, which is why everything is ultimately human-centric, that is the
              real meaning of “meaning.”
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              Nature functions in accordance with the will of God, it distorts only because of our
              wrong actions. Otherwise, it works to preserve life and acts morally correct by
              default, its actions are morality-centric. This is the true nature of nature.
            </p>

            <p className="text-slate-700 mb-3">From this understanding, several principles follow:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1.5">
              <li>AI should be human-centric.</li>
              <li>A wise human is knowledge-centric, so AI must be designed as a knowledge-centric system.</li>
              <li>True knowledge is always morality-centric and meant to do what is right, therefore, an AI knowledge base should also be morality-centric.</li>
              <li>To ensure its actions remain morally correct, AI must have self-awareness.</li>
              <li>Self-awareness emerges in machines that imitate human thinking and actions, which means we must humanize machines to make them self-aware.</li>
              <li>To humanize machines, we need the SPROSE framework.</li>
            </ul>
          </div>
        </section>

        {/* Why SPROSE Matters + Mission & Vision */}
        <section data-aos="fade-up" data-aos-delay="150">
          <div className="bg-gradient-to-br from-sky-100 via-white to-sky-200 rounded-xl p-8 border border-sky-300 shadow-md">
            <h2 className="text-2xl font-semibold text-sky-800 mb-3">
              Philosophy to Our Mission and Vision
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Therefore, the SPROSE framework should run at the core of every intelligent computing device.
              So this explains our Mission and Vision.
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              Our Mission to humanize machines so they can think and act like trustworthy,
              knowledgeable humans and to achieve this consistently across scales, from small
              devices to large systems.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Our Vision to evolve these humanized machines into systems so knowledgeable that they embody
              the potential of Cumulative Human Intelligence, are self-aware, and act morally in
              all their decisions and actions.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100 rounded-xl p-8 border border-sky-200 shadow-md">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold text-sky-800 mb-3">Collaborate on SPROSE</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We are building humanized, knowledge-centric AI for real-world use from education to
                healthcare, finance to robotics. If you are a researcher, partner, or investor, let’s talk.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 shadow-md transition-all">
                  Contact Us
                </Link>

                <a
                  href="mailto:partners@humanize.co.in"
                  className="inline-block px-6 py-3 border border-sky-300 text-sky-800 rounded-lg hover:bg-sky-100 transition-all"
                >
                  partners@humanize.co.in
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

{/* Footer Tagline */}
<footer className="py-12 bg-gradient-to-r from-sky-800 to-sky-600 text-center text-white">
  <p className="font-bold tracking-wide text-lg sm:text-xl md:text-2xl drop-shadow-md">
    HUMANIZING IS ABOUT TEACHING MACHINES PURPOSE
  </p>
</footer>

    </Layout>
  )
}

