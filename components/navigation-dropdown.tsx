import { useRouteBackground } from "@/hooks/useRouteBackground";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";

interface NavigationDropdownProps {
  open: boolean;
  onOpen: (value: boolean) => void;
}
function NavigationDropdown({ open, onOpen }: NavigationDropdownProps) {
  const currentBgColor = useRouteBackground();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onOpen(false);
      }
    },
    [onOpen],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <div className="contents">
      <div
        ref={dropdownRef}
        className={cn(
          currentBgColor,
          "w-full flex items-center justify-center lg:hidden relative z-50",
        )}
      >
        <motion.button
          onClick={() => onOpen(!open)}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 p-2 rounded-md text-black"
        >
          <ChevronDown
            className={cn("w-4 h-4 transition-transform", open && "rotate-180")}
          />
        </motion.button>
      </div>
    </div>
  );
}

export default NavigationDropdown;
