export const metadata = {
  title: "Vizyon & Misyon | Merkez Ana Parti",
  description: "Merkez Ana Parti vizyonu ve misyonu.",
};

export default function VizyonMisyonPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Hedeflerimiz
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Vizyon & Misyon</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Türkiye için çizdiğimiz vizyon ve üstlendiğimiz misyon.</p>
        </div>
      </section>

      {/* Vizyon & Misyon İçerik */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Vizyon - Sky Blue */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sky"></div>
              <div className="inline-block p-4.5 bg-sky/10 text-sky rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-eye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3.5 text-navy">Vizyonumuz</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Halkın tamamen güçlendirildiği, her vatandaşın eşit fırsatlarla yaşadığı, adil, özgür, demokratik ve her alanda kalkınmış bir Türkiye inşa etmek.
              </p>
            </div>

            {/* Misyon - Red */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <div className="inline-block p-4.5 bg-primary/10 text-primary rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-bullseye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3.5 text-navy">Misyonumuz</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vatandaşlarımızın sesi olmak, şeffaf ve hesap verebilir yönetim anlayışıyla hizmet etmek, toplumsal barışı ve kardeşliği korumak, ülkemizin kalkınması için akılcı ve sürdürülebilir çözümler üretmek.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}