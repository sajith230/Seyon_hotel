"use client";

import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "94714147193"; // +94 71 414 7193 (no +, no leading 0)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  identifier: string;
  buttonText: string;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ identifier, buttonText, className, onClick, type, ...props }, ref) => {
    const spanRef = useRef<HTMLSpanElement | null>(null);

    const calSpanPosition = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      const btn = document.querySelector(`.${identifier}`);
      if (!spanRef.current || !btn) return;

      const { top, left } = btn.getBoundingClientRect();
      const spanTop = e.clientY - top;
      const spanLeft = e.clientX - left;

      spanRef.current.style.top = `${spanTop}px`;
      spanRef.current.style.left = `${spanLeft}px`;
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(e);
      if (onClick) return;
      if ((type || "button") === "submit") return;
      const url = `https://wa.me/${WHATSAPP_NUMBER}`;
      window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
      <Button
        ref={ref}
        className={cn(
          identifier,
          "relative flex items-center bg-[#028EFC] text-white rounded-md p-2 shadow-md transition-all duration-300 ease-in overflow-hidden xl:w-full",
          className
        )}
        onMouseEnter={calSpanPosition}
        onClick={handleClick}
        type={type}
        {...props}
      >
        <span className="flex-1 text-center pr-6">{buttonText}</span>
        <span className="absolute right-1 flex items-center justify-center w-6 h-6 rounded-full">
          <GoArrowUpRight size={14} className="text-white" />
        </span>
      </Button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
