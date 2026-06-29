export interface Haber {
    _id: string;
    baslik: string;
    icerik: string;
    aktif: boolean;
    tarih?: string;
}

export interface IlData {
    _id: string;
    name: string;
    aktif: boolean;
    baskan: string;
    telefon: string;
    email: string;
    adres: string;
}

export const staticHaberler: Haber[] = [
    {
        _id: "1",
        baslik: "Parti Programımız Tanıtıldı",
        icerik: "Merkez Ana Parti olarak hazırladığımız kapsamlı parti programımız halka sunuldu. Programda hukuk, eğitim, sağlık ve ekonomi alanlarında köklü değişim vaat ediyoruz.",
        aktif: true,
        tarih: "2025-01-15",
    },
    {
        _id: "2",
        baslik: "Gençlik Politikamız",
        icerik: "Gençlerimize yönelik eğitim, istihdam ve girişimcilik desteklerimizle geleceğin sahibi olacak nesilleri güçlendirmeyi hedefliyoruz.",
        aktif: true,
        tarih: "2025-02-20",
    },
    {
        _id: "3",
        baslik: "Saha Çalışması: Ankara",
        icerik: "Ankara il teşkilatımızla birlikte gerçekleştirdiğimiz halkla temas çalışmalarımız devam ediyor. Vatandaşlarımızın sorunlarını dinliyor, çözüm üretiyoruz.",
        aktif: true,
        tarih: "2025-03-10",
    },
];

export const staticIller: IlData[] = [
    {
        _id: "1",
        name: "Adana",
        aktif: true,
        baskan: "Yunis KARAGÖZ",
        telefon: "0322 123 45 67",
        email: "adana@merkezanaparti.org",
        adres: "Atatürk Cad. No:123, Seyhan/Adana",
    },
    {
        _id: "2",
        name: "Ankara",
        aktif: true,
        baskan: "Mehmet Demir",
        telefon: "0312 234 56 78",
        email: "ankara@merkezanaparti.org",
        adres: "Kızılay Cad. No:45, Çankaya/Ankara",
    },
    {
        _id: "3",
        name: "İstanbul",
        aktif: true,
        baskan: "Ayşe Kaya",
        telefon: "0212 345 67 89",
        email: "istanbul@merkezanaparti.org",
        adres: "İstiklal Cad. No:78, Beyoğlu/İstanbul",
    },
    {
        _id: "4",
        name: "İzmir",
        aktif: true,
        baskan: "Ali Çelik",
        telefon: "0232 456 78 90",
        email: "izmir@merkezanaparti.org",
        adres: "Alsancak Mah. No:12, Konak/İzmir",
    },
    {
        _id: "5",
        name: "Antalya",
        aktif: true,
        baskan: "Fatma Öz",
        telefon: "0242 567 89 01",
        email: "antalya@merkezanaparti.org",
        adres: "Konyaaltı Cad. No:34, Muratpaşa/Antalya",
    },
    {
        _id: "6",
        name: "Bursa",
        aktif: true,
        baskan: "Mustafa Arslan",
        telefon: "0224 678 90 12",
        email: "bursa@merkezanaparti.org",
        adres: "Osmangazi Cad. No:56, Osmangazi/Bursa",
    },
    {
        _id: "7",
        name: "Konya",
        aktif: true,
        baskan: "Zeynep Şahin",
        telefon: "0332 789 01 23",
        email: "konya@merkezanaparti.org",
        adres: "Alaeddin Cad. No:89, Karatay/Konya",
    },
    {
        _id: "8",
        name: "Gaziantep",
        aktif: true,
        baskan: "Hasan Yıldız",
        telefon: "0342 890 12 34",
        email: "gaziantep@merkezanaparti.org",
        adres: "İstiklal Cad. No:23, Şehitkamil/Gaziantep",
    },
    {
        _id: "9",
        name: "Şanlıurfa",
        aktif: true,
        baskan: "Elif Kara",
        telefon: "0414 901 23 45",
        email: "sanliurfa@merkezanaparti.org",
        adres: "Harran Yolu Cad. No:67, Haliliye/Şanlıurfa",
    },
    {
        _id: "10",
        name: "Kocaeli",
        aktif: true,
        baskan: "Burak Aydın",
        telefon: "0262 012 34 56",
        email: "kocaeli@merkezanaparti.org",
        adres: "İzmit Cad. No:90, İzmit/Kocaeli",
    },
    {
        _id: "11",
        name: "Mersin",
        aktif: true,
        baskan: "Selin Doğan",
        telefon: "0324 123 45 67",
        email: "mersin@merkezanaparti.org",
        adres: "Güvenevler Cad. No:11, Yenişehir/Mersin",
    },
    {
        _id: "12",
        name: "Diyarbakır",
        aktif: true,
        baskan: "Okan Kurt",
        telefon: "0412 234 56 78",
        email: "diyarbakir@merkezanaparti.org",
        adres: "Lale Cad. No:45, Bağlar/Diyarbakır",
    },
    {
        _id: "13",
        name: "Hatay",
        aktif: true,
        baskan: "Deniz Eren",
        telefon: "0326 345 67 89",
        email: "hatay@merkezanaparti.org",
        adres: "Antakya Cad. No:78, Antakya/Hatay",
    },
    {
        _id: "14",
        name: "Manisa",
        aktif: true,
        baskan: "Cemre Aksoy",
        telefon: "0236 456 78 90",
        email: "manisa@merkezanaparti.org",
        adres: "Muradiye Cad. No:23, Yunusemre/Manisa",
    },
    {
        _id: "15",
        name: "Kayseri",
        aktif: true,
        baskan: "Tolga Polat",
        telefon: "0352 567 89 01",
        email: "kayseri@merkezanaparti.org",
        adres: "Gevher Nesibe Cad. No:56, Melikgazi/Kayseri",
    },
    {
        _id: "16",
        name: "Samsun",
        aktif: true,
        baskan: "Pelin Yavuz",
        telefon: "0362 678 90 12",
        email: "samsun@merkezanaparti.org",
        adres: "İstiklal Cad. No:89, İlkadım/Samsun",
    },
    {
        _id: "17",
        name: "Balıkesir",
        aktif: true,
        baskan: "Emre Koç",
        telefon: "0266 789 01 23",
        email: "balikesir@merkezanaparti.org",
        adres: "Karaağaç Cad. No:12, Karesi/Balıkesir",
    },
    {
        _id: "18",
        name: "Kahramanmaraş",
        aktif: true,
        baskan: "Gizem Uysal",
        telefon: "0344 890 12 34",
        email: "maras@merkezanaparti.org",
        adres: "Türbe Cad. No:34, Dulkadiroğlu/Kahramanmaraş",
    },
    {
        _id: "19",
        name: "Van",
        aktif: true,
        baskan: "Serkan Erdem",
        telefon: "0432 901 23 45",
        email: "van@merkezanaparti.org",
        adres: "İskele Cad. No:67, Tuşba/Van",
    },
    {
        _id: "20",
        name: "Aydın",
        aktif: true,
        baskan: "Nazlı Gün",
        telefon: "0256 012 34 56",
        email: "aydin@merkezanaparti.org",
        adres: "Zafer Cad. No:90, Efeler/Aydın",
    },
];