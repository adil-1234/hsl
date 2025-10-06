// pages/technology.js
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Technology() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/tech-hero.jpg"
            alt="Technology hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <h1 className="text-3xl font-bold">SPROSE — The Heart of Every Computing Device</h1>
          <p className="mt-4 text-lg max-w-3xl text-white/90 leading-relaxed">
            SPROSE is our proprietary patented knowledge-centric reasoning framework that sits at
            the core of all our products and services. This powerful framework understands human
            intentions, learns, memorizes, and reuses knowledge and logic in its memory to respond
            like a human. Unlike LLMs, which are language-centric, probabilistic, and
            non-deterministic, SPROSE is structured, deterministic, and knowledge-centric — ensuring
            predictable and reliable outputs without hallucination.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 text-left">
        {/* Code Generation Use Case */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-800">SPROSE as a Code Generator</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            To understand the real benefits of SPROSE, consider its application in code generation.
            This use case demonstrates how SPROSE overcomes the
            real limitations of today’s AI tools and highlights its human-like intelligence in
            action.
          </p>
          {/* Problem */}
          <div className="mt-10">
            <h3 className="text-xl text-slate-800 font-semibold">The Problem</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Current code generators waste memory, depend on massive datasets, and cannot adapt in
              real time. Their logic is tightly bound to language syntax, making them
              non-interactive, non-deterministic, and unable to improve from repeated use. They
              “guess” code instead of reasoning like a human.
            </p>
          </div>

          {/* Solution */}
          <div className="mt-10">
            <h3 className="text-xl text-slate-800 font-semibold">The SPROSE Solution</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              SPROSE behaves more like a human developer. It separates logic from syntax, learns
              from English, pseudocode, or source code, and produces deterministic, reusable
              results. It adapts instantly to new inputs, remembers past logic like human
              experience, and grows smarter with every interaction, all while running efficiently
              without massive datasets or GPUs.
            </p>
          </div>
        </section>

        {/* The Bigger Picture */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-800">The Bigger Picture</h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
            Code generation is only one example. By solving this problem in a human-like,
            deterministic way, SPROSE proves its ability to handle reasoning across domains from
            IoT devices and robots to operating systems and even quantum computing. Wherever
            predictable, efficient, and human-like intelligence is needed, SPROSE delivers.
          </p>
        </section>

        {/* Core Innovations */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-800">Core Innovations</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border rounded-lg bg-white">
              <h3 className="text-lg font-medium text-slate-800">Deterministic Reasoning</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                SPROSE executes step-by-step logic stored in structured memory. Outputs are
                reproducible, auditable, and free from probabilistic hallucination.
              </p>
            </div>

            <div className="p-5 border rounded-lg bg-white">
              <h3 className="text-lg font-medium text-slate-800">Knowledge-first Architecture</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We prioritize knowledge representations and explicit inference rules over
                black-box statistical models. This enables explainability and long-term
                composability.
              </p>
            </div>

            <div className="p-5 border rounded-lg bg-white">
              <h3 className="text-lg font-medium text-slate-800">Ultra Efficient Edge Execution</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                SPROSE modules are optimized for low memory and CPU footprints so they can run
                offline on IoT devices, robots, and embedded controllers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

