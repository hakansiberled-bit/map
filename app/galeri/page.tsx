export const metadata = {
  title: "Galeri | Merkez Ana Parti",
  description: "Merkez Ana Parti fotoğraf galerisi.",
};

export default function GaleriPage() {
  return (
    <main className="bg-slate-50 text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-sky/5 blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md mb-3 inline-block">
            Görsel Albüm
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Galeri</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">Saha çalışmalarımız, mitinglerimiz ve etkinliklerimizden kareler.</p>
        </div>
      </section>

      {/* Galeri Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">Etkinlik Fotoğrafları</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="group relative overflow-hidden rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Modern gradient representations of photos using palette colors */}
                <div className={`aspect-video bg-gradient-to-br ${
                  item % 3 === 1 ? 'from-primary to-orange' :
                  item % 3 === 2 ? 'from-navy to-sky' :
                  'from-lime to-sky'
                } flex items-center justify-center p-6 text-white`}>
                  <i className="fa-regular fa-image text-4xl opacity-35"></i>
                </div>
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <i className="fa-solid fa-magnifying-glass-plus text-3xl mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></i>
                  <span className="text-xs font-semibold tracking-wider">Görseli Büyüt</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}