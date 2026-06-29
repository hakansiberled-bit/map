import { staticHaberler } from "@/lib/data";

export const metadata = {
  title: "Haberler | Merkez Ana Parti",
  description: "Merkez Ana Parti haberleri ve duyuruları.",
};

export default function HaberlerPage() {
  // Pull from static data directly without API fetch or DB calls
  const haberler = [...staticHaberler].filter(h => h.aktif).sort((a, b) => new Date(b.tarih || "").getTime() - new Date(a.tarih || "").getTime());

  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Partimizden Haberler
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Haberler & Duyurular</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">En son saha çalışmalarımız, basın açıklamalarımız ve genel merkez duyurularımız.</p>
        </div>
      </section>

      {/* Haberler Listesi */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">Son Paylaşımlar</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {haberler.length === 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center max-w-md mx-auto shadow-sm">
              <i className="fa-solid fa-bullhorn text-4xl text-slate-300 mb-4"></i>
              <p className="text-slate-550 font-medium">Henüz haber veya duyuru bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {haberler.map((haber, idx) => (
                <div key={haber._id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                  <div className={`h-48 bg-gradient-to-br ${
                    idx % 3 === 0 ? 'from-primary to-orange' :
                    idx % 3 === 1 ? 'from-navy to-sky' :
                    'from-lime to-sky'
                  } relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    <i className="fa-solid fa-newspaper text-5xl opacity-40 group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{haber.tarih ? new Date(haber.tarih).toLocaleDateString('tr-TR') : 'Duyuru'}</span>
                    <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors line-clamp-2">
                      {haber.baslik}
                    </h3>
                    <p className="text-slate-650 text-sm leading-relaxed flex-grow">
                      {haber.icerik.substring(0, 150)}...
                    </p>
                    <div className="pt-4 border-t border-slate-50">
                      <a href="#" className="text-primary hover:text-primary-dark font-bold text-xs inline-flex items-center gap-1.5 transition-colors">
                        Devamını Oku 
                        <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}