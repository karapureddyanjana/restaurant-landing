import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import { ReservationShell, DetailList } from "./ConfirmReservation";
import { IMAGES } from "../data/menu";

export default function CancelReservation() {
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
      <div className="-mx-6 md:-mx-12 mt-8 bg-brand px-6 md:px-12 py-8 text-white">
        <h1 className="max-w-md text-[28px] md:text-[40px] font-semibold leading-snug">
          Are you sure you want to cancel the reservation?
        </h1>
        <p className="mt-3 flex items-center gap-2 text-[13px]">
          <Ticket size={15} /> Booking ID : #123456
        </p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr] items-start">
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
          <Link
            to="/reservation"
            className="mt-8 block rounded-2xl bg-[#ff4d4f] py-4 text-center text-sm font-semibold text-white"
          >
            Cancel reservation
          </Link>
        </div>
      </div>
    </ReservationShell>
  );
}
