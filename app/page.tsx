import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-playfair-display)] text-[#FDFAF5] leading-tight mb-6">
            Authentic Italian Cuisine
          </h1>
          <p className="text-lg sm:text-xl text-[#FDFAF5]/80 font-[family-name:var(--font-lato)] mb-10 max-w-xl mx-auto leading-relaxed">
            Handcrafted pasta, wood-fired pizza, and fine wines in an intimate
            setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-[#8B1A1A] text-white px-8 py-3 rounded text-sm font-[family-name:var(--font-lato)] font-bold tracking-wide hover:bg-[#6e1414] transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#C9842A] text-[#C9842A] px-8 py-3 rounded text-sm font-[family-name:var(--font-lato)] font-bold tracking-wide hover:bg-[#C9842A] hover:text-white transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 px-4 bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] text-center mb-12">
            Our Signature Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center border border-[#1C1008]/5">
              <span className="text-5xl block mb-4">🍝</span>
              <h3 className="text-xl font-[family-name:var(--font-playfair-display)] text-[#1C1008] mb-2">
                Tagliatelle al Ragù
              </h3>
              <p className="text-sm text-[#1C1008]/70 font-[family-name:var(--font-lato)] mb-4">
                Homemade tagliatelle tossed in a slow-simmered Bolognese sauce.
              </p>
              <span className="text-lg font-bold text-[#8B1A1A] font-[family-name:var(--font-lato)]">
                $18
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center border border-[#1C1008]/5">
              <span className="text-5xl block mb-4">🍕</span>
              <h3 className="text-xl font-[family-name:var(--font-playfair-display)] text-[#1C1008] mb-2">
                Margherita Napoletana
              </h3>
              <p className="text-sm text-[#1C1008]/70 font-[family-name:var(--font-lato)] mb-4">
                San Marzano tomatoes, fresh mozzarella, basil on a wood-fired
                crust.
              </p>
              <span className="text-lg font-bold text-[#8B1A1A] font-[family-name:var(--font-lato)]">
                $16
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center border border-[#1C1008]/5">
              <span className="text-5xl block mb-4">🍰</span>
              <h3 className="text-xl font-[family-name:var(--font-playfair-display)] text-[#1C1008] mb-2">
                Tiramisu della Casa
              </h3>
              <p className="text-sm text-[#1C1008]/70 font-[family-name:var(--font-lato)] mb-4">
                Espresso-soaked ladyfingers layered with mascarpone and cocoa.
              </p>
              <span className="text-lg font-bold text-[#8B1A1A] font-[family-name:var(--font-lato)]">
                $9
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Blurb Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-[family-name:var(--font-lato)] text-[#1C1008]/80 leading-relaxed mb-6">
            For over two decades, Bella Vista has been bringing the taste of
            Italy to Chicago. Our family recipes, imported Italian ingredients,
            and a passion for hospitality create an unforgettable dining
            experience.
          </p>
          <Link
            href="/about"
            className="text-[#8B1A1A] font-[family-name:var(--font-lato)] font-bold text-sm tracking-wide hover:underline"
          >
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Hours & Location Banner */}
      <section className="bg-[#1C1008] py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Hours */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-playfair-display)] text-[#FDFAF5] mb-4">
              Hours
            </h3>
            <div className="text-sm font-[family-name:var(--font-lato)] text-[#FDFAF5]/80 space-y-1">
              <p>Monday – Thursday: 5pm – 10pm</p>
              <p>Friday – Saturday: 5pm – 11pm</p>
              <p>Sunday: 4pm – 9pm</p>
            </div>
          </div>
          {/* Address */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-playfair-display)] text-[#FDFAF5] mb-4">
              Location
            </h3>
            <div className="text-sm font-[family-name:var(--font-lato)] text-[#FDFAF5]/80 space-y-1">
              <p>123 Olive Street</p>
              <p>Chicago, IL 60601</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
