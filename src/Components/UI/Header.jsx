import { Moon, Sun } from "lucide-react";
import ShiftButton from "../Buttons/Shift";
import icon from "../../assets/icon.png";
export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-14 py-8">
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold text-muted-foreground  text-PrimaryGrayText">
          Good Morning,
        </span>
        <span
          style={{
            background:
              "linear-gradient(180deg, #EDEDED 0%, #BFF1B7 50%, #95E362 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          className="font-bold text-xl"
        >
          John Doe
        </span>
      </div>
      <div className="flex items-center gap-6">
        <ShiftButton />
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
          <span className="text-xl text-PrimaryWhiteText">John Doe</span>
          <span className="text-xs text-muted-foreground text-PrimaryGrayText">ID: 96627596</span>
          </div>
          <img
            src={icon}
            alt="Profile"
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
