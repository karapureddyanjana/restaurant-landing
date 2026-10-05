import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, CHEFS, DISHES, IMAGES, TESTIMONIAL } from "../data/menu";
import DishCard from "../components/DishCard";
import { SectionTitle, Stars } from "../components/ui";

export default function Home() {
  const [cat, setCat] = useState<string>("All catagory");
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-14 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-block rounded-full bg-blush px-4 py-1.5 font-alt text-[18px] text-brand">
            Restaurant
          </span>
          <h1 className="font-alt mt-4 text-6xl md:text-[80px] leading-[1.05] font-bold">
            Italian
            <br />
            Cuisine
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-espresso/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </p>
          <div className="mt-7 flex gap-4">
            <Link
              to="/order"
              className="rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-dark"
            >
              Order now
            </Link>
            <Link
              to="/reservation"
              className="rounded-full bg-leaf px-8 py-3.5 text-sm font-medium text-white hover:brightness-95"
            >
              Reservation
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <img
            src={IMAGES.heroPasta}
            alt="Spaghetti"
            className="ml-auto h-[380px] w-[380px] rounded-full object-cover shadow-[-12px_29px_91px_rgba(181,153,120,0.41)]"
          />
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-mint/60">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <img
            src={IMAGES.welcomeSalad}
            alt="Welcome salad"
            className="mx-auto h-[340px] w-[340px] rounded-full object-cover shadow-xl"
          />
          <div>
            <h2 className="font-display text-4xl md:text-[56px] leading-tight font-bold">
              Welcome to <span className="text-brand">delizioso</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-espresso/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
            </p>
            <Link
              to="/menu"
              className="mt-7 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-dark"
            >
              See our menu
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR MENU */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle>Our popular menu</SectionTitle>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-7 py-3 text-[13px] ${
                cat === c ? "bg-espresso text-white" : "bg-[#faf8f6] text-espresso/70 hover:bg-sand/60"
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
      </section>

      {/* RESERVE */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative mx-auto">
            <img
              src={IMAGES.reserveMain}
              alt="Reserve a table"
              className="h-[340px] w-[340px] rounded-full object-cover"
            />
            <img
              src={IMAGES.reserveSmall1}
              alt=""
              className="absolute -right-8 -top-4 h-24 w-24 rounded-full border-4 border-cream object-cover"
            />
            <img
              src={IMAGES.reserveSmall2}
              alt=""
              className="absolute -left-8 bottom-0 h-24 w-24 rounded-full border-4 border-cream object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-[56px] leading-tight font-bold">
              Let's reserve <br />
              <span className="text-brand">a table</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-espresso/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
            </p>
            <Link
              to="/reservation"
              className="mt-7 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-dark"
            >
              Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* CHEFS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle>Our greatest chef</SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CHEFS.map((c) => (
            <article key={c.name} className="text-center">
              <div className="overflow-hidden rounded-[28px] bg-blush">
                <img src={c.image} alt={c.name} className="h-[380px] w-full object-cover" loading="lazy" />
              </div>
              <h3 className="mt-4 font-semibold">{c.name}</h3>
              <p className="text-sm text-espresso/55">{c.role}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/about"
            className="inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-dark"
          >
            View all
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-cream/60">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <SectionTitle>Our customers say</SectionTitle>
          <img
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.name}
            className="mx-auto mt-8 h-24 w-24 rounded-full object-cover"
          />
          <h3 className="mt-4 font-semibold">{TESTIMONIAL.name}</h3>
          <p className="text-xs text-espresso/55">{TESTIMONIAL.role}</p>
          <div className="mt-3 flex justify-center">
            <Stars value={5} />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-espresso/65">
            “{TESTIMONIAL.quote}”
          </p>
        </div>
      </section>

      {/* OPEN HOURS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-[32px] bg-espresso text-white">
          <img
            src={IMAGES.openHouse}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative px-6 py-14 text-center md:px-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">we are open from</h2>
            <p className="mt-4 font-medium">Monday-Sunday</p>
            <p className="mt-2 text-sm text-white/70">Launch : Mon-Sun : 11:00am-02:00pm</p>
            <p className="text-sm text-white/70">Dinner : Sunday : 04:00pm-08:00pm</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link to="/order" className="rounded-full bg-brand px-8 py-3 text-sm font-medium hover:bg-brand-dark">
                Order now
              </Link>
              <Link to="/reservation" className="rounded-full bg-white px-8 py-3 text-sm font-medium text-espresso">
                Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
