import { Heart } from "lucide-react";

export default function DimeAidBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  if (size === "md") {
    return (
      <div className="flex items-center gap-2 rounded-full bg-[#06C167]/15 px-3 py-1.5 text-sm font-medium text-[#06C167]">
        <Heart size={14} fill="currentColor" />
        DIME AID Partner
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#06C167]/15 px-2 py-0.5 text-xs font-medium text-[#06C167]">
      <Heart size={10} fill="currentColor" />
      DIME AID
    </span>
  );
}
