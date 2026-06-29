export const metadata = {
  title: "İletişim | Merkez Ana Parti",
  description: "Merkez Ana Parti iletişim bilgileri.",
};

export default function IletisimPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            İrtibat
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">İletişim</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Bizimle iletişime geçin, görüşlerinizi paylaşın veya bize katılın.</p>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight">İrtibat Bilgileri</h2>
                <p className="text-sm text-slate-550 mt-1">Doğrudan genel merkezimizle bağlantı kurabilirsiniz.</p>
              </div>

              <div className="space-y-6">

                {/* Adres */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="bg-primary/10 text-primary rounded-xl p-3.5 flex-shrink-0 flex items-center justify-center">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Adres</h3>
                    <p className="text-sm text-slate-550 leading-relaxed">
                      Diriliş, Plevne Caddesi No: 310<br />
                      Daire: 21, Mamak / ANKARA
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="bg-sky/10 text-sky rounded-xl p-3.5 flex-shrink-0 flex items-center justify-center">
                    <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Telefon</h3>
                    <a href="tel:05459342129" className="text-sm text-slate-550 hover:text-primary font-semibold transition-colors">
                      0545 934 21 29
                    </a>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="bg-lime/10 text-lime rounded-xl p-3.5 flex-shrink-0 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">E-posta</h3>
                    <a href="mailto:info@merkezanaparti.org" className="text-sm text-slate-550 hover:text-primary font-semibold transition-colors">
                      info@merkezanaparti.org
                    </a>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="bg-pink/10 text-pink rounded-xl p-3.5 flex-shrink-0 flex items-center justify-center">
                    <i className="fa-solid fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Çalışma Saatleri</h3>
                    <p className="text-sm text-slate-555 leading-relaxed">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="space-y-4 pt-2">
                <h3 className="font-bold text-navy">Sosyal Medya Hesaplarımız</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-navy hover:border-navy hover:text-white hover:shadow-lg hover:shadow-navy/25 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
                    <i className="fab fa-x-twitter text-lg"></i>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-pink hover:border-pink hover:text-white hover:shadow-lg hover:shadow-pink/25 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-orange hover:border-orange hover:text-white hover:shadow-lg hover:shadow-orange/25 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
                    <i className="fab fa-youtube text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}