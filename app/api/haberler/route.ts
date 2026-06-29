import { staticHaberler } from "@/lib/data";

export async function GET() {
  try {
    const haberler = staticHaberler.filter(h => h.aktif).sort((a, b) => (b.tarih || "").localeCompare(a.tarih || ""));
    return Response.json(haberler);
  } catch (error) {
    return Response.json({ error: "Haberler yüklenemedi" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    return Response.json({ error: "Haber ekleme devre dışı" }, { status: 501 });
  } catch (error) {
    return Response.json({ error: "Haber eklenemedi" }, { status: 500 });
  }
}
