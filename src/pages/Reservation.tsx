import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "../data/menu";

function Select({ label }: { label: string }) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl bg-[#faf8f6] px-6 py-5 text-sm text-espresso/50">
      {label}
      <ChevronDown size={18} className="text-espresso" />
    </button>
  );
}

export default function Reservation() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ date: "", time: "", size: "" });
  void form;
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative mx-auto">
          <div className="absolute -inset-10 rounded-r-full bg-black/[0.04]" />
          <img
            src={IMAGES.bookTable}
            alt="Book a table"
            className="relative h-[380px] w-[380px] rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-display text-5xl md:text-6xl font-bold">Book a table</h1>
          <div className="mt-8 space-y-4">
            <div onClick={() => setForm({ date: "2022-02-28", time: "", size: "" })}>
              <Select label="Date" />
            </div>
            <Select label="Time" />
            <Select label="Party size" />
            <button
              onClick={() => navigate("/reservation/confirm")}
              className="w-full rounded-2xl bg-brand py-5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
