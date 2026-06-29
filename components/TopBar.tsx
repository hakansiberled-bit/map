export default function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-slate-300 text-xs py-2.5 border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center px-6">

        {/* Sol - Adres */}
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-sky"></i>
          <span>
            Diriliş, Plevne Caddesi No: 310 Daire: 21 Mamak / ANKARA
          </span>
        </div>

        {/* Sağ - İletişim */}
        <div className="flex items-center gap-6">
          <a href="tel:05459342129" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
            <i className="fa-solid fa-phone text-sky"></i>
            <span>0545 934 21 29</span>
          </a>
          <a href="mailto:info@merkezanaparti.org" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
            <i className="fa-solid fa-envelope text-sky"></i>
            <span>info@merkezanaparti.org</span>
          </a>
        </div>

      </div>
    </div>
  );
}