import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, ChevronDown, Clock, User, X } from "lucide-react";

export function ReservationShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-espresso/70 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          to="/reservation"
          className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-white"
        >
          <X size={20} />
        </Link>
        <div className="bg-white px-6 py-8 md:px-12">{children}</div>
      </div>
    </div>
  );
}

export function DetailList() {
  return (
    <ul className="space-y-3 text-[13px] text-espresso/70">
      <li className="flex items-center gap-3">
        <Calendar size={16} /> Saturday, 28 february 2022
      </li>
      <li className="flex items-center gap-3">
        <Clock size={16} /> 04:30 pm
      </li>
      <li className="flex items-center gap-3">
        <User size={16} /> 2 people (Standar seating)
      </li>
    </ul>
  );
}

export default function ConfirmReservation() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  return (
    <ReservationShell>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-display font-bold text-white">
            D
          </span>
          <span className="text-xs font-semibold">
            Deli<span className="text-brand">zioso</span>
          </span>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-brand px-4 py-1.5 text-xs text-white">Sign in</span>
          <span className="rounded-full bg-leaf px-4 py-1.5 text-xs text-white">Sign up</span>
        </div>
      </div>
      <h1 className="font-display mt-8 text-center text-4xl md:text-5xl font-bold">Reservation</h1>
      <div className="mt-6 rounded-2xl bg-sky/15 px-6 py-5 text-center text-[13px]">
        Due to limited availability, we can hold this table for you for{" "}
        <strong>5:00 minutes</strong>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-bold">Data order</h2>
          <div className="mt-4 space-y-4">
            {["First name", "Last name"].map((p) => (
              <input
                key={p}
                placeholder={p}
                className="w-full rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm outline-none placeholder:text-espresso/40"
              />
            ))}
            <div className="flex gap-3 rounded-2xl bg-[#faf8f6] px-6 py-4">
              <span className="flex items-center gap-1 text-sm">
                <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-b from-red-500 via-yellow-400 to-black" />
                <ChevronDown size={16} />
              </span>
              <input
                placeholder="Phone number"
                className="w-full bg-transparent text-sm outline-none placeholder:text-espresso/40"
              />
            </div>
            <input
              placeholder="Email address"
              className="w-full rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm outline-none placeholder:text-espresso/40"
            />
            <button className="flex w-full items-center justify-between rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm text-espresso/40">
              Select an accasion <ChevronDown size={16} className="text-espresso" />
            </button>
            <textarea
              placeholder="Add a special request"
              rows={5}
              className="w-full rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm outline-none placeholder:text-espresso/40"
            />
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-[#faf8f6] p-6">
            <h3 className="text-sm font-bold">Reservation detail</h3>
            <div className="mt-3">
              <DetailList />
            </div>
          </div>
          <h3 className="mt-6 text-sm font-bold">Restaurant informations</h3>
          <p className="mt-3 text-[13px] leading-6 text-espresso/65">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="mt-3 text-[13px] leading-6 text-espresso/65">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
          </p>
        </div>
      </div>
      <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] text-espresso/70">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 h-5 w-5 accent-espresso"
        />
        Sign me up to receive dining offers and news from this restaurant by email.
      </label>
      <button
        onClick={() => navigate("/reservation/confirmed")}
        className="mt-6 w-full max-w-sm rounded-2xl bg-brand py-4 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Confirm reservation
      </button>
    </ReservationShell>
  );
}
