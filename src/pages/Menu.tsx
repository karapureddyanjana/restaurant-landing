import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, DISHES } from "../data/menu";
import DishCard from "../components/DishCard";
import { SectionTitle } from "../components/ui";

export default function Menu() {
  const [cat, setCat] = useState<string>("All catagory");
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-center text-5xl md:text-6xl font-bold">Menu</h1>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-8 py-3.5 text-[13px] ${
              cat === c ? "bg-espresso text-white" : "bg-[#faf8f6] text-espresso/70"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DISHES.slice(0, 6).map((d) => (
          <DishCard key={d.id} dish={d} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-espresso text-white">
          <ChevronLeft size={18} />
        </span>
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`grid h-10 w-10 place-items-center rounded-xl text-sm ${
              n === 1 ? "bg-espresso text-white" : "bg-blush text-brand"
            }`}
          >
            {n}
          </span>
        ))}
        <span className="text-espresso/40">…</span>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-espresso text-white">
          <ChevronRight size={18} />
        </span>
      </div>
      <div className="mt-16">
        <SectionTitle>Our popular menu</SectionTitle>
        <p className="text-center text-sm text-espresso/55 mt-3">
          Same kitchen, same love — also available for online order.
        </p>
      </div>
    </div>
  );
}
