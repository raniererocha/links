import { cn } from "@/lib/utils";
import { Activity, type ReactElement } from "react";

export interface LinkProps {
  href: string;
  label: string;
  description?: string;
  hasHighlight?: boolean;
  icon?: ReactElement
}
export function LinkItem({
  href,
  description,
  label,
  hasHighlight = false,
  icon = undefined
}: LinkProps) {
  const style =
    "btn cursor-pointer only:rounded-md first:rounded-b-none last:rounded-t-none  [&:not(:first-child):not(:last-child):not(:only-child)]:rounded-none";

  return (
    <a
      href={href}
      target="__BLANK"
      rel="noopener noreferrer"
      className={cn(
        style,
        hasHighlight ? "bg-purple-700/30 border-white/15 border " : ""
      )}
    >
      <div className="flex items-center w-full gap-2">
        <Activity mode={icon ? "visible" : "hidden"}>
            {icon}
        </Activity>
        <div className="flex flex-col">
          <span className="leading-4">{label}</span>
          <Activity mode={description ? "visible" : "hidden"}>
            <span className="text-xs italic text-white/70 font-light">
              {description}
            </span>
          </Activity>
        </div>
      </div>
    </a>
  );
}
