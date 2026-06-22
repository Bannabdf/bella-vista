import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations | Bella Vista",
  description:
    "Make a reservation or get in touch with Bella Vista Ristorante.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair-display)] text-[#1C1008] text-center mb-4">
        Reservations
      </h1>
      <p className="text-center text-[#1C1008]/60 font-[family-name:var(--font-lato)] mb-14 text-sm">
        Book your table at Bella Vista.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Reservation Form */}
        <div>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-[family-name:var(--font-lato)] font-bold text-[#1C1008] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-[#1C1008]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-lato)] text-[#1C1008] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/40 focus:border-[#8B1A1A]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-[family-name:var(--font-lato)] font-bold text-[#1C1008] mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full border border-[#1C1008]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-lato)] text-[#1C1008] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/40 focus:border-[#8B1A1A]"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-[family-name:var(--font-lato)] font-bold text-[#1C1008] mb-1"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className="w-full border border-[#1C1008]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-lato)] text-[#1C1008] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/40 focus:border-[#8B1A1A]"
              />
            </div>

            <div>
              <label
                htmlFor="partySize"
                className="block text-sm font-[family-name:var(--font-lato)] font-bold text-[#1C1008] mb-1"
              >
                Party Size
              </label>
              <select
                id="partySize"
                name="partySize"
                required
                className="w-full border border-[#1C1008]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-lato)] text-[#1C1008] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/40 focus:border-[#8B1A1A]"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="requests"
                className="block text-sm font-[family-name:var(--font-lato)] font-bold text-[#1C1008] mb-1"
              >
                Special Requests
              </label>
              <textarea
                id="requests"
                name="requests"
                rows={3}
                className="w-full border border-[#1C1008]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-lato)] text-[#1C1008] bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/40 focus:border-[#8B1A1A] resize-none"
                placeholder="Allergies, celebrations, seating preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B1A1A] text-white px-6 py-3 rounded text-sm font-[family-name:var(--font-lato)] font-bold tracking-wide hover:bg-[#6e1414] transition-colors"
            >
              Submit Reservation
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] mb-2">
              Address
            </h3>
            <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/80">
              123 Olive Street
              <br />
              Chicago, IL 60601
            </p>
          </div>

          <div>
            <h3 className="text-lg font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] mb-2">
              Phone
            </h3>
            <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/80">
              (312) 555-0199
            </p>
          </div>

          <div>
            <h3 className="text-lg font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] mb-2">
              Email
            </h3>
            <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/80">
              reservations@bellavista.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] mb-2">
              Hours
            </h3>
            <div className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/80 space-y-1">
              <p>Monday – Thursday: 5pm – 10pm</p>
              <p>Friday – Saturday: 5pm – 11pm</p>
              <p>Sunday: 4pm – 9pm</p>
            </div>
          </div>

          <div className="bg-[#1C1008]/5 rounded p-4 border border-[#1C1008]/10">
            <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/80 italic">
              For parties over 8, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
