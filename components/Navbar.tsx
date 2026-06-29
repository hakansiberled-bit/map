"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [kurumsalOpen, setKurumsalOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Merkez Ana Parti"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-navy text-sm tracking-wide">
          <li>
            <Link href="/" className="hover:text-primary transition-colors duration-250 relative after:absolute after:bottom-[-22px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">
              ANASAYFA
            </Link>
          </li>
          <li className="relative">
            <div
              onMouseEnter={() => setKurumsalOpen(true)}
              onMouseLeave={() => setKurumsalOpen(false)}
            >
              <Link href="/kurumsal" className="hover:text-primary transition-colors duration-250 flex items-center gap-1.5 py-2 font-semibold text-navy text-sm tracking-wide">
                KURUMSAL
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-250 ${kurumsalOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}></i>
              </Link>
              {kurumsalOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 rounded-xl py-3 min-w-[220px] transition-all duration-300 transform origin-top animate-in fade-in slide-in-from-top-2">
                  <li><Link href="/kurumsal/hakkimizda" className="block px-5 py-2.5 hover:bg-slate-50 hover:text-primary text-sm transition-colors text-navy">Hakkımızda</Link></li>
                  <li><Link href="/kurumsal/vizyon-misyon" className="block px-5 py-2.5 hover:bg-slate-50 hover:text-primary text-sm transition-colors text-navy">Vizyon & Misyon</Link></li>
                  <li><Link href="/kurumsal/parti-tuzugu" className="block px-5 py-2.5 hover:bg-slate-50 hover:text-primary text-sm transition-colors text-navy">Parti Tüzüğü</Link></li>
                  <li><Link href="/kurumsal/parti-programi" className="block px-5 py-2.5 hover:bg-slate-50 hover:text-primary text-sm transition-colors text-navy">Parti Programı</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link href="/baskanliklar" className="hover:text-primary transition-colors duration-250 relative after:absolute after:bottom-[-22px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">
              BAŞKANLIKLAR
            </Link>
          </li>
          <li>
            <Link href="/iller" className="hover:text-primary transition-colors duration-250 relative after:absolute after:bottom-[-22px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">
              İL TEŞKİLATLARIMIZ
            </Link>
          </li>
          <li>
            <Link
              href="/iletisim"
              className="bg-orange text-white px-5 py-2.5 rounded-lg hover:bg-orange/95 hover:shadow-lg hover:shadow-orange/20 transition-all duration-250 font-bold tracking-wider inline-flex items-center gap-2 transform active:scale-95"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
              İLETİŞİM
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-navy hover:text-primary p-2 focus:outline-none transition-colors duration-200"
        >
          {open ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-5 space-y-4 shadow-inner animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-navy hover:text-primary transition-colors">Anasayfa</Link>

          <div className="border-y border-slate-50 py-2.5">
            <span className="block font-bold text-xs text-slate-400 tracking-wider mb-2">KURUMSAL</span>
            <div className="grid grid-cols-2 gap-3 pl-2">
              <Link href="/kurumsal/hakkimizda" onClick={() => setOpen(false)} className="py-1 text-sm font-semibold text-navy hover:text-primary transition-colors">Hakkımızda</Link>
              <Link href="/kurumsal/vizyon-misyon" onClick={() => setOpen(false)} className="py-1 text-sm font-semibold text-navy hover:text-primary transition-colors">Vizyon & Misyon</Link>
              <Link href="/kurumsal/parti-tuzugu" onClick={() => setOpen(false)} className="py-1 text-sm font-semibold text-navy hover:text-primary transition-colors">Parti Tüzüğü</Link>
              <Link href="/kurumsal/parti-programi" onClick={() => setOpen(false)} className="py-1 text-sm font-semibold text-navy hover:text-primary transition-colors">Parti Programı</Link>
            </div>
          </div>

          <Link href="/baskanliklar" onClick={() => setOpen(false)} className="block py-1.5 font-semibold text-navy hover:text-primary transition-colors">Başkanlıklar</Link>
          <Link href="/iller" onClick={() => setOpen(false)} className="block py-1.5 font-semibold text-navy hover:text-primary transition-colors">İl Teşkilatları</Link>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="block w-full bg-orange text-white text-center py-3 rounded-lg font-bold hover:bg-orange/95 shadow-md shadow-orange/15 transition-all"
            >
              <i className="fa-solid fa-paper-plane mr-2 text-xs"></i>
              İletişime Geç
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
