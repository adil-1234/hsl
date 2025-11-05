// pages/MentorShowcase.js
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export default function MentorShowcase() {
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default
      AOS.init({ duration: 1000, once: true })
    })()
  }, [])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mentor.png"
            alt="SPROSE Mentor — Where Thought Becomes Code"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-sky-900/40" />
        </div>

        {/* Hero Text */}
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <div data-aos="fade-down">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow-xl tracking-wide">
              SPROSE AS A CODE GENERATOR
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="mt-4 text-lg text-slate-100 max-w-3xl leading-relaxed">
              Watch how SPROSE transforms human reasoning into executable intelligence, guiding users from plain English to structured pseudocode and fully working source code.  
              No syntax, No confusion, Just logic in motion.
            </p>
          </div>
        </div>

        {/* Animated Logic Flow */}
        <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-r from-sky-800/60 via-sky-400/40 to-sky-800/60 backdrop-blur-sm">
          <p className="text-center text-slate-100 text-sm tracking-widest animate-logicflow">
            UNDERSTAND • STRUCTURE • GENERATE • LEARN • REASON • EXECUTE
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8 text-left space-y-8">
        {/* Intro */}
        <section className="bg-white rounded-lg p-6 shadow-sm border" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">SPROSE - Transforming thought into executable code</h2>
          <p className="text-slate-700 leading-relaxed max-w-prose">
            SPROSE Mentor empowers anyone, even without programming knowledge to express logic, create algorithms, 
            and execute code effortlessly. It operates through structured modes that teach, create, and reason dynamically.  
            Below are live demos showing this transformation from intent to intelligence.
          </p>
        </section>

        {/* Demo 1 */}
        <section className="bg-slate-50 rounded-lg p-6 border" data-aos="fade-right">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/gen.jpg"
                alt="Generate Code from English"
                width={600}
                height={350}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">1️⃣ Generate Code from problem description </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                SPROSE interprets plain English to generate full source code.   
                no syntax, only reasoning.  
                Code, born directly from thought.
              </p>
              <Link
                href="https://youtu.be/DDWMjVqsup8"
                target="_blank"
                className="inline-block px-5 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
              >
                ▶ Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Demo 2 */}
        <section className="bg-white rounded-lg p-6 border" data-aos="fade-left">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/create.jpg"
                alt="Create Pseudocode from English statements"
                width={600}
                height={350}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">2️⃣ Create Pseudocode from English </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Watch SPROSE convert structured English into clean pseudocode,
                e.g., <strong>Selection Sort</strong> expressed as:  
                <em>“Repeat n times with i as counter…”</em>  
                Logic becomes readable, modular, and ready for code generation.
              </p>
              <Link
                href="https://youtu.be/eGAtP_2oy5Y"
                target="_blank"
                className="inline-block px-5 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
              >
                ▶ Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Demo 3 */}
        <section className="bg-slate-50 rounded-lg p-6 border" data-aos="fade-right">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/learn.jpg"
                alt="Dynamic Learning and Code Generation"
                width={600}
                height={350}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">3️⃣ Learn New Info & Generate Code</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                SPROSE dynamically understands English statements, learns new information on the fly, and instantly transforms it into structured pseudocode and executable source code.
It doesn’t just respond, it reasons in real time.
              </p>
              <Link
                href="https://youtu.be/yn1JLMEZNjw"
                target="_blank"
                className="inline-block px-5 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
              >
                ▶ Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-white rounded-lg p-6 border" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">🚀 Coming Soon</h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
            <li><strong>Explain Mode:</strong> Enables user to learn how to devise algorithms step-by-step in natural English.</li>
            <li><strong>Execute & Debug Mode:</strong> Enables user to run and understand your code’s logic flow in real time.</li>
          </ul>
        </section>

        
      </main>

{/* Custom SPROSE Animations */}
<style jsx>{`
  /* Main Logicflow Animation (subtle shimmer + scale) */
  @keyframes logicflow {
    0%, 100% {
      opacity: 0.65;
      transform: scale(0.98);
    }
    50% {
      opacity: 1;
      transform: scale(1.02);
    }
  }

  /* SPROSE Pulse Glow (soft radiance) */
  @keyframes pulse-sprose {
    0%, 100% {
      transform: scale(1);
      opacity: 0.85;
    }
    50% {
      transform: scale(1.06);
      opacity: 1;
    }
  }

  /* Combined Animation Classes */
  .animate-logicflow {
    animation: logicflow 6s ease-in-out infinite;
    white-space: nowrap;
    overflow: hidden;
  }

  .animate-pulse-sprose {
    animation: pulse-sprose 4s ease-in-out infinite;
    filter: drop-shadow(0 0 25px rgba(70, 130, 180, 0.4));
  }

  /* Global Safeguards — remove all scroll overflows */
  section, main {
    overflow-x: hidden;
  }
`}</style>

    </Layout>
  )
}

