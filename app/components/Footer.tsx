export default function Footer() {
  return (
    <footer className="bg-[#1C1008] text-[#FDFAF5]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-[family-name:var(--font-playfair-display)] italic tracking-tight">
              Bella Vista Ristorante
            </h3>
          </div>

          {/* Center: Hours & Address */}
          <div className="text-sm font-[family-name:var(--font-lato)] space-y-1 leading-relaxed">
            <p>Mon–Thu: 5pm – 10pm</p>
            <p>Fri–Sat: 5pm – 11pm</p>
            <p>Sun: 4pm – 9pm</p>
            <p className="mt-2">123 Olive Street, Chicago, IL</p>
          </div>

          {/* Right: Phone */}
          <div className="text-sm font-[family-name:var(--font-lato)]">
            <p>(312) 555–0199</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FDFAF5]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs font-[family-name:var(--font-lato)] text-[#FDFAF5]/70">
          &copy; 2026 Bella Vista. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
