import { staticIller } from "@/lib/data";

export async function GET() {
  try {
    const iller = staticIller.filter(i => i.aktif).sort((a, b) => a.name.localeCompare(b.name));
    return Response.json(iller);
  } catch (error) {
    return Response.json({ error: "İller yüklenemedi" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    return Response.json({ error: "İl ekleme devre dışı" }, { status: 501 });
  } catch (error) {
    return Response.json({ error: "İl eklenemedi" }, { status: 500 });
  }
}
