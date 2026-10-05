import type { Dish } from "../data/menu";
import { Stars } from "./ui";

export default function DishCard({
  dish,
  highlight = false,
}: {
  dish: Dish;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-[28px] p-5 text-center transition-shadow hover:shadow-[0_18px_45px_-18px_rgba(87,103,119,0.35)] ${
        highlight ? "bg-brand text-white" : "bg-[#faf8f6]"
      }`}
    >
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-full shadow-lg">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{dish.name}</h3>
      <div className="mt-2">
        <Stars value={dish.rating} />
      </div>
      <p
        className={`mx-auto mt-3 max-w-[240px] text-[11px] leading-5 ${
          highlight ? "text-white/85" : "text-espresso/60"
        }`}
      >
        {dish.description}
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="text-[15px] font-semibold">${dish.price.toFixed(2)}</span>
        <button
          className={`rounded-full px-4 py-2 text-xs font-medium ${
            highlight ? "bg-white text-espresso" : "bg-brand text-white hover:bg-brand-dark"
          }`}
        >
          Order now
        </button>
      </div>
    </article>
  );
}
