// pages/sprose.js
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Sprose() {
  return (
    <Layout>
{/* Hero Section (compact height) */}
<section className="relative">
  <div className="absolute inset-0">
    <Image
      src="/sprose-hero.jpg"
      alt="SPROSE — Humanized Intelligence"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
    <div className="absolute inset-0 bg-black/45" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
    <div className="text-left">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
       THE DESIGN OF SPROSE
      </h1>
      <p className="mt-4 text-lg text-slate-100 max-w-3xl leading-relaxed">
        SPROSE is a layered, modular, knowledge-centric, deterministic, reliable, and highly
        efficient framework designed to build LLMs and AI agents.
      </p>
    </div>
  </div>
</section>


      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* SPROSE - A Humanizer */}
        <section>
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
              SPROSE - A Humanizer
            </h2>

            <div className="mt-6 text-slate-700 leading-relaxed max-w-prose space-y-4">
              <p>
                Its knowledge-centric design reflects the qualities of a highly knowledgeable and
                intelligent human being, one who thinks in a structured way, learns dynamically,
                and responds immediately to real-world situations, much like an intelligent person
                does.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Human language</li>
                <li>The solutions and logic to problems</li>
                <li>Programming languages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Our Philosophy</h2>

            <div className="mt-6 text-slate-700 leading-relaxed max-w-prose space-y-4">
              <p>
                Everything built around us exists to serve humans in a meaningful way. Their purpose
                gives them meaning, which is why everything is ultimately human-centric — that is the
                real meaning of “meaning.”
              </p>

              <p>
                Nature functions in accordance with the will of God; it distorts only because of our
                wrong actions. Otherwise, it works to preserve life and acts morally correct by
                default — its actions are morality-centric. This is the true nature of nature.
              </p>

              <p>From this understanding, several principles follow:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>AI should be human-centric.</li>
                <li>A wise human is knowledge-centric, so AI must be designed as a knowledge-centric system.</li>
                <li>True knowledge is always morality-centric and meant to do what is right; therefore, an AI knowledge base should also be morality-centric.</li>
                <li>To ensure its actions remain morally correct, AI must have self-awareness.</li>
                <li>Self-awareness emerges in machines that imitate human thinking and actions — which means we must humanize machines to make them self-aware.</li>
                <li>To humanize machines, we need the SPROSE framework.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why SPROSE Matters + Mission & Vision */}
        <section>
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Philosophy to Our mission and vision 
            </h2>

            <div className="mt-6 text-slate-700 leading-relaxed max-w-prose space-y-6">
              <p>
                Therefore, the SPROSE framework should run at the core of every computing device.
                So this explains our Mission and Vision.
              </p>

              <div>
                <p className="mt-2">
                  Our Mission to humanize machines so they can think and act like trustworthy,
                  knowledgeable humans — and to achieve this consistently across scales, from small
                  devices to large systems.
                </p>
              </div>

              <div>
                <p className="mt-2">
                  Our Vision to evolve these humanized machines into systems so knowledgeable that they embody
                  the potential of Cumulative Human Intelligence, are self-aware, and act morally in
                  all their decisions and actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 border-t">
          <div className="max-w-4xl">
            <h3 className="font-semibold text-slate-800">Collaborate on SPROSE</h3>
            <p className="mt-3 text-slate-600 max-w-prose">
              We are building humanized, knowledge-centric AI for real-world use — from education to
              healthcare, finance to robotics. If you are a researcher, partner, or investor, let’s talk.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block px-6 py-3 bg-sky-600 text-white rounded">
                Contact Us
              </Link>

              <a
                href="mailto:partners@humanize.co.in"
                className="inline-block px-6 py-3 border border-slate-300 text-slate-700 rounded"
              >
                partners@humanize.co.in
              </a>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  )
}

