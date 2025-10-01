import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Layout({ children, hideAccount = false }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  function toggleMenu() {
    setOpen((v) => !v)
  }

  function closeMenu() {
    setOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Humanize Software Labs Logo"
                width={56}
                height={56}
                priority
              />
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <Link href="/" className="hover:text-sky-600">Home</Link>
              <Link href="/about" className="hover:text-sky-600">About</Link>
              <Link href="/technology" className="hover:text-sky-600">Technology</Link>
              <Link href="/applications" className="hover:text-sky-600">Applications</Link>
              <Link href="/sprose" className="hover:text-sky-600">Philosophy</Link>
              <Link href="/partners" className="hover:text-sky-600">Partners</Link>
              <Link href="/careers" className="hover:text-sky-600">Careers</Link>
              <Link href="/contact" className="hover:text-sky-600">Contact</Link>
            </div>

            {!hideAccount && (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={toggleMenu}
                  aria-haspopup="true"
                  aria-expanded={open}
                  className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                >
                  Account
                  <svg
                    className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1.0l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50 transform transition-all ${open ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
                  role="menu"
                  aria-hidden={!open}
                >
                  <div className="py-1">
                    <Link href="/login" className="block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem">Login</Link>
                    <Link href="/signup" className="block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem">Sign Up</Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-slate-600">© {new Date().getFullYear()} HUMANIZE SOFTWARE LABS — Humanizing machines</div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="hover:text-sky-600">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-sky-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

