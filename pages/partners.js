// pages/partners.js
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Partners() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/partners-bg.jpg"
            alt="Partners Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <h1 className="text-3xl font-bold">Partners</h1>
          <p className="mt-4 text-lg max-w-3xl text-white/90 leading-relaxed">
            We collaborate with universities, research and educational institutions, edtech firms,
            industry partners, and integrators to deploy SPROSE across domains.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-left">
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          Our existence is supported and driven by our organizational structure and culture, our
          values, mission, and vision, our constituent team, and most importantly by our investors —
          who provide the fuel for this journey. We put immense effort into creating value for all
          stakeholders and investors through multiple revenue streams.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl">
          Contact us to explore partnerships and investment opportunities. 
        </p>
      </div>
    </Layout>
  )
}

