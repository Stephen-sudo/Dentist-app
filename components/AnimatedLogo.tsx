import { Sparkles } from "lucide-react";
import { ToothIcon } from "./ui/ToothIcon";

export default function AnimatedLogo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <ToothIcon
          className="w-10 h-10 text-white transition-transform duration-300
          group-hover:scale-110 group-hover:rotate-6 drop-shadow-md"
        />

        <Sparkles
          className="w-5 h-5 text-white absolute -top-1 -right-2 
          animate-ping opacity-80"
        />
      </div>

      <h1
        className="text-2xl font-bold text-white tracking-wide
        transition-all duration-300 group-hover:text-sky-100"
      >
        SmileDental
      </h1>
    </div>
  );
}
