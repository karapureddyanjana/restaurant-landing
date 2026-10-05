import { Star } from "lucide-react";

export function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < value ? "fill-brand text-brand" : "fill-sand text-sand"
          }
        />
      ))}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-[56px] leading-tight font-bold text-espresso text-center">
      {children}
    </h2>
  );
}
