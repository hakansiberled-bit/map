export const metadata = {
  title: "Parti Tüzüğü | Merkez Ana Parti",
  description: "Merkez Ana Parti tüzüğü.",
};

export default function PartiTuzuguPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Tüzük
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Parti Tüzüğü</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Partimizin işleyiş kuralları ve temel organları.</p>
        </div>
      </section>

      {/* Tüzük İçerik */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-navy">1. Temel İlkeler</h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                Merkez Ana Parti, demokrasi, hukukun üstünlüğü, temel insan hakları ve sosyal adalet ilkelerini benimser. Tüm vatandaşlarımıza eşit mesafede durmayı, şeffaflığı ve dürüstlüğü ilke edinir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-sky">
              <h3 className="text-xl font-bold mb-3 text-navy">2. Üyelerin Hak ve Sorumlulukları</h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                Parti üyelerimiz, kurullara katılım, seçimlerde görev alma ve parti kararlarını destekleme haklarına sahiptir. Aynı zamanda parti disiplinini ve kurallarını benimseme sorumluluğu taşırlar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-orange">
              <h3 className="text-xl font-bold mb-3 text-navy">3. Organizasyon Yapısı</h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                Merkez Ana Parti, il, ilçe ve mahalle düzeylerinde teşkilatlanmıştır. Her düzeyde seçimli kurullar çalışır ve demokratik karar alma süreçleri uygulanır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-lime">
              <h3 className="text-xl font-bold mb-3 text-navy">4. Finansman ve Şeffaflık</h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                Parti finansmanı, yasal düzenlemelere uygun olarak, şeffaf ve hesap verebilir şekilde yönetilir. Tüm gelir ve giderler denetlenebilir.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}