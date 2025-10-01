// pages/login.js
import Layout from '../components/Layout'

export default function Login() {
  return (
    <Layout>
      <div className="max-w-md mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <form className="mt-8 space-y-4">
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
              placeholder="••••••••"
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/contact" className="text-sm text-sky-600">Need help?</a>
          </div>

          <button
            type="button"
            className="w-full px-6 py-3 bg-sky-600 text-white rounded hover:bg-sky-700"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}

