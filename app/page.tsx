import Link from "next/link";
import { staticHaberler } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-navy font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-navy text-white py-24 md:py-32 overflow-hidden border-b border-slate-900">
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-sky/10 blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left - Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-primary/15 text-primary-light border border-primary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                Geleceğin Güvencesi
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
                Geleceğe Umut <br />
                ve Güvenle Yürüyoruz
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Merkez Ana Parti olarak; adalet, eşitlik, özgürlük ve sürdürülebilir kalkınma temelinde, milletimizin gücüyle daha güçlü bir Türkiye için yola çıktık.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  href="/kurumsal/parti-programi"
                  className="bg-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-orange/95 hover:shadow-lg hover:shadow-orange/20 transition-all duration-200 text-center inline-flex items-center justify-center gap-2 transform active:scale-95 shadow-md"
                >
                  <i className="fa-solid fa-file-invoice text-sm"></i>
                  Parti Programımız
                </Link>
                <Link
                  href="/iletisim"
                  className="border border-slate-700 bg-slate-900/40 text-slate-200 hover:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900/60 hover:border-slate-500 transition-all duration-200 text-center inline-flex items-center justify-center gap-2 transform active:scale-95 shadow-sm"
                >
                  <i className="fa-solid fa-user-plus text-sm text-sky"></i>
                  İletişim
                </Link>
              </div>
            </div>

            {/* Right - Hero Graphic / Card */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange opacity-20 blur-3xl rounded-full"></div>

              <div className="relative bg-slate-900/60 border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl backdrop-blur-xl animate-in zoom-in duration-500">
                {/* Logo Frame */}
                <div className="flex items-center gap-4 border-b border-slate-850 pb-6 mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-md">
                    <img src="/logo.png" alt="MAP Logo" className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Merkez Ana Parti</h3>
                    <p className="text-xs text-sky font-semibold">Genel Merkez Ankara</p>
                  </div>
                </div>

                {/* Values Checklist */}
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="text-slate-300 font-medium">Hukukun Üstünlüğü & Adalet</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky/10 border border-sky/20 flex items-center justify-center text-sky text-xs">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="text-slate-300 font-medium">Fırsat Eşitliği & Nitelikli Eğitim</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center text-lime text-xs">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="text-slate-300 font-medium">Erişilebilir & Kaliteli Sağlık Hizmeti</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-pink/10 border border-pink/20 flex items-center justify-center text-pink text-xs">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="text-slate-300 font-medium">Sürdürülebilir Çevre ve Kalkınma</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-850 flex justify-between items-center text-xs text-slate-500">
                  <span>#AydınlıkYarınlar</span>
                  <span>MAP Siyaset</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vizyonumuz Bölümü */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md">
              Gelecek Hedeflerimiz
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight">
              Vizyonumuz & Temel Amacımız
            </h2>
            <div className="w-16 h-1.5 bg-gradient-red-orange mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium pt-4">
              Halkın gücü ve iradesiyle inşa edilen, her bir vatandaşımızın özgürce, eşit fırsatlarla ve refah içinde yaşayacağı demokratik bir Türkiye vizyonu taşıyoruz.
            </p>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Siyasette şeffaflığı, dürüstlüğü ve halka hizmeti merkeze alarak; ülkemizin kalkınma potansiyelini harekete geçiriyor, her alanda çözümler üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Program Öne Çıkanlar (Themed Palette Integration) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-md">
              İlkelerimiz
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight">
              Parti Programından Öne Çıkanlar
            </h2>
            <p className="text-slate-500 font-medium">
              Türkiye&#39;nin temel sorunlarına modern, akılcı ve sürdürülebilir çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Hukuk ve Adalet (Red Accent) */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
              <div className="inline-block p-4.5 bg-primary/10 rounded-2xl mb-6 text-primary group-hover:scale-110 transition-transform duration-305">
                <i className="fa-solid fa-scale-balanced text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3.5 text-navy group-hover:text-primary transition-colors">Hukuk ve Adalet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yargı bağımsızlığını tam anlamıyla tesis ederek, hukukun üstünlüğünü ve her vatandaşın hakkının korunmasını garanti altına alacağız.
              </p>
            </div>

            {/* Card 2: Eğitim (Sky Blue Accent) */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-sky"></div>
              <div className="inline-block p-4.5 bg-sky/10 rounded-2xl mb-6 text-sky group-hover:scale-110 transition-transform duration-305">
                <i className="fa-solid fa-graduation-cap text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3.5 text-navy group-hover:text-sky transition-colors">Eğitim ve Gençlik</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Eğitim sistemini ezbercilikten uzaklaştırıp bilimsel, nitelikli ve ücretsiz hale getireceğiz. Gençlerimizin dünya standartlarında yetişmesini sağlayacağız.
              </p>
            </div>

            {/* Card 3: Sağlık (Lime Green Accent) */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-lime"></div>
              <div className="inline-block p-4.5 bg-lime/10 rounded-2xl mb-6 text-lime group-hover:scale-110 transition-transform duration-305">
                <i className="fa-solid fa-heart-pulse text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3.5 text-navy group-hover:text-lime transition-colors">Erişilebilir Sağlık</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Her bir vatandaşımızın, hiçbir maddi engel olmadan en üst kalitede sağlık hizmetine en hızlı şekilde erişebileceği koruyucu sağlık altyapısını kuracağız.
              </p>
            </div>

            {/* Card 4: Ekonomi & Kalkınma (Orange Accent) */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-orange"></div>
              <div className="inline-block p-4.5 bg-orange/10 rounded-2xl mb-6 text-orange group-hover:scale-110 transition-transform duration-305">
                <i className="fa-solid fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3.5 text-navy group-hover:text-orange transition-colors">Üreten Ekonomi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Betona değil, üretime, teknolojiye ve tarıma yatırımı destekleyen, enflasyonu kalıcı olarak düşüren sürdürülebilir bir ekonomik kalkınma modeli sunuyoruz.
              </p>
            </div>

            {/* Card 5: Sosyal Güvence (Pink Accent) */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-pink"></div>
              <div className="inline-block p-4.5 bg-pink/10 rounded-2xl mb-6 text-pink group-hover:scale-110 transition-transform duration-305">
                <i className="fa-solid fa-hand-holding-heart text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3.5 text-navy group-hover:text-pink transition-colors">Sosyal Adalet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gelir adaletsizliğini giderecek politikalarımızla, hiçbir ailemizi açlık ve yoksulluk sınırının altında bırakmayacak güçlü sosyal devlet ağını kuracağız.
              </p>
            </div>

            {/* Card 6: Teşkilatlanma (Navy Accent) */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-navy"></div>
              <div className="inline-block p-4.5 bg-navy/10 rounded-2xl mb-6 text-navy group-hover:scale-110 transition-transform duration-305">
                <i className="fa-solid fa-users-gear text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3.5 text-navy group-hover:text-primary transition-colors">Katılımcı Siyaset</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Halkımızın doğrudan yönetime katıldığı, yerel teşkilatlarımızın yetkilerinin genişletildiği, tabandan tavana demokratik karar mekanizmalarını uyguluyoruz.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Son Haberler */}
      <section className="hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-sky uppercase tracking-widest bg-sky/10 px-3 py-1 rounded-md">
              Partimizden Gelişmeler
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight">
              Son Haberler & Duyurular
            </h2>
            <p className="text-slate-500 font-medium">
              Saha çalışmalarımız, basın açıklamalarımız ve teşkilat etkinliklerimizden haberdar olun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staticHaberler.filter(h => h.aktif).slice(0, 3).map((haber, idx) => (
              <div key={haber._id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className={`h-52 bg-gradient-to-br ${idx % 3 === 0 ? 'from-primary to-orange' :
                  idx % 3 === 1 ? 'from-navy to-sky' :
                    'from-lime to-sky'
                  } relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <i className={`fa-solid ${idx % 3 === 0 ? 'fa-bullhorn' :
                    idx % 3 === 1 ? 'fa-lightbulb' :
                      'fa-map-location-dot'
                    } text-5xl opacity-40 group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                    {idx % 3 === 0 ? 'Kongre Raporu' : idx % 3 === 1 ? 'Proje Tanıtımı' : 'Saha Çalışması'}
                  </span>
                  <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors line-clamp-2">
                    {haber.baslik}
                  </h3>
                  <p className="text-slate-550 text-sm leading-relaxed flex-grow">
                    {haber.icerik.substring(0, 120)}...
                  </p>
                  <div className="pt-4 border-t border-slate-50">
                    <Link href="/haberler" className="text-primary hover:text-primary-dark font-bold text-xs inline-flex items-center gap-1.5 transition-colors">
                      Devamını Oku
                      <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-24 relative overflow-hidden bg-gradient-red-orange text-white">
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Birlikte Değişimi Başlatalım
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
            Güçlü bir Türkiye, adil bir gelecek ve aydınlık yarınlar için Merkez Ana Parti saflarında yerinizi alın. Hemen üye olun.
          </p>
          <div className="pt-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2.5 bg-navy text-white hover:bg-slate-900 px-10 py-5 rounded-2xl font-bold transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-navy/30 transform hover:-translate-y-0.5 active:scale-95 text-base tracking-wider"
            >
              <i className="fa-solid fa-file-signature text-sky"></i>
              İletişim
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
