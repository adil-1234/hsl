// pages/signup.js
import Layout from '../components/Layout'

export default function Signup() {
  return (
    <Layout>
      <div className="max-w-md mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm text-slate-700">Full name</span>
            <input
              className="w-full mt-1 p-3 border rounded"
              type="text"
              placeholder="Your full name"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">Email</span>
            <input
              className="w-full mt-1 p-3 border rounded"
              type="email"
              placeholder="you@company.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">Password</span>
            <input
              className="w-full mt-1 p-3 border rounded"
              type="password"
              placeholder="Create a password"
              required
            />
          </label>

          <button
            type="button"
            className="w-full px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Create account
          </button>
        </form>
      </div>
    </Layout>
  )
}

