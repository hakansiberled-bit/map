"use client";

import { useState } from "react";
import TurkeyMap from "turkey-map-react";
import { staticIller, type IlData } from "@/lib/data";

// turkey-map-react'in onClick/onHover callback'i bu şekilde bir obje döndürür
interface CityData {
  id: string;
  plateNumber: number;
  name: string;
  path: string;
}

// Türkçe karakterleri normalize ederek isim eşleştirmesini güvenli hale getirir
const normalizeCityName = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");

export default function IllerClient() {
  const [seciliIl, setSeciliIl] = useState<IlData | null>(null);

  const aktifIller = staticIller.filter((il) => il.aktif);

  const handleIlClick = (il: IlData) => {
    setSeciliIl(il);
  };

  // Haritada bir ile tıklandığında çalışır.
  // turkey-map-react onClick'i { id, plateNumber, name, path } objesi ile çağırır.
  const handleMapClick = (city: CityData) => {
    const normalizedCityName = normalizeCityName(city.name);
    const il = aktifIller.find(
      (i) => normalizeCityName(i.name) === normalizedCityName
    );

    if (il) {
      setSeciliIl(il);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-navy">
      {/* Page Banner */}
      <div className="bg-gradient-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-3">
            Türkiye Teşkilatları
          </h1>
          <p className="text-lg text-slate-200 font-medium">
            81 İlde, Merkez Ana Parti İçin Sizinleyiz
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Türkiye Haritası */}
          <div className="lg:col-span-8 order-1">
            <h3 className="font-bold uppercase mb-4 text-center text-navy text-xl">
              İnteraktif Harita
            </h3>
            <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100">
              <div className="w-full h-auto">
                <TurkeyMap
                  hoverable={true}
                  showTooltip={true}
                  onClick={handleMapClick}
                  customStyle={{
                    idleColor: "#DDE1E6",
                    hoverColor: "var(--primary)",
                  }}
                />
              </div>
              <div className="text-center text-slate-500 text-sm mt-3">
                İl teşkilatını görüntülemek için haritadan bir il seçin.
              </div>
            </div>
          </div>

          {/* İl Arama ve Sonuç Listesi */}
          <div className="lg:col-span-4 order-2">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm mb-4">
              <h4 className="font-bold mb-3 text-navy text-lg">İl Seçiniz</h4>
              <select
                className="w-full text-base border border-slate-200 rounded-lg px-3 py-2 mb-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={seciliIl?._id || ""}
                onChange={(e) => {
                  const il = aktifIller.find((i) => i._id === e.target.value);
                  if (il) setSeciliIl(il);
                }}
              >
                <option value="">İl Seçerek Filtreleyin</option>
                {aktifIller.map((il) => (
                  <option key={il._id} value={il._id}>
                    {il.name}
                  </option>
                ))}
              </select>
              <button
                className="w-full font-bold text-white bg-primary hover:bg-primary/90 transition-colors rounded-lg py-2.5"
                onClick={() => {
                  if (!seciliIl) {
                    alert("Lütfen önce bir il seçiniz.");
                  }
                }}
              >
                Teşkilat Bul
              </button>
            </div>

            {/* Arama Sonucu */}
            <div>
              <h5 className="font-bold uppercase mb-3 mt-4 text-slate-600 text-sm">
                Arama Sonucu
              </h5>

              {seciliIl && (
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-3 p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 bg-primary/10">
                      <i className="fa-solid fa-map-marker-alt text-lg text-primary"></i>
                    </div>
                    <h5 className="font-bold uppercase text-navy">
                      {seciliIl.name} İl Başkanlığı
                    </h5>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>
                      <strong className="text-slate-900">İl Başkanı:</strong> {seciliIl.baskan}
                    </li>
                    <li>
                      <i className="fas fa-phone mr-1"></i>{" "}
                      <a
                        href={`tel:${seciliIl.telefon}`}
                        className="text-slate-800 hover:text-primary"
                      >
                        {seciliIl.telefon}
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-envelope mr-1"></i>{" "}
                      <a
                        href={`mailto:${seciliIl.email}`}
                        className="text-slate-800 hover:text-primary"
                      >
                        {seciliIl.email}
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-building mr-1"></i>{" "}
                      <span>{seciliIl.adres}</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Aktif Teşkilatlar Listesi */}
              <div>
                <h5 className="font-bold uppercase mb-3 mt-4 text-slate-500 text-sm">
                  Aktif Teşkilatlar
                </h5>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {aktifIller.map((il) => (
                    <div
                      key={il._id}
                      onClick={() => handleIlClick(il)}
                      className={`bg-white border rounded-xl cursor-pointer transition-all duration-200 px-3 py-2 ${seciliIl?._id === il._id
                        ? "border-primary shadow-sm"
                        : "border-slate-200 hover:shadow-sm"
                        }`}
                    >
                      <div className="font-bold text-slate-800 text-sm">
                        <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                        {il.name} İl Başkanlığı
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        <i className="fas fa-user mr-1"></i> {il.baskan}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
