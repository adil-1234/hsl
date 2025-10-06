// pages/index.js
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/home-hero.jpg"
            alt="Humanizing machines"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Humanizing machines
          </h2>
          <p className="mt-4 text-lg text-slate-100 max-w-3xl">
            By humanizing machines we mean making machines learn, memorise and use knowledge
            like humans, decode user statements and understand intentions and apply logic in its
            knowledge base to respond to user queries and commands.
          </p>
          <p className="mt-3 text-lg text-slate-100 max-w-3xl">
            For humanizing machines we make use of a powerful, patented framework called SPROSE.
            The acronym stands for Structured Problem Solving Engine. Using SPROSE we build
            trustworthy, production-ready intelligence for code, robots, agents, and
            connected devices.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/applications" className="px-6 py-3 bg-sky-600 text-white rounded">
              Explore applications
            </Link>
            <Link href="/partners" className="px-6 py-3 border border-white/20 text-white rounded">
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* SPROSE Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800">
          SPROSE - Structured Problem Solving Engine
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">What SPROSE does</h3>
            <p className="mt-3 text-slate-600">
              SPROSE models human intentions, encodes step-by-step logic, and stores it in
              structured memory. The system executes deterministic reasoning to produce
              predictable, verifiable results, unlike probabilistic LLM outputs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why it matters</h3>
            <p className="mt-3 text-slate-600">
              When machines make decisions in critical systems like robots, aerospace, healthcare,
              or finance,predictability and explainability are non-negotiable. SPROSE gives
              engineers a reasoning engine they can test, audit, and deploy with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Snapshot Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-slate-800">
              Applications snapshot
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border rounded">
              <h4 className="font-semibold">Hallucination-Free Code Generation</h4>
              <p className="text-sm text-slate-600 mt-2">
                Reliable code for training, IDEs, and software production.
              </p>
            </div>
            <div className="p-5 border rounded">
              <h4 className="font-semibold">Robotics</h4>
              <p className="text-sm text-slate-600 mt-2">
                Robots that learn, adapt, reason and extend their logic safely.
              </p>
            </div>
            <div className="p-5 border rounded">
              <h4 className="font-semibold">AI Agents & IoT</h4>
              <p className="text-sm text-slate-600 mt-2">
                Agents that understand goals; devices that decide at the edge.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/applications" className="text-sky-600">
              See full list of applications →
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-center text-slate-800">
          Credibility
        </h3>
        <ul className="mt-4 list-disc ml-5 text-slate-600">
          <li>
            <span className="font-semibold">Patent filed:</span> SPROSE is a proprietary, patent-protected core framework.
          </li>
          <li className="mt-2">
            Research & engineering first: Designed for reliability, explainability, reproducibility, and safety.
          </li>
          <li className="mt-2">
            Built to scale: From single devices to enterprise deployments and billions of endpoints.
          </li>
        </ul>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="font-semibold">
            Interested in investing, partnering, licensing, or joining the team?
          </h4>
          <div className="mt-4">
            <Link href="/contact" className="px-6 py-3 bg-sky-600 text-white rounded">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center">Get Started</h2>
          <p className="mt-2 text-center text-slate-600">
            Create an account or log in to access more.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Login Card */}
            <div className="p-6 border rounded-lg shadow-sm flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold">Already have an account?</h3>
              <p className="mt-2 text-slate-600">
                Log in to continue using our platform.
              </p>
              <Link
                href="/login"
                className="mt-4 inline-block px-6 py-3 bg-sky-600 text-white rounded hover:bg-sky-700"
              >
                Login
              </Link>
            </div>

            {/* Signup Card */}
            <div className="p-6 border rounded-lg shadow-sm flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold">New here?</h3>
              <p className="mt-2 text-slate-600">
                Sign up to start exploring Humanize Software Labs.
              </p>
              <Link
                href="/signup"
                className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
