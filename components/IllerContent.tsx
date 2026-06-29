"use client";

import { useState } from "react";
import { staticIller, type IlData } from "@/lib/data";
import TurkeyMap from "react-turkey-map";

export default function IllerContent() {
  const [selectedIl, setSelectedIl] = useState<IlData | null>(null);

  const handleIlClick = (il: IlData) => {
    if (il.aktif) {
      setSelectedIl(il);
    }
  };

  const aktifIller = staticIller.filter(il => il.aktif);

  // react-turkey-map'tan gelen cityName ile eşleşme için yardımcı fonksiyon
  const findIlByCityName = (cityName: string): IlData | undefined => {
    const normalizedCityName = cityName.toLowerCase().trim();
    return aktifIller.find(il =>
      il.name.toLowerCase() === normalizedCityName ||
      il.name.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c') === normalizedCityName
    );
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* ═══════════ SOL SÜTUN — İnteraktif Harita ═══════════ */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wide mb-5 text-center"
              style={{ color: "var(--navy)" }}>
              İl Teşkilatlarımız
            </h3>

            <div className="rounded-2xl shadow-md border p-4 md:p-6"
              style={{ borderColor: "rgba(50,103,137,0.18)", background: "#E9EEF2" }}>

              {/* Harita */}
              <div className="w-full">
                <TurkeyMap
                  hoverable={true}
                  onClick={(cityName: string) => {
                    console.log("Tıklanan şehir:", cityName);
                    const il = findIlByCityName(cityName);
                    console.log("Bulunan il:", il);
                    if (il) {
                      handleIlClick(il);
                    }
                  }}
                  customStyle={{
                    idleColor: "#E9EEF2",
                    hoverColor: "#E65C4F",
                    selectedColor: "#E65C4F",
                  }}
                />
              </div>

              {/* Bilgi */}
              <div className="text-center mt-4">
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Haritadaki illere tıklayarak teşkilat bilgilerini görüntüleyebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* ═══════════ SAĞ SÜTUN — İl Bilgileri ═══════════ */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold uppercase tracking-wider"
              style={{ color: "var(--navy)" }}>
              İl Teşkilat Bilgisi
            </h4>

            {selectedIl ? (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
                style={{ border: "1px solid rgba(50,103,137,0.18)" }}>
                {/* Üst bar */}
                <div className="h-2 w-full"
                  style={{ background: "linear-gradient(90deg, #E65C4F 0%, #326789 100%)" }}></div>
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                      style={{ background: "rgba(230,92,79,0.12)" }}>
                      <i className="fa-solid fa-map-marker-alt text-lg" style={{ color: "var(--primary)" }}></i>
                    </div>
                    <h5 className="font-bold uppercase text-sm" style={{ color: "var(--navy)" }}>
                      {selectedIl.name} İl Başkanlığı
                    </h5>
                  </div>
                  <ul className="space-y-3 text-sm" style={{ color: "#4b5563" }}>
                    <li>
                      <span className="font-bold" style={{ color: "var(--navy)" }}>İl Başkanı:</span>{" "}
                      {selectedIl.baskan}
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-phone w-4" style={{ color: "var(--primary)" }}></i>
                      <a href={`tel:${selectedIl.telefon}`} className="hover:underline transition-colors"
                        style={{ color: "var(--navy)" }}>
                        {selectedIl.telefon}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-envelope w-4" style={{ color: "var(--orange)" }}></i>
                      <a href={`mailto:${selectedIl.email}`} className="hover:underline transition-colors"
                        style={{ color: "var(--navy)" }}>
                        {selectedIl.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-building w-4 mt-0.5" style={{ color: "var(--lime)" }}></i>
                      <span>{selectedIl.adres}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="rounded-xl p-6 flex items-start gap-3"
                style={{ background: "rgba(233,238,242,0.9)", border: "1px solid rgba(120,166,200,0.35)" }}>
                <i className="fa-solid fa-info-circle mt-0.5" style={{ color: "var(--sky)" }}></i>
                <span style={{ color: "var(--navy)" }}>
                  Haritadan bir il seçerek teşkilat bilgilerini görüntüleyebilirsiniz.
                </span>
              </div>
            )}

            {/* Aktif Teşkilatlar Listesi */}
            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#9ca3af" }}>
                Aktif Teşkilatlar
              </h5>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {aktifIller.map((il) => (
                  <div
                    key={il._id}
                    onClick={() => handleIlClick(il)}
                    className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${selectedIl?._id === il._id ? "shadow-md" : "hover:shadow-md"
                      }`}
                    style={{
                      background: "#fff",
                      border: selectedIl?._id === il._id
                        ? "2px solid var(--primary)"
                        : "1px solid rgba(50,103,137,0.16)"
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-1 self-stretch" style={{ background: "var(--primary)" }}></div>
                      <div className="px-4 py-3 flex-1">
                        <div className="font-bold text-sm" style={{ color: "var(--navy)" }}>
                          <i className="fa-solid fa-map-marker-alt mr-2" style={{ color: "var(--primary)" }}></i>
                          {il.name}
                        </div>
                        <div className="text-xs mt-1 ml-6" style={{ color: "#9ca3af" }}>
                          <i className="fa-solid fa-user mr-1"></i>
                          {il.baskan}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}