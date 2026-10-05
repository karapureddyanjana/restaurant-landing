import { IMAGES } from "../data/menu";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative mx-auto">
          <div className="absolute -inset-8 rounded-full bg-black/[0.03]" />
          <img
            src={IMAGES.aboutRestaurant}
            alt="Our kitchen"
            className="relative h-[380px] w-[380px] rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-brand">Our</span>
            <br />
            restaurant
          </h1>
          <p className="mt-6 text-sm leading-7 text-espresso/65">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2 items-center">
        <p className="order-2 lg:order-1 text-sm leading-7 text-espresso/65">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <div className="relative mx-auto order-1 lg:order-2">
          <div className="absolute -inset-8 rounded-full bg-black/[0.03]" />
          <img
            src={IMAGES.aboutPlate}
            alt="Signature plate"
            className="relative h-[380px] w-[380px] rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2 items-start">
        <img
          src={IMAGES.ownerChef}
          alt="Ismail Marzuki"
          className="h-[480px] w-full max-w-md object-cover"
        />
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-brand">Owner</span> &<br />
            Executive Chef
          </h2>
          <p className="mt-4 text-lg font-semibold">Ismail Marzuki</p>
          <p className="mt-6 font-display text-5xl text-brand/20">“</p>
          <p className="text-lg leading-9 text-espresso/70 italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
