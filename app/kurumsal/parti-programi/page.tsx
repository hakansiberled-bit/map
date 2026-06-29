export const metadata = {
  title: "Parti Programı | Merkez Ana Parti",
  description: "Merkez Ana Parti programı ve hedefleri.",
};

export default function PartiProgramiPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Programımız
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Parti Programı</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Türkiye&#39;nin geleceği için hazırladığımız temel reformlar.</p>
        </div>
      </section>

      {/* Parti Programı İçerik */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">Kapsamlı Siyasi Vizyonumuz</h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1 - Red */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="bg-primary/10 text-primary rounded-xl p-2.5">
                    <i className="fa-solid fa-scale-balanced text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Hukuk ve Adalet</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bağımsız yargı sistemini güçlendirmek, hukukun üstünlüğünü tam anlamıyla sağlamak ve her vatandaşa tarafsız, hızlı bir adalet düzeni sunmak.
                </p>
              </div>

              {/* Box 2 - Sky */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-sky"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="bg-sky/10 text-sky rounded-xl p-2.5">
                    <i className="fa-solid fa-graduation-cap text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Eğitim</h3>
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Eğitimi erişilebilir, çağdaş, nitelikli ve tamamen ücretsiz hale getirmek; ezberci düzenden bilimsel ve pratik eğitime geçmek.
                </p>
              </div>

              {/* Box 3 - Lime */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-lime"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="bg-lime/10 text-lime rounded-xl p-2.5">
                    <i className="fa-solid fa-heart-pulse text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Sağlık</h3>
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Her vatandaşa kaliteli ve engelsiz sağlık hizmeti sunmak, koruyucu hekimliği yaygınlaştırmak ve sağlık çalışanlarının haklarını korumak.
                </p>
              </div>

              {/* Box 4 - Orange */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="bg-orange/10 text-orange rounded-xl p-2.5">
                    <i className="fa-solid fa-briefcase text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">İstihdam</h3>
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">
                  İş imkanlarını artırmak, üretime dayalı sanayi politikalarını desteklemek, gençlerimize ve kadınlarımıza yönelik teşvikler yaratmak.
                </p>
              </div>

              {/* Box 5 - Pink */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-pink"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="bg-pink/10 text-pink rounded-xl p-2.5">
                    <i className="fa-solid fa-leaf text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Çevre</h3>
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Sürdürülebilir çevre politikalarıyla doğayı ve yeşil alanları korumak, karbon salınımını azaltıp yenilenebilir temiz enerjilere yönelmek.
                </p>
              </div>

              {/* Box 6 - Navy */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-navy"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="bg-navy/10 text-navy rounded-xl p-2.5">
                    <i className="fa-solid fa-hand-holding-heart text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Sosyal Adalet</h3>
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Gelir adaletsizliğini en aza indirecek vergilendirme ve destek politikaları geliştirmek, sosyal yardım sistemini şeffaflaştırmak.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}