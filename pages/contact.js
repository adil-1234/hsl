// pages/contact.js
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero.jpg"
            alt="Contact Humanize Software Labs"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-left text-white">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-4 text-lg max-w-3xl text-white/90 leading-relaxed">
            Interested in partnering, investing, licensing, or working together? Fill the form
            below or reach out directly, we typically respond within a few business days.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800">Get in touch</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Tell us briefly about your project, partnership interest, or the role you’re applying for.
              If you're contacting about careers, please include a short CV or link to your profile.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="mt-6 space-y-4"
            >
              {/* Netlify-ready hidden input (if you use Netlify forms) */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 block w-full rounded border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Subject</label>
                <input
                  name="subject"
                  className="mt-1 block w-full rounded border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="mt-1 block w-full rounded border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-block px-5 py-3 bg-sky-600 text-white rounded hover:bg-sky-700"
                >
                  Send message
                </button>
                <button
                  type="reset"
                  className="inline-block px-4 py-2 border rounded text-slate-700 hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact details */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">Contact details</h3>
              <ul className="mt-3 text-slate-600 space-y-2">
                <li><strong>Queries:</strong> <a href="mailto:hello@humanizesoftware.com" className="text-sky-600">info@humanize.co.in</a></li>
                <li><strong>Partnerships & Investment:</strong> <a href="mailto:partners@humanizesoftware.com" className="text-sky-600">partners@humanize.co.in</a></li>
                <li><strong>Careers:</strong> <a href="mailto:careers@humanize.co.in" className="text-sky-600">careers@humanize.co.in</a></li>
                <li><strong>Location:</strong>
                #1476, II STAGE, I PHASE, CHRISTAIN COLONY,
                RAJIV NAGAR, MYSORE, KARNATAKA, India - 570019.
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/partners" className="text-sky-600">Interested in partnering →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

