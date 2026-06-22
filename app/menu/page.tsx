import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Bella Vista",
  description: "Explore our menu of antipasti, primi, secondi, and dolci.",
};

const antipasti = [
  {
    name: "Bruschetta al Pomodoro",
    description:
      "Toasted ciabatta topped with fresh diced tomatoes, basil, garlic, and extra-virgin olive oil.",
    price: "$12",
  },
  {
    name: "Calamari Fritti",
    description:
      "Crispy fried calamari served with marinara sauce and lemon wedges.",
    price: "$14",
  },
  {
    name: "Insalata Caprese",
    description:
      "Sliced fresh mozzarella, vine-ripened tomatoes, and basil drizzled with balsamic reduction.",
    price: "$13",
  },
];

const primi = [
  {
    name: "Tagliatelle al Ragù",
    description:
      "Homemade tagliatelle tossed in a slow-simmered Bolognese sauce with Parmesan.",
    price: "$18",
  },
  {
    name: "Spaghetti alle Vongole",
    description:
      "Spaghetti with fresh clams, garlic, white wine, and a touch of chili flake.",
    price: "$20",
  },
  {
    name: "Risotto ai Funghi",
    description:
      "Arborio rice cooked with wild mushrooms, truffle oil, and Parmigiano-Reggiano.",
    price: "$19",
  },
  {
    name: "Penne all&rsquo;Arrabbiata",
    description:
      "Penne in a spicy tomato sauce with garlic, chili, and fresh parsley.",
    price: "$16",
  },
];

const secondi = [
  {
    name: "Salmone al Limone",
    description:
      "Pan-seared salmon fillet with lemon butter sauce, asparagus, and roasted potatoes.",
    price: "$26",
  },
  {
    name: "Pollo alla Parmigiana",
    description:
      "Breaded chicken breast baked with marinara, mozzarella, and served with spaghetti.",
    price: "$22",
  },
  {
    name: "Bistecca alla Fiorentina",
    description:
      "Grilled 14 oz ribeye steak finished with rosemary, garlic, and extra-virgin olive oil.",
    price: "$38",
  },
];

const dolci = [
  {
    name: "Tiramisu della Casa",
    description:
      "Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
    price: "$9",
  },
  {
    name: "Panna Cotta",
    description:
      "Silky vanilla cream topped with a mixed-berry compote.",
    price: "$8",
  },
  {
    name: "Cannoli Siciliani",
    description:
      "Crispy pastry shells filled with sweet ricotta, chocolate chips, and pistachios.",
    price: "$9",
  },
];

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; description: string; price: string }[];
}) {
  return (
    <div className="mb-14">
      <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-playfair-display)] text-[#8B1A1A] mb-6 border-b border-[#8B1A1A]/20 pb-2">
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1"
          >
            <div>
              <h3 className="text-lg font-[family-name:var(--font-playfair-display)] text-[#1C1008]">
                {item.name}
              </h3>
              <p className="text-sm font-[family-name:var(--font-lato)] text-[#1C1008]/70 mt-1 max-w-lg">
                {item.description}
              </p>
            </div>
            <span className="text-base font-bold text-[#8B1A1A] font-[family-name:var(--font-lato)] whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair-display)] text-[#1C1008] text-center mb-4">
        Our Menu
      </h1>
      <p className="text-center text-[#1C1008]/60 font-[family-name:var(--font-lato)] mb-14 text-sm">
        A carefully curated selection of traditional Italian dishes.
      </p>

      <MenuSection title="Antipasti" items={antipasti} />
      <MenuSection title="Primi" items={primi} />
      <MenuSection title="Secondi" items={secondi} />
      <MenuSection title="Dolci" items={dolci} />
    </div>
  );
}
