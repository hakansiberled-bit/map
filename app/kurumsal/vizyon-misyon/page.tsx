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

  <h3 className="text-2xl font-bold mb-5 text-navy">
    Vizyonumuz
  </h3>

  <div className="space-y-4 text-slate-600 leading-8 text-[15px]">
    <p>
      Merkez Ana Parti olarak geçmişten gelen tecrübelerimiz ve gücümüzle,
      geleceğe yolculuğumuzda manevi değerlerimize birlikte sahip çıkarak
      ilerlemeyi temel ilkemiz olarak görüyoruz.
    </p>

    <p>
      Pandemi sürecinin ülkemize maddi ve manevi etkilerinin farkındayız.
      Toplumun hassasiyetlerini gözeten ve ekonomik olumsuzlukları azaltmayı
      amaçlayan <strong>"Toplumsal Kalkınma"</strong> planını hayata
      geçirmeyi hedefliyoruz.
    </p>

    <p>
      Tüm vatandaşları kucaklayan, kişi hak ve özgürlüklerini esas alan,
      demokratik, tarafsız ve kamu vicdanını rahatlatacak hukuksal düzenlemeler
      sunacağız. İnsan ve insan hakları, siyaset anlayışımızın temelidir.
    </p>

    <p>
      Eğitim hakkının hiçbir gerekçeyle engellenemeyeceğine inanıyor,
      toplumdaki herkesin sosyal güvenlik hakkına eşit şekilde sahip olmasını
      savunuyoruz.
    </p>

    <p>
      Devlet ile vatandaş arasındaki tüm engelleri kaldıracak, bunu yalnızca
      söylemlerle değil, somut icraatlarla gerçekleştireceğiz.
    </p>

    <p>
      Fabrikalarımızı, yollarımızı ve hastanelerimizi yeniden
      millileştirecek; yabancı sermayeye açık ancak bağımsız bir ekonomik yapı
      oluşturacağız.
    </p>

    <p>
      Çiftçimizin yeniden milletin efendisi olduğu, haklarının korunduğu ve
      desteklendiği bir Türkiye için çalışacağız. Halkın üstünde değil,
      halkın içinde siyaset yapacağız.
    </p>

    <p>
      Güçlü ve tam bağımsız bir Türkiye hedefiyle, "Yurtta Barış, Dünyada
      Barış" ilkesi doğrultusunda kararlı ve istikrarlı bir devlet yönetimi
      sunacağız.
    </p>

    <p>
      Her Türk vatandaşının gururla "Ne Mutlu Türküm Diyene" diyebileceği yeni
      bir Türkiye inşa etmek için çalışacağız.
    </p>

    <p className="font-semibold text-navy">
      El Ele, Gönül Gönüle, Hep Birlikte Türkiye.
    </p>
  </div>
</div>

            {/* Misyon - Red */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md card-hover-effect relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

  <div className="inline-block p-4.5 bg-primary/10 text-primary rounded-2xl mb-5 group-hover:scale-110 transition-transform">
    <i className="fa-solid fa-bullseye text-2xl"></i>
  </div>

  <h3 className="text-2xl font-bold mb-5 text-navy">
    Misyonumuz
  </h3>

  <div className="space-y-4 text-slate-600 leading-8 text-[15px]">
    <p>
      MERKEZ ANA PARTİ, Cumhuriyetimizin kurucusu
      <strong> Mustafa Kemal Atatürk</strong>'ün;
    </p>

    <blockquote className="border-l-4 border-primary pl-4 italic text-slate-700">
      "Ey kahraman Türk kadını, sen yerde sürünmeye değil, omuzlar üzerinde
      yükselmeye layıksın."
    </blockquote>

    <p>
      sözü doğrultusunda, bir Türk anasının önderliğinde kurulmuş; vatan
      sevdalılarını bünyesinde bulunduran ve Yüce Türk Milletine hizmet etmeyi
      kendisine görev edinmiş bir siyasi yapılanmadır.
    </p>
  </div>
</div>

          </div>
        </div>
      </section>
    </main>
  );
}
