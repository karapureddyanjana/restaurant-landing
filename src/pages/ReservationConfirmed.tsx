import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown, Ticket, Pencil, X } from "lucide-react";
import { ReservationShell, DetailList } from "./ConfirmReservation";
import { IMAGES } from "../data/menu";

export default function ReservationConfirmed() {
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
      <div className="-mx-6 md:-mx-12 mt-8 bg-leaf px-6 md:px-12 py-8 text-white">
        <h1 className="text-[28px] md:text-[40px] font-semibold">Reservation has been confirmed</h1>
        <p className="mt-3 flex items-center gap-2 text-[13px]">
          <CheckCircle2 size={15} /> The confirmation result has been sent to your email
        </p>
        <p className="mt-1.5 flex items-center gap-2 text-[13px]">
          <Ticket size={15} /> Booking ID : #123456
        </p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr_auto] items-start">
        <img
          src={IMAGES.bookTable}
          alt="Table"
          className="h-44 w-44 rounded-full border-[10px] border-blush object-cover"
        />
        <div>
          <h2 className="text-sm font-bold">Reservation detail</h2>
          <div className="mt-3">
            <DetailList />
          </div>
          <div className="mt-8">
            <button className="flex w-full items-center justify-between rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm text-espresso/40">
              Select an accasion (optional) <ChevronDown size={16} className="text-espresso" />
            </button>
            <textarea
              placeholder="Add a special request"
              rows={4}
              className="mt-4 w-full rounded-2xl bg-[#faf8f6] px-6 py-4 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex md:flex-col gap-3">
          <button className="flex items-center gap-2 rounded-2xl bg-sky/15 px-6 py-3 text-sm font-medium text-[#123968]">
            Modify <Pencil size={15} />
          </button>
          <Link
            to="/reservation/cancel"
            className="flex items-center gap-2 rounded-2xl bg-danger/10 px-6 py-3 text-sm font-medium text-danger"
          >
            Cancel <X size={15} />
          </Link>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div />
        <div>
          <h3 className="text-sm font-bold">Restaurant informations</h3>
          <p className="mt-3 text-[13px] leading-6 text-espresso/65">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </ReservationShell>
  );
}
