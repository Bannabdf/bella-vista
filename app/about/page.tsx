import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bella Vista",
  description: "Learn the story behind Bella Vista — family-owned since 1998.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair-display)] text-[#1C1008] text-center mb-10">
        Our Story
      </h1>

      <div className="space-y-6 text-base font-[family-name:var(--font-lato)] text-[#1C1008]/80 leading-relaxed max-w-3xl mx-auto">
        <p>
          Bella Vista was founded in 1998 by the Rossi family, who emigrated
          from Tuscany with a dream of sharing the authentic flavors of Italian
          home cooking with their new community. What began as a small
          storefront on Olive Street quickly became a beloved neighborhood
          destination, known for its hand-rolled pasta, wood-fired pizzas, and
          warm, inviting atmosphere.
        </p>
        <p>
          Our recipes have been passed down through three generations, each
          adding their own touch while staying true to the traditions of
          Nonna&rsquo;s kitchen. We source the finest imported Italian
          ingredients — San Marzano tomatoes, Parmigiano-Reggiano, extra-virgin
          olive oil — and complement them with the best local produce and
          artisan goods. Every dish that leaves our kitchen is a reflection of
          our family&rsquo;s dedication to quality, simplicity, and love for
          good food.
        </p>
      </div>

      {/* Stats Row */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#1C1008]/10 pt-12">
        <div className="text-center">
          <p className="text-3xl font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] font-bold">
            25+ Years
          </p>
          <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/60 mt-1">
            Of serving Chicago
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] font-bold">
            100% Scratch Kitchen
          </p>
          <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/60 mt-1">
            Made fresh daily
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] font-bold">
            Family Owned
          </p>
          <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/60 mt-1">
            Since day one
          </p>
        </div>
      </div>
    </div>
  );
}
