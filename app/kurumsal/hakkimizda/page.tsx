export const metadata = {
  title: "Hakkımızda | Merkez Ana Parti",
  description: "Merkez Ana Parti hakkında detaylı bilgiler.",
};

export default function HakkimizdaPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Partimizi Tanıyın
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Hakkımızda</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Merkez Ana Parti&#39;nin kuruluş felsefesi ve amaçları.</p>
        </div>
      </section>

      {/* Hakkımızda İçerik */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">Biz Kimiz?</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-slate-650 leading-relaxed font-medium pt-3">
              Merkez Ana Parti, halkın gücüyle kurulmuş, demokratik değerlere bağlı, toplumsal barışı ve adaleti ön planda tutan bir siyasi harekettir.
            </p>
            <p className="text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Türkiye&#39;nin dört bir yanında vatandaşlarımıza hizmet etmek için çalışan partimiz, her kesime adil ve eşit davranmayı ilke edinmiştir. Demokratik, katılımcı ve çözüm odaklı bir siyaset anlayışıyla halkımızın yanında olmayı sürdürüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-md">
              İlkelerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">
              Temel Değerlerimiz
            </h2>
            <p className="text-slate-500 font-medium">Partimizin omurgasını oluşturan vazgeçilmez sütunlar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Adalet - Red */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <div className="inline-block p-4.5 bg-primary/10 text-primary rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-250">
                <i className="fa-solid fa-scale-balanced text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-3 text-navy">Adalet</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hukukun üstünlüğü, tarafsız yargı ve adil yargılanma hakkı partimizin en temel varlık sebebidir.
              </p>
            </div>

            {/* Beraberlik - Sky */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-sky"></div>
              <div className="inline-block p-4.5 bg-sky/10 text-sky rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-250">
                <i className="fa-solid fa-handshake-angle text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-3 text-navy">Beraberlik</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Farklılıklarımızı zenginliğimiz kabul ederek, kimseyi ötekileştirmeden, birlik içinde güçlü bir toplum hedefliyoruz.
              </p>
            </div>

            {/* Kalkınma - Orange */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange"></div>
              <div className="inline-block p-4.5 bg-orange/10 text-orange rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-250">
                <i className="fa-solid fa-rocket text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-3 text-navy">Kalkınma</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yerli üretime, teknolojiye ve nitelikli insan kaynağına dayanan sürdürülebilir bir ekonomik hamle öngörüyoruz.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}