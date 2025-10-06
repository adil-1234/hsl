// pages/careers.js
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Careers() {
  // Example openings — replace with real roles or fetch from an API later
  const openings = [
    { role: 'Machine Reasoning Engineer', location: 'Remote / Bangalore', id: 'mr-01' },
    { role: 'Embedded Systems Engineer (Edge)', location: 'Remote / Europe', id: 'es-02' },
    { role: 'Full-Stack Developer (React / Node)', location: 'Remote / Global', id: 'fe-03' },
    { role: 'Robotics Systems Engineer', location: 'On-site / US', id: 'rb-04' }
  ]

  return (
    <Layout>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/careers-hero.jpg"
            alt="Careers at Humanize Software Labs"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <h1 className="text-3xl font-bold">Careers</h1>
          <p className="mt-4 text-lg max-w-3xl text-white/90 leading-relaxed">
            Join us in building human-like intelligence that is predictable, auditable, and
            purpose-driven. We’re a small, mission-focused team working on SPROSE, a
            knowledge-centric reasoning engine that powers code, robots, edge devices, and more.
          </p>
        </div>
      </div>

      {/* Openings */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-left">

        {/* How to Apply */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-800">How to Apply</h2>
          <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
            Send your CV and a short note about what excites you about SPROSE to
            <a
              href="mailto:careers@humanizesoftware.com"
              className="text-sky-600 ml-1 hover:underline"
            >
              careers@humanize.co.in
            </a>
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-sky-600 text-white rounded hover:bg-sky-700"
            >
              Contact Recruiting
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

