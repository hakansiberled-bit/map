export const metadata = {
    title: "Kurumsal | Merkez Ana Parti",
    description: "Merkez Ana Parti kurumsal bilgileri ve yapı.",
};

export default function KurumsalPage() {
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
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Kurumsal</h1>
                    <p className="text-lg text-slate-300 max-w-xl mx-auto">
                        Merkez Ana Parti olarak değerlerimiz, yapımız ve vizyonumuz.
                    </p>
                </div>
            </section>

            {/* İçerik */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Halkın Gücüyle, Geleceğe
                        </h2>
                        <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="text-lg text-slate-650 leading-relaxed font-medium pt-3">
                            Merkez Ana Parti, demokrasi, adalet ve sosyal devlet ilkeleriyle kurulmuş,
                            Türkiye'nin dört bir yanında hizmet veren bir siyasi harekettir.
                        </p>
                        <p className="text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">
                            Aşağıdaki menüden detaylı bilgilere ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}