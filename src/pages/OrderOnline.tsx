import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Minus, Plus, Trash2 } from "lucide-react";
import { CATEGORIES, DISHES } from "../data/menu";
import DishCard from "../components/DishCard";

const initialCart = [
  { name: "Spaghetti", price: 24.1, qty: 2 },
  { name: "Pizza", price: 35.7, qty: 2 },
  { name: "Caesar salad", price: 18.5, qty: 2 },
];

export default function OrderOnline() {
  const [cat, setCat] = useState("Dinner");
  const [cart] = useState(initialCart);
  const [voucher, setVoucher] = useState("FREETOETAT");
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-center text-5xl md:text-6xl font-bold">Menu</h1>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-8 py-3.5 text-[13px] ${
              cat === c ? "bg-black text-white" : "bg-[#faf8f6] text-espresso/70"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-sm font-bold tracking-widest">PASTA</h2>
          <div className="mt-4 h-0.5 w-16 bg-brand" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {DISHES.filter((d) => d.category === "Pasta")
              .slice(0, 9)
              .map((d, i) => (
                <DishCard key={d.id} dish={d} highlight={i === 0} />
              ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-espresso text-white">
              <ChevronLeft size={18} />
            </span>
            {[1, 2, 3].map((n) => (
              <span key={n} className="grid h-10 w-10 place-items-center rounded-xl bg-blush text-sm text-brand">
                {n}
              </span>
            ))}
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-espresso text-white">
              <ChevronRight size={18} />
            </span>
          </div>

          <h2 className="mt-14 text-sm font-bold tracking-widest">PIZZA</h2>
          <div className="mt-4 h-0.5 w-16 bg-brand" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {DISHES.filter((d) => d.category === "Pizza").map((d, i) => (
              <DishCard key={d.id} dish={d} highlight={i === 0} />
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-[#faf8f6] p-6 lg:sticky lg:top-24">
          <div className="rounded-2xl bg-royal px-4 py-4 text-center font-semibold text-white">
            Order list
          </div>
          <div className="mt-5 space-y-5">
            {cart.map((item) => (
              <div key={item.name} className="border-b border-black/5 pb-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <Trash2 size={14} className="text-danger" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <button className="grid h-6 w-6 place-items-center rounded-full bg-white shadow">
                      <Minus size={12} />
                    </button>
                    <span>{item.qty}</span>
                    <button className="grid h-6 w-6 place-items-center rounded-full bg-white shadow">
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="text-sm font-semibold text-brand">${item.price.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold">Voucher Code</p>
            <div className="mt-2 flex gap-2">
              <input
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                className="w-full rounded-xl bg-white px-3 py-2.5 text-xs font-semibold tracking-wider text-sky"
              />
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky text-white">
                <Plus size={18} />
              </button>
            </div>
          </div>
          <dl className="mt-5 space-y-2 text-sm">
            {[
              ["Subtotal", "$78.3"],
              ["Tax fee", "$3.5"],
              ["Voucher", "$5.0"],
              ["Total", "$76.8"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <dt className="font-semibold">{k}</dt>
                <dd className="font-semibold text-brand">{v}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/checkout"
            className="mt-5 block rounded-2xl bg-leaf py-3.5 text-center text-sm font-semibold text-white"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
