import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Layout({ children, hideAccount = false }) {
  const [open, setOpen] = useState(false) // account dropdown
  const [mobileOpen, setMobileOpen] = useState(false) // mobile nav
  const menuRef = useRef(null)
  const mobileRef = useRef(null)
  const router = useRouter()

  function toggleMenu() {
    setOpen((v) => !v)
  }

  function closeMenu() {
    setOpen(false)
  }

  function toggleMobile() {
    setMobileOpen((v) => !v)
  }

  function closeMobile() {
    setMobileOpen(false)
  }

  // close account dropdown / mobile nav on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false)
      setMobileOpen(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  // click outside handlers for account dropdown and mobile nav
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        // allow clicks on hamburger itself to toggle; hamburger is outside mobileRef,
        // so only close when click is outside mobile menu and hamburger
        const hamburger = document.getElementById('hamburger-btn')
        if (hamburger && !hamburger.contains(e.target)) setMobileOpen(false)
      }
    }

    function handleEsc(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const NavLinks = (
    <>
      <Link href="/" className="block px-4 py-2 hover:text-sky-600">Home</Link>
      <Link href="/about" className="block px-4 py-2 hover:text-sky-600">About</Link>
      <Link href="/technology" className="block px-4 py-2 hover:text-sky-600">Technology</Link>
      <Link href="/applications" className="block px-4 py-2 hover:text-sky-600">Applications</Link>
      <Link href="/sprose" className="block px-4 py-2 hover:text-sky-600">Philosophy</Link>
      <Link href="/partners" className="block px-4 py-2 hover:text-sky-600">Partners</Link>
      <Link href="/careers" className="block px-4 py-2 hover:text-sky-600">Careers</Link>
      <Link href="/contact" className="block px-4 py-2 hover:text-sky-600">Contact</Link>
    </>
  )

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

          {/* Desktop nav */}
          <nav className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              {/* Desktop links are inline */}
              <Link href="/" className="hover:text-sky-600">Home</Link>
              <Link href="/about" className="hover:text-sky-600">About</Link>
              <Link href="/technology" className="hover:text-sky-600">Technology</Link>
              <Link href="/applications" className="hover:text-sky-600">Applications</Link>
              <Link href="/sprose" className="hover:text-sky-600">Philosophy</Link>
              <Link href="/partners" className="hover:text-sky-600">Partners</Link>
              <Link href="/careers" className="hover:text-sky-600">Careers</Link>
              <Link href="/contact" className="hover:text-sky-600">Contact</Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                id="hamburger-btn"
                onClick={toggleMobile}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <svg className={`w-6 h-6 transition-transform ${mobileOpen ? 'transform rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Account dropdown (unchanged) */}
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

        {/* Mobile menu panel */}
        <div
          ref={mobileRef}
          className={`md:hidden border-t bg-white transition-transform transform origin-top w-full ${mobileOpen ? 'max-h-screen scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0 pointer-events-none'}`}
          aria-hidden={!mobileOpen}
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1 text-sm">
            {/* Render the vertical links and close the mobile menu when clicked */}
            <div onClick={closeMobile} className="flex flex-col">
              {NavLinks}
            </div>
            {/* Keep account links accessible on mobile if not hidden */}
            {!hideAccount && (
              <div className="pt-2 border-t mt-2">
                <Link href="/login" className="block px-4 py-2 text-sm hover:bg-slate-100">Login</Link>
                <Link href="/signup" className="block px-4 py-2 text-sm hover:bg-slate-100">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

<footer className="bg-white border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-6 py-10">
    {/* Top Row */}
    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
      {/* Company Info */}
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Humanize Software Labs" width={44} height={44} className="rounded-lg shadow-sm" />
          <div>
            <h3 className="text-lg font-semibold text-slate-700">Humanize Software Labs</h3>
            <p className="text-sm text-slate-500">Humanizing Machines</p>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-500 leading-relaxed">
          MSME URN: <span className="font-medium">UDYAM-KR-22-0129107</span><br />
        </div>

        <div className="mt-3 text-sm">
          <a href="mailto:contact@humanize.co.in" className="text-humanize hover:text-humanize-dark transition-colors">
            contact@humanize.co.in
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-humanize">About</Link></li>
            <li><Link href="/careers" className="hover:text-humanize">Careers</Link></li>
            <li><Link href="/partners" className="hover:text-humanize">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Products</h4>
          <ul className="space-y-2">
            <li><Link href="/technology" className="hover:text-humanize">Technology</Link></li>
            <li><Link href="/applications" className="hover:text-humanize">Applications</Link></li>
            <li><Link href="/sprose" className="hover:text-humanize">Philosophy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-humanize">Contact</Link></li>
            <li><a href="#" className="hover:text-humanize">Blog</a></li>
            <li><a href="#" className="hover:text-humanize">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 my-8"></div>

    {/* Bottom Row */}
    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-3">
      <div>© {new Date().getFullYear()} <span className="font-medium">HUMANIZE SOFTWARE LABS</span> — All Rights Reserved</div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Twitter" className="hover:text-humanize transition-colors">Twitter</a>
        <a href="#" aria-label="LinkedIn" className="hover:text-humanize transition-colors">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

