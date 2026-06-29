export const metadata = {
  title: "Başkanlıklar | Merkez Ana Parti",
  description: "Merkez Ana Parti yönetim kadrosu ve başkanlıklar.",
};

export default function BaskanliklarPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Yönetim Kadromuz
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Başkanlıklar</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Partimizin aydınlık yarınlara öncülük eden yönetim kadrosu.</p>
        </div>
      </section>

      {/* Yönetim Kadrosu */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">Genel Başkanlık</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Lider 1 - Red Accent */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <div className="w-28 h-28 bg-primary/10 text-primary rounded-full mx-auto mb-5 flex items-center justify-center border border-primary/20">
                <i className="fa-solid fa-user-tie text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-1 text-navy">Yunis KARAGÖZ</h3>
              <p className="text-primary font-bold text-sm mb-3">Genel Başkan</p>
              <p className="text-slate-500 text-xs leading-relaxed">Partinin genel politikaları, temsili ve vizyoner liderliği.</p>
            </div>

            {/* Lider 2 - Sky Accent */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sky"></div>
              <div className="w-28 h-28 bg-sky/10 text-sky rounded-full mx-auto mb-5 flex items-center justify-center border border-sky/20">
                <i className="fa-solid fa-user-gear text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-1 text-navy">Mehmet Demir</h3>
              <p className="text-sky font-bold text-sm mb-3">Genel Başkan Yardımcısı</p>
              <p className="text-slate-500 text-xs leading-relaxed">Teşkilat koordinasyonu, saha çalışmaları ve organizasyonel yapılar.</p>
            </div>

            {/* Lider 3 - Orange Accent */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange"></div>
              <div className="w-28 h-28 bg-orange/10 text-orange rounded-full mx-auto mb-5 flex items-center justify-center border border-orange/20">
                <i className="fa-solid fa-coins text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-1 text-navy">Ali Kaya</h3>
              <p className="text-orange font-bold text-sm mb-3">Genel Başkan Yardımcısı</p>
              <p className="text-slate-500 text-xs leading-relaxed">Ekonomi, finans yönetimi ve parti kaynaklarının planlanması.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-red-orange text-white">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Birlikte Güçlüyüz</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto font-medium">
            Merkez Ana Parti kadrolarında yer alarak Türkiye&#39;nin geleceğine yön verin.
          </p>
          <div className="pt-2">
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2.5 bg-navy text-white hover:bg-slate-900 px-8 py-4 rounded-xl font-bold transition transform active:scale-95 shadow-md text-sm"
            >
              <i className="fa-solid fa-paper-plane text-xs text-sky"></i>
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}