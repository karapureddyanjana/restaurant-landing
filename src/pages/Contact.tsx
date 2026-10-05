import { Navigation, X } from "lucide-react";
import { IMAGES } from "../data/menu";

export default function Contact() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-5 py-12 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold">Contact us</h1>
        <p className="mt-4 text-sm leading-6 text-espresso/60">
          We love hearing from our customers. Feel free to share your experience or ask
          any questions you may have.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
          {["First name", "Last name", "Email address", "Subject"].map((p) => (
            <input
              key={p}
              placeholder={p}
              className="rounded-2xl bg-[#faf8f6] px-6 py-5 text-sm outline-none placeholder:text-espresso/40"
            />
          ))}
          <textarea
            placeholder="Message"
            rows={8}
            className="rounded-2xl bg-[#faf8f6] px-6 py-5 text-sm outline-none placeholder:text-espresso/40 md:col-span-2"
          />
        </div>
        <button className="mt-8 w-full max-w-xs rounded-2xl bg-brand py-4 text-sm font-medium text-white hover:bg-brand-dark">
          Submit
        </button>
      </div>
      <div className="relative h-[420px] w-full overflow-hidden bg-sand">
        <img
          src={IMAGES.mapContact}
          alt="Map to Delizioso Restaurant"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 w-[92%] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
          <div className="flex items-center gap-4">
            <img
              src={IMAGES.mapFood}
              alt="Delizioso Restaurant"
              className="h-20 w-28 rounded-xl object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-bold">Delizioso Restaurant</p>
              <p className="mt-1 text-xs text-espresso/60">
                Bronx, NY 10463, Amerika Serikat
                <br />
                40.885147,-73.9220459
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end gap-2">
              <button className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
                <X size={15} />
              </button>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-espresso text-white">
                <Navigation size={22} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
