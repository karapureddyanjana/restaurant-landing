import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About us" },
  { to: "/order", label: "Order online" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact us" },
];

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-display text-lg font-bold text-white">
            D
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Deli<span className="text-brand">zioso</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-[13px] text-espresso/80">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? "text-brand font-medium" : "hover:text-brand"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/order")}
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full bg-black/[0.04] hover:bg-black/[0.08]"
          >
            <ShoppingCart size={18} />
            <span className="absolute -top-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-danger text-[9px] font-bold text-white">
              3
            </span>
          </button>
          <button
            onClick={() => navigate("/login")}
            className="rounded-full bg-leaf px-5 py-2.5 text-[13px] font-medium text-white hover:brightness-95"
          >
            Log in
          </button>
        </div>
      </div>
      <nav className="lg:hidden overflow-x-auto border-t border-black/5">
        <div className="flex gap-5 px-5 py-2.5 text-[13px] whitespace-nowrap">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? "text-brand font-medium" : "text-espresso/70"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
