"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300 py-16 border-t-4 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              MERKEZ ANA PARTİ
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Halkın gücüyle, adalet, demokrasi ve aydınlık bir gelecek için kararlılıkla çalışıyoruz. Biz birlikte güçlüyüz.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
              Hızlı Erişim
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/kurumsal/hakkimizda" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/kurumsal/vizyon-misyon" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  Vizyonumuz
                </Link>
              </li>
              <li>
                <Link href="/kurumsal/parti-programi" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  Programımız
                </Link>
              </li>
              <li>
                <Link href="/baskanliklar" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  Başkanlıklar
                </Link>
              </li>
              <li>
                <Link href="/iller" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  Teşkilatlar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-primary flex items-center gap-1.5 transition-colors duration-200">
                  <i className="fa-solid fa-angle-right text-[10px] text-sky"></i>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Merkez Ana Parti. Tüm hakları saklıdır. Aydınlık Yarınlar İçin Birlikte Yürüyoruz.</p>
        </div>
      </div>
    </footer>
  );
}
