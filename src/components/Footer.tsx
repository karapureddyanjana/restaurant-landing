import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-display text-lg font-bold text-white">
              D
            </span>
            <span className="text-sm font-semibold">
              Deli<span className="text-brand">zioso</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-[13px] leading-6 text-white/70">
            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <span
                key={i}
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-espresso"
              >
                <Icon size={17} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-brand text-base md:text-[25px] font-semibold">Page</h4>
          <ul className="mt-4 space-y-2.5 text-[13px] text-white/75">
            {[
              ["Home", "/"],
              ["Menu", "/menu"],
              ["Order online", "/order"],
              ["Catering", "/about"],
              ["Reservation", "/reservation"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-brand text-base md:text-[25px] font-semibold">Information</h4>
          <ul className="mt-4 space-y-2.5 text-[13px] text-white/75">
            {["About us", "Testimonial", "Event"].map((label) => (
              <li key={label}>
                <Link to="/about" className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-brand text-base md:text-[25px] font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-[13px] text-white/75">
            <li>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
            <li>delizioso@gmail.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-white/60">
          Copyright © 2022 Delizioso
        </p>
      </div>
    </footer>
  );
}
