import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, Navigation } from "lucide-react";
import { IMAGES } from "../data/menu";

const inputCls =
  "w-full rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm outline-none placeholder:text-espresso/40";

function Radio({ checked, label }: { checked?: boolean; label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm">
      <span
        className={`grid h-6 w-6 place-items-center rounded-full border ${
          checked ? "border-leaf" : "border-espresso/30"
        }`}
      >
        {checked && <span className="h-3.5 w-3.5 rounded-full bg-leaf" />}
      </span>
      {label}
    </label>
  );
}

export default function Checkout() {
  const [orderTime, setOrderTime] = useState<"now" | "later">("now");
  const [method, setMethod] = useState<"delivery" | "takeaway">("delivery");
  const [pay, setPay] = useState("cod");
  const [agree, setAgree] = useState(true);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <div className="flex items-center gap-6">
        <Link to="/order" className="grid h-10 w-10 place-items-center rounded-full bg-espresso text-white">
          <ChevronLeft size={18} />
        </Link>
        <h1 className="font-display mx-auto text-4xl md:text-5xl font-bold">Checkout</h1>
        <span className="w-10" />
      </div>

      <h2 className="mt-12 font-semibold">Shipping address</h2>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <input
          defaultValue="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
          className={`${inputCls} md:flex-1`}
        />
        <button className="rounded-2xl bg-sky px-10 py-4 text-sm font-medium text-white">
          Change
        </button>
      </div>

      <h2 className="mt-12 font-semibold">Order data</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <input placeholder="First name" className={inputCls} />
        <input placeholder="Last name" className={inputCls} />
        <div className={`flex items-center gap-3 ${inputCls}`}>
          <span className="flex items-center gap-1">
            <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-b from-red-500 via-yellow-400 to-black" />
            <ChevronDown size={15} />
          </span>
          <input placeholder="Phone number" className="w-full bg-transparent outline-none" />
        </div>
        <input placeholder="Email address" className={inputCls} />
        <textarea placeholder="Note" rows={6} className={`${inputCls} md:col-span-2`} />
      </div>

      <h2 className="mt-10 font-semibold">Order time</h2>
      <div className="mt-4 flex gap-10">
        <span onClick={() => setOrderTime("now")}>
          <Radio checked={orderTime === "now"} label="Order now" />
        </span>
        <span onClick={() => setOrderTime("later")}>
          <Radio checked={orderTime === "later"} label="Order later" />
        </span>
      </div>

      <h2 className="mt-8 font-semibold">Order method</h2>
      <div className="mt-4 flex gap-10">
        <span onClick={() => setMethod("delivery")}>
          <Radio checked={method === "delivery"} label="Delivery" />
        </span>
        <span onClick={() => setMethod("takeaway")}>
          <Radio checked={method === "takeaway"} label="Take a way" />
        </span>
      </div>

      <h2 className="mt-8 font-semibold">Payment method</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {[
          ["cod", "Cash On Delivery"],
          ["bca", "BCA Virtual Account"],
          ["cc", "Credit Card"],
          ["bank", "Transfer Bank"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setPay(id)}
            className="flex items-center gap-3 rounded-2xl bg-[#faf8f6] px-6 py-4 text-left text-sm"
          >
            <span
              className={`grid h-6 w-6 place-items-center rounded-full border ${
                pay === id ? "border-leaf" : "border-espresso/30"
              }`}
            >
              {pay === id && <span className="h-3.5 w-3.5 rounded-full bg-leaf" />}
            </span>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-10 font-semibold">Shipping address</h2>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <input placeholder="Please type your address" className={`${inputCls} md:flex-1`} />
        <button className="rounded-2xl bg-sky px-10 py-4 text-sm font-semibold text-white">
          Search
        </button>
      </div>
      <button className="mt-3 flex w-full items-center gap-3 rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm text-danger">
        <Navigation size={15} className="fill-danger" /> Use your current location
      </button>
      <div className="relative mt-4 h-[320px] overflow-hidden rounded-2xl bg-sand">
        <img
          src={IMAGES.mapCheckout}
          alt="Delivery area map"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 w-[86%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/95 p-3 shadow-xl">
          <div className="flex gap-3">
            <img
              src={IMAGES.mapHouse}
              alt="Highbridge House"
              className="h-24 w-24 rounded-xl object-cover"
            />
            <div className="text-xs">
              <p className="font-bold">Highbridge House</p>
              <p className="mt-1 text-espresso/60">
                1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat 40.885147,-73.9220459
              </p>
              <button className="mt-2 w-full rounded-xl bg-[#ff4d4f] py-2 text-xs font-semibold text-white">
                Confirmation
              </button>
            </div>
          </div>
        </div>
      </div>

      <label className="mt-8 flex cursor-pointer items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 h-5 w-5 accent-espresso"
        />
        Choose to indicate that you have read and agree to our Terms of use & Privacy Policy.
      </label>
      <button className="mx-auto mt-6 block w-full max-w-sm rounded-2xl bg-brand py-4 font-semibold text-white hover:bg-brand-dark">
        Order now
      </button>
    </div>
  );
}
