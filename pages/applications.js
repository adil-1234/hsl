// pages/applications.js
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Applications() {
  const items = [
    [
      'EdTech',
      'SPROSE enables the generation of highly structured, deterministic, and executable code that can be compiled, run, tested, and improved. It pairs code with automatically generated test cases and supports step-by-step execution, giving learners the experience of an expert developer guiding them in real time.'
    ],
    [
      'Developers',
      'SPROSE enables developers to create structured, deterministic, modular, and executable code that is highly readable, understandable, and maintainable. It can generate code in any programming language with high efficiency and without requiring massive datasets or GPUs.'
    ],
    [
      'Edge Devices & Robots',
      'SPROSE enables edge devices and robots to learn dynamically during operation and apply learnings instantly. It enables offline operation using the current knowledge base, connects to servers only when required, runs with high memory efficiency, and understands/responds in both text and voice.'
    ],
    [
      'Plug-and-Play Devices',
      'SPROSE can run embedded on plug-and-play devices, enabling them to function like edge devices with features adapted to their hardware. When embedded, SPROSE supports offline operation using the device’s existing knowledge base and delivers lightweight, efficient inference.'
    ],
    [
      'Quantum Computers',
      'SPROSE enables quantum computers to directly translate English statements into executable qubit code, allowing today’s systems to run user instructions more intuitively. This bridges natural language with existing control hardware, making interaction with quantum devices accessible and immediately usable.'
    ],
    [
      'Neural Links',
      'SPROSE enables brain–machine interfaces to become safer, more natural, and more effective by acting as the reasoning engine between human thoughts and machine actions.'
    ],
    [
      'Operating System Wrappers',
      'SPROSE enables the creation of intelligent operating system wrappers where users can give instructions in plain English text or voice commands, removing the need to learn shell scripting for daily automation and making everyday computing more natural.'
    ],
    [
      'Future Extensions',
      'SPROSE enables future advancements including building an English-language compiler, powering super-intelligent GPT-like front ends, laying foundations for ethical and intelligent robotics, and enabling space-technology applications via human-like reasoning abilities.'
    ]
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/applications-robot.jpg"
            alt="Applications Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <h1 className="text-3xl font-bold">Applications of SPROSE</h1>
          <p className="mt-4 text-lg max-w-3xl text-white/90 leading-relaxed">
            SPROSE is designed as a foundational reasoning framework. Here are some of the
            primary domains where it already demonstrates clear impact.
          </p>
        </div>
      </div>

      {/* Application Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(([t, s]) => (
            <div
              key={t}
              className="p-6 border rounded bg-white shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-lg font-semibold text-slate-800">{t}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

