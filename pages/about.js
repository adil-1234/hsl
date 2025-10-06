// pages/about.js
import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About Humanize Software Labs"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <h1 className="text-3xl font-bold">Why do we exist?</h1>
          <p className="mt-4 text-slate-100 max-w-3xl leading-relaxed">
            We exist to humanize machines at various scales. Our existence is supported by our
            organizational structure and culture, our values, mission, and vision, our dedicated
            team, and our investors who provide the fuel for our growth. We put immense effort
            into creating value for all stakeholders and investors through multiple revenue streams.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-left">
        {/* Mission & Vision */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-800">Our Mission</h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
            To build human-like, knowledge-centric frameworks, systems, services, and products that
            function efficiently, effectively and reliably and to deploy them across scales.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-800">Our Vision</h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
            A future where machines are trusted partners to humans with self-awareness and
            moral-centred reasoning at their core, capable not only of reasoning but also of imagining
            and solving real-world problems with clarity and integrity.
          </p>
        </section>

        {/* Culture & Ethics */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-800">Work Culture & Ethics</h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
            We strive to become better versions of ourselves daily by expanding the breadth and depth
            of our knowledge. We prioritise collaboration over competition and focus on building
            knowledge-centric systems that get better with every use. Through our R&amp;D and product
            deployments we generate value, and we are open to licensing our concepts and designs to
            partners where it drives mutual growth and societal benefit.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-800">Our Promise</h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
            The AI is evolving and the best results at this stage come from sharing knowledge and
            working together. We invite investors, partners, clients, and contributors to connect and
            collaborate with us in meaningful ways with the primary intent to build better AI and a
            better world.Our patented SPROSE framework is our step towards shaping that evolution.
          </p>
        </section>
      </div>
    </Layout>
  )
}

